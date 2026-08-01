"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  // Prevent hydration flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Reviews", path: "/testimonials" },
    { name: "FAQs", path: "/faqs" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glass border-b border-border/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                Beyond<span className="text-primary group-hover:text-accent transition-colors duration-300">thetimeline</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5 animate-pulse"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-muted hover:bg-slate-100 dark:hover:bg-slate-900/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side CTA & Theme toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-border text-foreground hover:text-primary transition-all duration-300 focus:outline-none"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary hover:bg-primary-hover text-white transition-all duration-300 shadow-md hover:shadow-primary/20 shadow-primary/10 group transform hover:-translate-y-0.5"
            >
              Get Free Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu toggle & Theme toggle */}
          <div className="flex items-center lg:hidden gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-border text-foreground hover:text-primary transition-all duration-300"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-foreground hover:text-primary bg-slate-100 dark:bg-slate-900 border border-border transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-in slide-in-from-top duration-300 absolute top-20 left-0 w-full glass border-b border-border/80 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-foreground hover:bg-slate-100 dark:hover:bg-slate-900/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/40">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
