"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-heading font-bold text-primary"
            >
              LuxuryEstate
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-sm uppercase tracking-wider hover:text-primary transition-colors ${
                  pathname === item.path ? "text-primary" : ""
                }`}
              >
                {pathname === item.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full h-[1px] w-full bg-primary"
                  />
                )}
                {item.name}
              </Link>
            ))}
            <Link href="/bookviewing" className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm uppercase tracking-wider">
              Book a Viewing
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-foreground transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-foreground transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border py-4"
        >
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm uppercase tracking-wider hover:text-primary transition-colors ${
                  pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm uppercase tracking-wider self-start">
              Book a Viewing
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
