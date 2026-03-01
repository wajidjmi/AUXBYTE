/**
 * Header Component
 * ----------------
 * Responsive navigation bar with:
 *   - Gradient logo icon + brand name ("Auxbyte")
 *   - Desktop navigation links with active-state highlighting
 *   - Animated "Get a Quote" CTA button
 *   - Mobile hamburger menu with smooth slide animation
 *   - Background blur on scroll for glass effect
 *
 * NAV_LINKS array is the single source of truth for routes (DRY).
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

/* Navigation route definitions (DRY - edit once, used in desktop + mobile) */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Apply background blur once user scrolls past 20px */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu when navigating to a new route */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--bg-page-90)", borderBottom: "1px solid var(--border-subtle)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ---- Logo & Brand Name ---- */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Gradient logo icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#6c5ce7] flex items-center justify-center shadow-lg shadow-[#00e5ff]/20 group-hover:shadow-[#00e5ff]/40 transition-all duration-300 group-hover:scale-105">
            <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
              <path d="M12 8L20 4L28 8V16L20 20L12 16V8Z" fill="rgba(255,255,255,0.9)" />
              <path d="M12 24L20 20L28 24V32L20 36L12 32V24Z" fill="rgba(255,255,255,0.5)" />
              <circle cx="20" cy="20" r="3" fill="white" opacity="0.8" />
            </svg>
          </div>

          {/* Brand text */}
          <div>
            <span className="text-xl font-extrabold tracking-tight">
              Aux<span className="gradient-text">byte</span>
            </span>
            <p className="text-[9px] tracking-[2px] uppercase leading-tight" style={{ color: "var(--text-subtle)" }}>
              Digital Solutions Partner
            </p>
          </div>
        </Link>

        {/* ---- Desktop Navigation ---- */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#00e5ff] bg-[#00e5ff]/10"
                    : ""
                }`}
                style={!isActive ? { color: "var(--nav-text)" } : undefined}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "var(--nav-text-hover)"; e.currentTarget.style.background = "var(--nav-hover-bg)"; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "var(--nav-text)"; e.currentTarget.style.background = "transparent"; } }}
              >
                {label}
              </Link>
            );
          })}

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Gradient CTA button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </Link>
        </nav>

        {/* ---- Mobile Hamburger Button ---- */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {/* Three lines that animate into an X when open */}
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--hamburger-color)" }} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} style={{ background: "var(--hamburger-color)" }} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--hamburger-color)" }} />
          </button>
        </div>
      </div>

      {/* ---- Mobile Menu Drawer ---- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-1 backdrop-blur-xl" style={{ background: "var(--bg-page-95)", borderBottom: "1px solid var(--border-subtle)" }}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-[#00e5ff] bg-[#00e5ff]/10"
                    : ""
                }`}
                style={!isActive ? { color: "var(--nav-text)" } : undefined}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white text-sm font-semibold text-center"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
