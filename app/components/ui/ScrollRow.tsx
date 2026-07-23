"use client";

import { ReactNode, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ScrollRowProps {
  children: ReactNode;
  /** Layout classes for the row (gap, grid switch at sm/md, columns). */
  className?: string;
}

/**
 * Mobile: horizontal scroll row with an arrow hint, contained within the
 * container padding. sm/md+: falls back to the grid classes passed in.
 */
export function ScrollRow({ children, className = "" }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  const scrollNext = () => {
    const el = ref.current;
    if (el) el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={() => showHint && setShowHint(false)}
        className={`no-scrollbar flex snap-x snap-proximity overflow-x-auto pb-2 ${className}`}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Scroll for more"
        className={`sm:hidden absolute right-0 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-royal text-white shadow-lg shadow-navy/20 transition-opacity duration-300 ${
          showHint ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
