/**
 * HeroCarousel Component
 * -----------------------
 * Auto-playing image carousel showcasing Auxbyte's expertise.
 *
 * Each slide features:
 *   - Unique gradient background with animated orbs
 *   - Decorative SVG circuit/code patterns
 *   - Animated icon and descriptive text
 *   - Smooth cross-fade transitions between slides
 *
 * Slides auto-advance every 5s and support manual navigation
 * via indicator dots and prev/next arrows.
 */
"use client";

import { useState, useEffect, useCallback } from "react";

/* ---- Slide definitions ---- */
const SLIDES = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    description: "Building intelligent applications with machine learning, NLP, and computer vision that transform how businesses operate.",
    /* Decorative SVG icon for this slide */
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Brain/neural network icon */}
        <circle cx="60" cy="60" r="50" stroke="rgba(0,229,255,0.2)" strokeWidth="1" />
        <circle cx="60" cy="60" r="35" stroke="rgba(108,92,231,0.2)" strokeWidth="1" className="rotate-ring" />
        <circle cx="60" cy="40" r="6" fill="#00e5ff" opacity="0.8" />
        <circle cx="40" cy="65" r="5" fill="#6c5ce7" opacity="0.7" />
        <circle cx="80" cy="65" r="5" fill="#6c5ce7" opacity="0.7" />
        <circle cx="60" cy="80" r="4" fill="#fd79a8" opacity="0.6" />
        <line x1="60" y1="46" x2="42" y2="62" stroke="#00e5ff" strokeWidth="1" opacity="0.4" />
        <line x1="60" y1="46" x2="78" y2="62" stroke="#00e5ff" strokeWidth="1" opacity="0.4" />
        <line x1="42" y1="68" x2="58" y2="78" stroke="#6c5ce7" strokeWidth="1" opacity="0.3" />
        <line x1="78" y1="68" x2="62" y2="78" stroke="#6c5ce7" strokeWidth="1" opacity="0.3" />
        <circle cx="60" cy="60" r="8" fill="rgba(0,229,255,0.1)" className="animate-glow-pulse" />
      </svg>
    ),
    accentColor: "#00e5ff",
    tags: ["Machine Learning", "NLP", "ChatBots", "Computer Vision"],
    bgOrbs: [
      { x: "20%", y: "30%", size: 180, color: "rgba(0,229,255,0.08)" },
      { x: "75%", y: "60%", size: 220, color: "rgba(108,92,231,0.06)" },
    ],
  },
  {
    id: 2,
    title: "Modern Web Development",
    description: "Responsive, blazing-fast websites and web apps built with React, Next.js, and cutting-edge frameworks.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Browser/code icon */}
        <rect x="15" y="25" width="90" height="70" rx="8" stroke="rgba(108,92,231,0.3)" strokeWidth="1.5" />
        <line x1="15" y1="42" x2="105" y2="42" stroke="rgba(108,92,231,0.2)" strokeWidth="1" />
        <circle cx="28" cy="34" r="3" fill="#fd79a8" opacity="0.7" />
        <circle cx="38" cy="34" r="3" fill="#fdcb6e" opacity="0.7" />
        <circle cx="48" cy="34" r="3" fill="#55efc4" opacity="0.7" />
        {/* Code lines */}
        <rect x="25" y="52" width="35" height="3" rx="1.5" fill="#6c5ce7" opacity="0.5" />
        <rect x="35" y="60" width="50" height="3" rx="1.5" fill="#00e5ff" opacity="0.4" />
        <rect x="35" y="68" width="40" height="3" rx="1.5" fill="#55efc4" opacity="0.3" />
        <rect x="25" y="76" width="30" height="3" rx="1.5" fill="#fd79a8" opacity="0.4" />
        <rect x="35" y="84" width="45" height="3" rx="1.5" fill="#6c5ce7" opacity="0.3" />
      </svg>
    ),
    accentColor: "#6c5ce7",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    bgOrbs: [
      { x: "70%", y: "25%", size: 200, color: "rgba(108,92,231,0.08)" },
      { x: "25%", y: "70%", size: 160, color: "rgba(253,121,168,0.06)" },
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Beautiful native & cross-platform mobile apps for iOS and Android that users love.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Phone icon */}
        <rect x="35" y="15" width="50" height="90" rx="10" stroke="rgba(85,239,196,0.3)" strokeWidth="1.5" />
        <rect x="35" y="15" width="50" height="90" rx="10" fill="rgba(85,239,196,0.03)" />
        <line x1="35" y1="30" x2="85" y2="30" stroke="rgba(85,239,196,0.15)" strokeWidth="1" />
        <line x1="35" y1="88" x2="85" y2="88" stroke="rgba(85,239,196,0.15)" strokeWidth="1" />
        <circle cx="60" cy="95" r="4" stroke="rgba(85,239,196,0.3)" strokeWidth="1" />
        {/* App UI elements */}
        <rect x="42" y="37" width="36" height="20" rx="4" fill="rgba(0,229,255,0.1)" />
        <rect x="42" y="62" width="16" height="16" rx="4" fill="rgba(108,92,231,0.15)" />
        <rect x="62" y="62" width="16" height="16" rx="4" fill="rgba(253,121,168,0.15)" />
        <rect x="42" y="82" width="16" height="3" rx="1.5" fill="rgba(85,239,196,0.3)" />
      </svg>
    ),
    accentColor: "#55efc4",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    bgOrbs: [
      { x: "30%", y: "40%", size: 190, color: "rgba(85,239,196,0.07)" },
      { x: "70%", y: "30%", size: 170, color: "rgba(0,229,255,0.05)" },
    ],
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment gateways, inventory management, and conversion-optimized checkout flows.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Shopping cart icon */}
        <path d="M25 30H35L45 75H90" stroke="rgba(253,121,168,0.4)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="85" r="6" stroke="rgba(253,121,168,0.3)" strokeWidth="1.5" />
        <circle cx="80" cy="85" r="6" stroke="rgba(253,121,168,0.3)" strokeWidth="1.5" />
        <path d="M40 45H95L88 70H47" fill="rgba(253,121,168,0.06)" stroke="rgba(253,121,168,0.2)" strokeWidth="1" />
        {/* Product boxes */}
        <rect x="55" y="50" width="12" height="14" rx="2" fill="rgba(108,92,231,0.15)" />
        <rect x="72" y="52" width="10" height="12" rx="2" fill="rgba(0,229,255,0.12)" />
        {/* Price tag */}
        <circle cx="90" cy="35" r="10" fill="rgba(253,121,168,0.1)" stroke="rgba(253,121,168,0.2)" strokeWidth="1" />
        <text x="90" y="38" textAnchor="middle" fill="rgba(253,121,168,0.6)" fontSize="8">$</text>
      </svg>
    ),
    accentColor: "#fd79a8",
    tags: ["Shopify", "Razorpay", "Stripe", "Inventory"],
    bgOrbs: [
      { x: "60%", y: "35%", size: 210, color: "rgba(253,121,168,0.06)" },
      { x: "20%", y: "60%", size: 180, color: "rgba(108,92,231,0.05)" },
    ],
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and server management on AWS, Azure & GCP.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Cloud icon */}
        <path
          d="M30 70C20 70 15 62 18 54C20 46 28 42 35 44C38 34 48 28 58 30C68 32 75 40 74 50C82 48 90 54 90 62C90 70 82 76 74 76H30Z"
          fill="rgba(0,229,255,0.05)"
          stroke="rgba(0,229,255,0.25)"
          strokeWidth="1.5"
        />
        {/* Server dots inside cloud */}
        <circle cx="45" cy="58" r="3" fill="#00e5ff" opacity="0.5" />
        <circle cx="58" cy="55" r="3" fill="#55efc4" opacity="0.4" />
        <circle cx="70" cy="60" r="3" fill="#6c5ce7" opacity="0.4" />
        {/* Connection lines */}
        <line x1="48" y1="58" x2="55" y2="55" stroke="rgba(0,229,255,0.3)" strokeWidth="0.8" />
        <line x1="61" y1="55" x2="67" y2="60" stroke="rgba(85,239,196,0.3)" strokeWidth="0.8" />
        {/* Upload arrow */}
        <path d="M58 80V92M52 86L58 80L64 86" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#00e5ff",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    bgOrbs: [
      { x: "40%", y: "25%", size: 200, color: "rgba(0,229,255,0.07)" },
      { x: "70%", y: "65%", size: 160, color: "rgba(85,239,196,0.05)" },
    ],
  },
  {
    id: 6,
    title: "Digital Marketing & SEO",
    description: "Data-driven SEO, social media campaigns, PPC advertising, and content strategies that drive real growth.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32" fill="none">
        {/* Chart icon */}
        <rect x="20" y="30" width="80" height="60" rx="4" stroke="rgba(253,203,110,0.2)" strokeWidth="1" />
        {/* Grid lines */}
        <line x1="20" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        <line x1="20" y1="70" x2="100" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        {/* Bar chart */}
        <rect x="32" y="60" width="10" height="25" rx="2" fill="rgba(253,203,110,0.25)" />
        <rect x="48" y="50" width="10" height="35" rx="2" fill="rgba(0,229,255,0.2)" />
        <rect x="64" y="42" width="10" height="43" rx="2" fill="rgba(108,92,231,0.25)" />
        <rect x="80" y="35" width="10" height="50" rx="2" fill="rgba(85,239,196,0.25)" />
        {/* Trend line */}
        <path d="M37 58L53 48L69 40L85 33" stroke="#fdcb6e" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
        {/* Arrow up */}
        <path d="M92 25L98 19L104 25" stroke="#55efc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="98" y1="19" x2="98" y2="30" stroke="#55efc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    accentColor: "#fdcb6e",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    bgOrbs: [
      { x: "50%", y: "30%", size: 180, color: "rgba(253,203,110,0.06)" },
      { x: "25%", y: "65%", size: 150, color: "rgba(85,239,196,0.05)" },
    ],
  },
] as const;

/* Auto-advance interval in milliseconds */
const AUTO_ADVANCE_MS = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* Advance to next slide, wrapping around */
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  /* Go to previous slide, wrapping around */
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  /* Auto-advance timer (pauses on hover) */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full h-[480px] md:h-[560px] lg:h-[600px] rounded-3xl overflow-hidden"
      style={{ border: "1px solid var(--border-subtle)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ---- Background Layer: Grid + Orbs ---- */}
      <div className="absolute inset-0" style={{ background: "var(--carousel-bg)" }}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              `linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ---- Slides ---- */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`carousel-slide flex flex-col items-center justify-center text-center px-8 ${
            i === current ? "active" : ""
          }`}
        >
          {/* Animated background orbs unique to each slide */}
          {slide.bgOrbs.map((orb, j) => (
            <div
              key={j}
              className="absolute rounded-full blur-3xl animate-float-slow"
              style={{
                left: orb.x,
                top: orb.y,
                width: orb.size,
                height: orb.size,
                background: orb.color,
                animationDelay: `${j * 2}s`,
              }}
            />
          ))}

          {/* Decorative rotating ring */}
          <div
            className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border opacity-[0.04] rotate-ring"
            style={{ borderColor: slide.accentColor }}
          />

          {/* Icon */}
          <div className="relative mb-6 animate-float" style={{ animationDelay: "0.5s" }}>
            {slide.icon}
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {slide.title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg max-w-xl mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {slide.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {slide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border font-medium"
                style={{
                  borderColor: `${slide.accentColor}30`,
                  color: `${slide.accentColor}cc`,
                  background: `${slide.accentColor}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* ---- Slide Indicator Dots ---- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-[#00e5ff] shadow-lg shadow-[#00e5ff]/30"
                : "w-2"
            }`}
            style={i !== current ? { background: "var(--text-subtle)" } : undefined}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ---- Navigation Arrows ---- */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-sm"
        style={{ background: "var(--bg-input)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-sm"
        style={{ background: "var(--bg-input)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ---- Slide Counter ---- */}
      <div className="absolute top-6 right-6 text-xs font-mono z-20" style={{ color: "var(--text-subtle)" }}>
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>
    </div>
  );
}
