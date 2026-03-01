/**
 * AnimatedCounter Component
 * --------------------------
 * Animates a number counting up from 0 to the target value
 * when the element scrolls into the viewport.
 *
 * Uses IntersectionObserver for efficient scroll detection
 * and requestAnimationFrame for smooth animation.
 *
 * Props:
 *   target  - The number to count up to (e.g. 150)
 *   suffix  - Optional text after the number (e.g. "+", "%")
 *   duration - Animation duration in ms (default: 2000)
 */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  /* Easing function: ease-out cubic for natural deceleration */
  const easeOutCubic = useCallback((t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    /* Start counting animation when element is visible */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);
        const startTime = performance.now();

        /* Animate using requestAnimationFrame for 60fps smoothness */
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);
          const currentCount = Math.round(easedProgress * target);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 } /* Trigger when 30% visible */
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated, easeOutCubic]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
