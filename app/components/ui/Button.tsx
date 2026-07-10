import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  showArrow = true,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-lg shadow-accent/25",
    secondary:
      "bg-surface-elevated text-white border border-border hover:bg-zinc-800 focus:ring-zinc-600",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-white/5 focus:ring-white/20",
  };

  const sizes = {
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3.5 text-base rounded-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
