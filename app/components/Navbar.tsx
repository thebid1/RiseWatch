"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-paper/85 backdrop-blur-xl border-b border-line"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-2.5" aria-label="HazardZero home">
          <Image
            src={scrolled ? "/HAZARDZERO LOGO.png" : "/HAZARDZERO LOGO.png"}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span
            className={`text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            HazardZero
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted hover:text-navy"
                  : "text-muted-light hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" size="md" showArrow={false}>
            Contact Us
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-paper border-b border-line px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" size="md" className="mt-2" showArrow={false}>
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
