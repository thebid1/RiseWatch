"""One-off: convert R!SEWATCH logo JPEG (white bg) into transparent PNG assets."""
import numpy as np
from PIL import Image

SRC = "scripts/R!SEWATCH Logo.jpeg"

img = Image.open(SRC).convert("RGB")
px = np.asarray(img).astype(np.float32)

# --- Un-blend from white: assume pixel = a*color + (1-a)*white ---------------
minc = px.min(axis=2)
alpha = np.clip((255.0 - minc) / 255.0, 0.0, 1.0)
alpha[alpha < 0.04] = 0.0

# The logo has exactly two colors. Snap every pixel to its nearest brand
# color (classified in observed space, robust at anti-aliased edges) so
# JPEG noise never reaches the output.
NAVY = np.array([0.0, 26.0, 69.0])
ROYAL = np.array([0.0, 70.0, 165.0])
is_royal = (255.0 - px[..., 2]) / np.maximum(255.0 - px[..., 0], 1.0) < 0.6
rgb = np.where(is_royal[..., None], ROYAL, NAVY)

out = np.dstack([rgb, alpha * 255.0]).astype(np.uint8)

# --- Find content bands (rows with any solid pixel) ---------------------------
solid = alpha > 0.35
row_has = solid.any(axis=1)
bands = []
start = None
gap = 0
for y, has in enumerate(row_has):
    if has:
        if start is None:
            start = y
        gap = 0
    elif start is not None:
        gap += 1
        if gap > 40:  # >40px of blank rows => band boundary
            bands.append((start, y - gap))
            start = None
            gap = 0
if start is not None:
    bands.append((start, len(row_has)))
print("bands:", bands)

# bands[0] = icon mark, bands[1..] = wordmark + tagline (one lockup)
icon_y = bands[0]
body_y = (bands[1][0], bands[-1][1])


def crop_region(region_alpha, region_rgba, y0, y1, pad=8):
    cols = np.where(region_alpha[y0:y1].any(axis=0))[0]
    x0, x1 = cols[0], cols[-1] + 1
    x0 = max(0, x0 - pad); x1 = min(region_rgba.shape[1], x1 + pad)
    y0 = max(0, y0 - pad); y1 = min(region_rgba.shape[0], y1 + pad)
    return Image.fromarray(region_rgba[y0:y1, x0:x1])


def square(im, size=None, pad_frac=0.06):
    w, h = im.size
    side = int(max(w, h) * (1 + pad_frac * 2))
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2), im)
    if size:
        canvas = canvas.resize((size, size), Image.LANCZOS)
    return canvas


icon = crop_region(alpha, out, *icon_y)
full = crop_region(alpha, out, bands[0][0], body_y[1])
word = crop_region(alpha, out, *body_y)

# Split wordmark band into name ("R!SEWATCH") and tagline line
sub_solid = solid[body_y[0]:body_y[1]]
sub_rows = sub_solid.any(axis=1)
sub = []
s = None
for y, has in enumerate(sub_rows):
    if has and s is None:
        s = y
    elif not has and s is not None:
        sub.append((s, y)); s = None
if s is not None:
    sub.append((s, len(sub_rows)))
sub = [(a + body_y[0], b + body_y[0]) for a, b in sub if b - a > 20]
print("sub-bands:", sub)
name = crop_region(alpha, out, *sub[0]) if sub else word

icon.save("public/logo-icon.png")
full.save("public/logo-full.png")
word.save("public/logo-wordmark.png")
name.save("public/logo-name.png")

# White-on-transparent versions for dark backgrounds
for name in ["logo-full", "logo-wordmark", "logo-icon", "logo-name"]:
    im = Image.open(f"public/{name}.png")
    a = np.asarray(im)[..., 3]
    white = np.dstack([np.full_like(a, 255), np.full_like(a, 255),
                       np.full_like(a, 255), a])
    Image.fromarray(white).save(f"public/{name}-white.png")

# App icons
square(icon, 512).save("app/icon.png")
square(icon).save("app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# --- Report ------------------------------------------------------------------
print("navy: #%02x%02x%02x" % tuple(int(c) for c in NAVY))
print("blue: #%02x%02x%02x" % tuple(int(c) for c in ROYAL))
print("sizes:", {n: Image.open(f"public/{n}.png").size for n in
      ["logo-full", "logo-wordmark", "logo-icon"]})
