/**
 * HomeAnimatedStats (Client Component)
 * --------------------------------------
 * Renders the stats counter section with animated numbers.
 * Extracted as a client component so the parent page.tsx
 * can remain a server component.
 *
 * Uses AnimatedCounter which triggers when scrolled into view.
 */
"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

interface StatItem {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

interface AnimatedStatsProps {
  stats: readonly StatItem[];
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Gradient background band */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/5 via-[#6c5ce7]/5 to-[#00e5ff]/5" />

      {/* Decorative top/bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c5ce7]/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="text-center group">
            {/* Animated number */}
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              <AnimatedCounter target={value} suffix={suffix} duration={2000} />
            </div>
            {/* Label */}
            <div className="text-sm transition-colors" style={{ color: "var(--text-muted)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
