import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  padded?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  padded = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${padded ? "py-24 md:py-32" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
