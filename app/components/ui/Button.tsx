import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-royal text-white hover:bg-royal-dark focus:ring-royal focus:ring-offset-paper",
    secondary:
      "bg-white text-navy border border-line hover:bg-sky focus:ring-royal/40 focus:ring-offset-paper",
    outline:
      "border border-white/30 bg-transparent text-white hover:bg-white/10 focus:ring-white/40 focus:ring-offset-navy",
    ghost:
      "border border-navy/20 bg-transparent text-navy hover:bg-navy/5 focus:ring-navy/30 focus:ring-offset-paper",
  };

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
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
