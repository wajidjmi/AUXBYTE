/**
 * About Us Page
 * -------------
 * Showcases Auxbyte's story, founder, project portfolio,
 * journey timeline, and technology stack.
 *
 * Sections:
 *   1. Hero with tagline
 *   2. Founder bio card
 *   3. Company journey timeline
 *   4. Project portfolio grid (with preview images)
 *   5. Technology stack categorized display
 *   6. CTA banner
 *
 * All data arrays are at the top for easy editing (DRY).
 */
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

/* ========================================
   DATA ARRAYS
   ======================================== */

/* Project Portfolio — each project has a visual preview using SVG art */
const PROJECTS = [
  {
    name: "ShopEase — E-Commerce Platform",
    description:
      "A full-featured online marketplace with multi-vendor support, payment integration (Razorpay & Stripe), real-time inventory tracking, and AI-powered product recommendations.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    date: "Jan 2024 – Mar 2024",
    status: "Live",
    color: "#00e5ff",
    /* Preview gradient colors for the screenshot placeholder */
    previewGradient: "from-[#00e5ff]/20 to-[#6c5ce7]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(0,229,255,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "HealthTrack — Medical App",
    description:
      "Cross-platform mobile app for patient record management, appointment scheduling, telemedicine video calls, and prescription tracking for 20+ clinics.",
    tech: ["React Native", "Firebase", "Node.js", "WebRTC"],
    link: "#",
    date: "Jun 2023 – Oct 2023",
    status: "Live",
    color: "#55efc4",
    previewGradient: "from-[#55efc4]/20 to-[#00e5ff]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(85,239,196,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    name: "LearnHub — EdTech Platform",
    description:
      "Online learning management system with live classes, course marketplace, quiz engine, certificates, and instructor dashboards. Serving 5000+ students.",
    tech: ["React", "Django", "PostgreSQL", "AWS"],
    link: "#",
    date: "Sep 2022 – Jan 2023",
    status: "Live",
    color: "#6c5ce7",
    previewGradient: "from-[#6c5ce7]/20 to-[#fd79a8]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(108,92,231,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    name: "FoodSwift — Delivery App",
    description:
      "On-demand food delivery app with real-time GPS tracking, restaurant partner portal, dynamic pricing engine, and automated dispatch system.",
    tech: ["Flutter", "Go", "Redis", "Google Maps"],
    link: "#",
    date: "Feb 2023 – May 2023",
    status: "Live",
    color: "#fd79a8",
    previewGradient: "from-[#fd79a8]/20 to-[#6c5ce7]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(253,121,168,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    name: "EstateVue — Real Estate Portal",
    description:
      "Property listing website with 3D virtual tours, mortgage calculator, agent dashboards, neighborhood analytics, and AI-powered property valuation.",
    tech: ["Next.js", "Three.js", "Supabase", "Tailwind"],
    link: "#",
    date: "Nov 2023 – Feb 2024",
    status: "Live",
    color: "#fdcb6e",
    previewGradient: "from-[#fdcb6e]/20 to-[#e17055]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(253,203,110,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "TaskForge — Project Management",
    description:
      "SaaS project management tool with Kanban boards, Gantt charts, time tracking, team collaboration, and integration with Slack, GitHub, and Jira.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
    date: "Apr 2024 – Jul 2024",
    status: "Beta",
    color: "#e17055",
    previewGradient: "from-[#e17055]/20 to-[#fdcb6e]/10",
    previewIcon: (
      <svg
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(225,112,85,0.4)"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
] as const;

/* Technology stack grouped by category */
const TECH_STACK = [
  {
    category: "Frontend",
    color: "#00e5ff",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    color: "#6c5ce7",
    items: ["Node.js", "Express", "Django", "Go", "REST & GraphQL"],
  },
  {
    category: "Mobile",
    color: "#55efc4",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Database",
    color: "#fd79a8",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    color: "#fdcb6e",
    items: ["AWS", "Azure", "GCP", "Docker", "CI/CD"],
  },
  {
    category: "Others",
    color: "#e17055",
    items: ["AI/ML", "Payment Gateways", "WebRTC", "Socket.io", "SEO"],
  },
] as const;

/* Company journey timeline */
const TIMELINE = [
  {
    year: "2018",
    title: "The Beginning",
    desc: "Started as a freelance web developer, building WordPress sites and custom PHP applications.",
  },
  {
    year: "2019",
    title: "First Major Client",
    desc: "Landed first enterprise client — built a complete CRM system. Moved to modern frameworks.",
  },
  {
    year: "2020",
    title: "Mobile Expansion",
    desc: "Started mobile app development with React Native. Team grew to 3 members.",
  },
  {
    year: "2021",
    title: "E-Commerce Focus",
    desc: "Delivered 20+ e-commerce projects. Became experts in Shopify and custom solutions.",
  },
  {
    year: "2022",
    title: "Full-Stack Agency",
    desc: "Expanded to full digital agency — adding design, SEO, and cloud services.",
  },
  {
    year: "2023",
    title: "AI Integration",
    desc: "Started integrating AI/ML into projects. Delivered AI-powered chatbots and recommendation engines.",
  },
  {
    year: "2024",
    title: "Auxbyte Launch",
    desc: "Officially launched Auxbyte brand. 50+ clients served, 150+ projects delivered successfully.",
  },
  {
    year: "2025",
    title: "Scaling Up",
    desc: "Growing the team, expanding to SaaS products, and building our own AI tools.",
  },
] as const;

/* ========================================
   PAGE COMPONENT
   ======================================== */
export default function AboutPage() {
  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="pt-32 pb-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/5 via-transparent to-[#00e5ff]/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#6c5ce7]/5 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-10 left-10 w-48 h-48 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "3s" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-[11px] font-semibold tracking-[4px] uppercase text-[#6c5ce7] mb-3">
            About Auxbyte
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Digital <span className="gradient-text">Helper & Partner</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Founded by Abdul Wajid with 7+ years of hands-on experience in
            software development, Auxbyte is a full-service digital solutions
            company dedicated to transforming ideas into reality.
          </p>
        </div>
      </section>

      {/* ---- Founder Section ---- */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="glow-card p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
            {/* Founder avatar with decorative ring */}
            <div className="relative flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#6c5ce7] flex items-center justify-center shadow-xl shadow-[#00e5ff]/10">
                <span className="text-6xl font-extrabold text-white/90">
                  AW
                </span>
              </div>
              {/* Decorative corner dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#55efc4]/50" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#fd79a8]/50" />
            </div>

            {/* Bio content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Abdul Wajid
              </h2>
              <p className="text-[#00e5ff] font-medium mb-4">Founder & CEO</p>
              <p
                className="leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                With 7+ years of experience in web development, mobile apps, and
                digital solutions, Abdul Wajid founded Auxbyte to bridge the gap
                between businesses and technology. His expertise spans React,
                Node.js, Flutter, cloud computing, and AI integration.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Based in Purnia, Bihar, India, Auxbyte serves clients nationally
                and internationally, delivering high-quality digital products
                that drive real business growth.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="mailto:wajid.jmi@gmail.com"
                  className="px-5 py-2.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-sm font-medium hover:bg-[#00e5ff]/20 transition-colors border border-[#00e5ff]/10"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    Email
                  </span>
                </a>
                <a
                  href="tel:+919716316256"
                  className="px-5 py-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] text-sm font-medium hover:bg-[#6c5ce7]/20 transition-colors border border-[#6c5ce7]/10"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    +91-9716316256
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Journey Timeline ---- */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-page)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Our Journey"
            title="From Freelancer to Full Agency"
            subtitle="A timeline of how we grew from a one-person operation to a trusted digital partner."
          />
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/30 via-[#6c5ce7]/20 to-transparent" />

            {TIMELINE.map(({ year, title, desc }, i) => (
              <div
                key={year}
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#00e5ff] -translate-x-1.5 mt-1.5 shadow-lg shadow-[#00e5ff]/40">
                  <div className="absolute inset-0 rounded-full bg-[#00e5ff] animate-ping opacity-20" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <span className="text-[#00e5ff] text-sm font-bold">
                    {year}
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{title}</h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Projects Portfolio ---- */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Portfolio"
            title="Projects We've Delivered"
            subtitle="Each project built with care, precision, and the latest technologies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(
              ({
                name,
                description,
                tech,
                link,
                date,
                status,
                color,
                previewGradient,
                previewIcon,
              }) => (
                <div
                  key={name}
                  className="glow-card flex flex-col justify-between group"
                >
                  {/* Project preview image placeholder */}
                  <div
                    className={`h-44 bg-gradient-to-br ${previewGradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    {/* Icon */}
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                      {previewIcon}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-7">
                    {/* Header with status badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${color}15`, color }}
                      >
                        {status}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{name}</h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md"
                          style={{
                            background: "var(--bg-input)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project link */}
                    <a
                      href={link}
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
                      style={{ color }}
                    >
                      View Project
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ---- Tech Stack ---- */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-page)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Tech Stack"
            title="Technologies We Work With"
            subtitle="We stay updated with the latest tools and frameworks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map(({ category, items, color }) => (
              <div key={category} className="glow-card p-6">
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-4"
                  style={{ color }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg transition-colors"
                      style={{
                        background: "var(--bg-input)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section
        className="py-24 px-6 md:px-10 lg:px-16 text-center relative overflow-hidden"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/5 via-transparent to-[#00e5ff]/5" />
        <div className="absolute top-10 left-1/3 w-56 h-56 bg-[#6c5ce7]/5 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Have a Project in <span className="gradient-text">Mind?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)" }}>
            Let&apos;s turn your idea into a powerful digital product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00e5ff]/20 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/"
              className="px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{
                border: "1px solid var(--border-light)",
                color: "var(--text-secondary)",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
