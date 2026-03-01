/**
 * ScrollReveal Component
 * -----------------------
 * Wraps children and reveals them with a CSS animation
 * when they scroll into the viewport.
 *
 * Uses IntersectionObserver for efficient detection.
 * Applies the .revealed class which triggers CSS transitions
 * defined in globals.css.
 *
 * Props:
 *   direction - Animation direction: "up" | "left" | "right" | "scale"
 *   delay     - Stagger delay in ms (default: 0)
 *   className - Additional CSS classes
 *   children  - Content to reveal
 */
"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}

/* Map direction prop to the correct CSS class name */
const DIRECTION_CLASS_MAP: Record<string, string> = {
  up: "scroll-reveal",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  scale: "scroll-reveal-scale",
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    /* Observe when the element enters the viewport */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* Add .revealed class after optional delay */
          setTimeout(() => {
            element.classList.add("revealed");
          }, delay);
          /* Stop observing once revealed (one-shot animation) */
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 } /* Trigger when 15% visible */
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  /* Pick the correct animation class based on direction */
  const animClass = DIRECTION_CLASS_MAP[direction] || "scroll-reveal";

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
