/**
 * HomeHero (Client Component)
 * ----------------------------
 * The animated hero banner for the home page.
 * Separated into its own client component because it uses:
 *   - TypingEffect (requires useState/useEffect)
 *   - Particle animations
 *   - Interactive elements
 *
 * This keeps the main page.tsx as a server component
 * for better performance.
 */
"use client";

import Link from "next/link";
import TypingEffect from "@/components/TypingEffect";

/* Words to cycle through in the typing animation */
const TYPING_WORDS = [
  "Websites",
  "Mobile Apps",
  "E-Commerce Stores",
  "AI Solutions",
  "Cloud Platforms",
  "Digital Experiences",
];

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ---- Animated background gradients ---- */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: `linear-gradient(to bottom right, var(--hero-gradient-from), var(--hero-gradient-via), var(--hero-gradient-to))` }} />
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6c5ce7]/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#fd79a8]/3 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* ---- Decorative grid overlay ---- */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            `linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ---- Floating particles ---- */}
      <div className="hero-particle" style={{ top: "15%", left: "10%", animationDelay: "0s" }} />
      <div className="hero-particle" style={{ top: "25%", left: "80%", animationDelay: "1s", background: "#6c5ce7" }} />
      <div className="hero-particle" style={{ top: "60%", left: "15%", animationDelay: "2s" }} />
      <div className="hero-particle" style={{ top: "70%", left: "75%", animationDelay: "0.5s", background: "#fd79a8" }} />
      <div className="hero-particle" style={{ top: "40%", left: "50%", animationDelay: "1.5s" }} />
      <div className="hero-particle" style={{ top: "85%", left: "40%", animationDelay: "3s", background: "#55efc4" }} />
      <div className="hero-particle-lg" style={{ top: "20%", left: "65%", animationDelay: "2.5s" }} />
      <div className="hero-particle-lg" style={{ top: "50%", left: "25%", animationDelay: "1s" }} />

      {/* ---- Decorative rotating rings ---- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full rotate-ring" style={{ border: "1px solid var(--border-subtle)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full rotate-ring-reverse" style={{ border: "1px solid var(--border-subtle)" }} />

      {/* ---- Hero Content ---- */}
      <div className="relative z-10 text-center px-6 md:px-10 lg:px-16 max-w-5xl mx-auto pt-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-8 animate-fade-up" style={{ background: "var(--bg-input)", border: "1px solid var(--border-light)", color: "var(--text-secondary)" }}>
          <span className="w-2 h-2 rounded-full bg-[#55efc4] animate-pulse" />
          Digital Helper / Partner — 7+ Years of Excellence
        </div>

        {/* Main heading with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up delay-100">
          Transforming Ideas
          <br />
          <span className="gradient-text">into Digital Reality</span>
        </h1>

        {/* Typing effect subtitle */}
        <div className="text-xl md:text-2xl mb-3 animate-fade-up delay-200 font-medium" style={{ color: "var(--text-secondary)" }}>
          We Build{" "}
          <span className="text-[#00e5ff]">
            <TypingEffect words={TYPING_WORDS} />
          </span>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up delay-300" style={{ color: "var(--text-muted)" }}>
          End-to-end digital solutions — websites, apps, e-commerce, and marketing
          that drive real business results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00e5ff]/20 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{ border: "1px solid var(--border-light)", color: "var(--text-secondary)" }}
          >
            Our Portfolio
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs animate-fade-up delay-500" style={{ color: "var(--text-subtle)" }}>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#55efc4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free Consultation
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#55efc4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% Custom Code
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#55efc4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Post-Launch Support
          </span>
        </div>
      </div>

      {/* ---- Scroll down indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-600">
        <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-subtle)" }}>Scroll</span>
        <div className="w-5 h-8 rounded-full flex items-start justify-center p-1" style={{ border: "1px solid var(--border-light)" }}>
          <div className="w-1 h-2 rounded-full bg-[#00e5ff] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
