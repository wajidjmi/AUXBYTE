/**
 * Home Page
 * ---------
 * Landing page with the following sections:
 *   1. Animated hero banner with particles + typing effect
 *   2. Image carousel (AI / Software themed)
 *   3. Services overview grid
 *   4. How We Work process steps
 *   5. Animated stats counter
 *   6. Why Choose Us grid
 *   7. Testimonials slider
 *   8. Scrolling tech ticker
 *   9. CTA banner
 *
 * Data arrays are defined at the top (DRY principle)
 * so content changes only need one edit.
 */
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import AnimatedStats from "./HomeAnimatedStats";
import HomeHero from "./HomeHero";

/* ========================================
   DATA ARRAYS (DRY - single source of truth)
   ======================================== */

/* Services offered by Auxbyte */
const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Website Design",
    desc: "Custom responsive websites built with modern frameworks like React, Next.js, and Tailwind CSS.",
    color: "#00e5ff",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "App Development",
    desc: "Native & cross-platform mobile apps for iOS and Android using Flutter and React Native.",
    color: "#6c5ce7",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with payment gateways, inventory, and order management.",
    color: "#fd79a8",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Digital Marketing",
    desc: "SEO, social media marketing, PPC campaigns, and content strategy for maximum growth.",
    color: "#55efc4",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    desc: "AWS, Azure & GCP deployment, server management, and scalable cloud architecture.",
    color: "#fdcb6e",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "End-to-End Solutions",
    desc: "Complete project lifecycle — from ideation and design to development and deployment.",
    color: "#e17055",
  },
] as const;

/* Company stats — used by AnimatedStats client component */
export const STATS = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

/* Why choose us selling points */
const WHY_CHOOSE = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Result-Driven Approach",
    desc: "Every project is designed with clear KPIs and measurable outcomes.",
    color: "#00e5ff",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Agile methodology ensures your project ships on schedule, every time.",
    color: "#6c5ce7",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Innovative Solutions",
    desc: "We leverage AI, cloud, and modern frameworks to build future-proof products.",
    color: "#55efc4",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "24/7 support and maintenance to keep your digital assets running smoothly.",
    color: "#fd79a8",
  },
] as const;

/* How We Work process steps */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    desc: "We deep-dive into your goals, audience, and competition to define the perfect strategy.",
    color: "#00e5ff",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our designers create stunning UI/UX mockups that align with your brand identity.",
    color: "#6c5ce7",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Our engineers build your product using battle-tested technologies and clean code.",
    color: "#55efc4",
  },
  {
    step: "04",
    title: "Deploy & Support",
    desc: "We launch, monitor, and provide ongoing support to ensure peak performance.",
    color: "#fd79a8",
  },
] as const;

/* Client testimonials */
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "CEO, ShopEase",
    quote: "Auxbyte transformed our vision into a stunning e-commerce platform. Sales increased 3x in the first quarter after launch!",
    color: "#00e5ff",
  },
  {
    name: "Dr. Priya Singh",
    role: "Director, HealthTrack",
    quote: "The mobile app they built for our clinic network is flawless. Patient satisfaction scores are at an all-time high.",
    color: "#55efc4",
  },
  {
    name: "Amit Patel",
    role: "Founder, LearnHub",
    quote: "Professional, innovative, and always on time. Auxbyte is our go-to partner for all things digital.",
    color: "#6c5ce7",
  },
] as const;

/* Tech names for the scrolling ticker */
const TECH_TICKER = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter",
  "React Native", "AWS", "Docker", "MongoDB", "PostgreSQL", "Redis",
  "TailwindCSS", "GraphQL", "Firebase", "Kubernetes", "Go", "Vue.js",
  "Angular", "Swift", "Kotlin", "Django", "Express.js", "Supabase",
] as const;

/* ========================================
   PAGE COMPONENT
   ======================================== */
export default function HomePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: Hero Banner with Animations
          ============================================ */}
      <HomeHero />

      {/* ============================================
          SECTION 2: Image Carousel
          ============================================ */}
      <section className="section-padding" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="What We Build"
            title="Cutting-Edge Digital Products"
            subtitle="From AI-powered platforms to scalable e-commerce — we build solutions that matter."
          />
          <HeroCarousel />
        </div>
      </section>

      {/* ============================================
          SECTION 3: Services
          ============================================ */}
      <section className="section-padding" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Services"
            title="Everything You Need to Go Digital"
            subtitle="Complete digital transformation solutions under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon, title, desc, color }, i) => (
              <div
                key={title}
                className="glow-card p-8 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon container with brand color background */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, color }}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: How We Work (Process)
          ============================================ */}
      <section className="section-padding" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            subtitle="A proven 4-step process that delivers results every time."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ step, title, desc, color }, i) => (
              <div key={step} className="relative group">
                {/* Connecting line between steps (hidden on mobile) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="glow-card p-8 text-center relative z-10">
                  {/* Step number */}
                  <div
                    className="text-4xl font-extrabold mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ color }}
                  >
                    {step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: Stats Counter (Client Component)
          ============================================ */}
      <AnimatedStats stats={STATS} />

      {/* ============================================
          SECTION 6: Why Choose Us
          ============================================ */}
      <section className="section-padding" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Why Choose Us"
            title="Built Different, Delivered Better"
            subtitle="We don't just write code — we craft digital experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE.map(({ icon, title, desc, color }) => (
              <div key={title} className="glow-card p-8 flex gap-5 items-start">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12`, color }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: Testimonials
          ============================================ */}
      <section className="section-padding" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the people we've worked with."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, quote, color }) => (
              <div key={name} className="glow-card p-8 flex flex-col justify-between">
                {/* Quote icon */}
                <div>
                  <svg
                    className="w-8 h-8 mb-4 opacity-30"
                    style={{ color }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm leading-relaxed italic mb-6" style={{ color: "var(--text-muted)" }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
                {/* Client info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `${color}15`, color }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs" style={{ color: "var(--text-subtle)" }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: Tech Ticker (Scrolling Marquee)
          ============================================ */}
      <section className="py-16 overflow-hidden" style={{ background: "var(--bg-page)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {/* Duplicate the list to create seamless infinite scroll */}
            {[...TECH_TICKER, ...TECH_TICKER].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 mx-6 text-lg font-semibold whitespace-nowrap transition-colors"
                style={{ color: "var(--text-subtle)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/30" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: CTA Banner
          ============================================ */}
      <section className="py-24 px-6 md:px-10 lg:px-16 text-center relative overflow-hidden">
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/8 via-transparent to-[#6c5ce7]/8" />

        {/* Floating orbs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#6c5ce7]/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)" }}>
            Let&apos;s discuss your project and build something amazing together.
            Free consultation for your first project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00e5ff]/20 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{ border: "1px solid var(--border-light)", color: "var(--text-secondary)" }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
