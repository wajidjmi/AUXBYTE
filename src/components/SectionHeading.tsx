/**
 * SectionHeading Component (DRY)
 * --------------------------------
 * Reusable section title used across all pages.
 * Keeps heading styles consistent site-wide.
 *
 * Props:
 *   label    - Small category label above the title (e.g. "Our Services")
 *   title    - Main heading text
 *   subtitle - Optional description below the heading
 *   center   - Center-align all text (default: true)
 */
interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {/* Category label */}
      <span className="inline-block text-[11px] font-semibold tracking-[4px] uppercase text-[#6c5ce7] mb-3">
        {label}
      </span>

      {/* Main title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}

      {/* Decorative gradient line under the heading */}
      <div className={`mt-6 h-px w-20 bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
