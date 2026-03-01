/**
 * Contact Us Page
 * ---------------
 * Contact form that submits data to Google Sheets via
 * the Google Sheets API (Apps Script Web App).
 *
 * Fields captured:
 *   - Name, Email, Mobile, Company, Service, Budget, Description
 *   - Auto-generated: Timestamp, Working Hours status
 *
 * Google Sheet:
 * https://docs.google.com/spreadsheets/d/1ahp_z3RLCyctdO4EOEoU7eqdWxx992ienxZC-lYdFWs/edit
 *
 * Sections:
 *   1. Hero with tagline
 *   2. Contact info cards + form (2-column layout)
 *   3. Google Apps Script setup instructions
 */
"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

/* ========================================
   CONFIGURATION
   ======================================== */

/**
 * Google Apps Script Web App URL
 * Replace YOUR_DEPLOYMENT_ID with your actual deployment ID.
 * See the setup instructions section at the bottom of this page.
 */
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxLBrli6CMz7f6CK7JPSrd7gctttGl1VFXvxdZOm315r2MVBDqrccIla0AD7gDqMHCsEg/exec";

/* ========================================
   FORM FIELD DEFINITIONS (DRY)
   ======================================== */

/**
 * Each field definition drives the form rendering.
 * Adding/removing a field here automatically updates the form UI.
 */
const FORM_FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "mobile",
    label: "Mobile Number",
    type: "tel",
    placeholder: "+91 XXXXX XXXXX",
    required: true,
  },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Your company name (optional)",
    required: false,
  },
  {
    name: "service",
    label: "Service Required",
    type: "select",
    placeholder: "Select a service",
    required: true,
    options: [
      "Website Design & Development",
      "Mobile App Development",
      "E-Commerce Solutions",
      "Digital Marketing & SEO",
      "Cloud Solutions",
      "End-to-End Project",
      "Other",
    ],
  },
  {
    name: "budget",
    label: "Budget Range",
    type: "select",
    placeholder: "Select budget range",
    required: false,
    options: [
      "Under ₹25,000",
      "₹25,000 - ₹50,000",
      "₹50,000 - ₹1,00,000",
      "₹1,00,000 - ₹5,00,000",
      "₹5,00,000+",
      "Not Sure",
    ],
  },
] as const;

/* Contact info cards data */
const CONTACT_CARDS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Us",
    value: "wajid.jmi@gmail.com",
    href: "mailto:wajid.jmi@gmail.com",
    color: "#00e5ff",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Call Us",
    value: "+91-9716316256",
    href: "tel:+919716316256",
    color: "#6c5ce7",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Visit Us",
    value: "Purnia, Bihar, India",
    href: undefined,
    color: "#fd79a8",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Working Hours",
    value: "Mon - Sat: 9 AM - 7 PM IST",
    href: undefined,
    color: "#55efc4",
  },
] as const;

/* ========================================
   HELPER FUNCTIONS
   ======================================== */

/** Check if current time falls within IST working hours (9AM - 7PM) */
function getWorkingStatus(): string {
  const now = new Date();
  const istOffset = 5.5 * 60; /* IST = UTC + 5:30 */
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const istMinutes = utcMinutes + istOffset;
  const istHours = Math.floor(istMinutes / 60) % 24;

  if (istHours >= 9 && istHours < 19) {
    return "Within Working Hours (9 AM - 7 PM IST)";
  }
  return "Outside Working Hours";
}

/** Format current date-time in IST for the spreadsheet */
function getFormattedDateTime(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });
}

/* ========================================
   PAGE COMPONENT
   ======================================== */
export default function ContactPage() {
  /* Form data state — keys match the FORM_FIELDS name values */
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    mobile: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });

  /* Submission status: idle → sending → success | error */
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  /** Update form state when any field changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /** Handle form submission → send data to Google Sheets */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    /* Build payload with auto-generated metadata */
    const payload = {
      ...formData,
      timestamp: getFormattedDateTime(),
      workingStatus: getWorkingStatus(),
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", /* Required for Google Apps Script */
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");

      /* Reset form fields */
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        service: "",
        budget: "",
        description: "",
      });
    } catch {
      setStatus("error");
    }
  };

  /* Shared input CSS classes (DRY) */
  const inputClasses =
    "w-full px-4 py-3 rounded-xl text-sm focus:border-[#00e5ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00e5ff]/30 transition-all";

  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 via-transparent to-[#6c5ce7]/5" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00e5ff]/5 rounded-full blur-3xl animate-float-slow" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-[11px] font-semibold tracking-[4px] uppercase text-[#6c5ce7] mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Fill out the form below and we&apos;ll get back to you within 24 hours.
            Free consultation for your first project!
          </p>
        </div>
      </section>

      {/* ---- Contact Form + Info Cards ---- */}
      <section className="section-padding" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ---- Left Column: Contact Info Cards ---- */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {CONTACT_CARDS.map(({ icon, title, value, href, color }) => (
              <div key={title} className="glow-card p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}12`, color }}
                >
                  {icon}
                </div>
                <h3 className="font-bold mb-1">{title}</h3>
                {href ? (
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{value}</p>
                )}
              </div>
            ))}

            {/* Sunday notice */}
            <div className="text-xs text-center" style={{ color: "var(--text-subtle)" }}>
              Sunday: Closed
            </div>
          </div>

          {/* ---- Right Column: Contact Form ---- */}
          <div className="lg:col-span-2">
            <div className="glow-card p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-subtle)" }}>
                Fields marked with <span className="text-[#fd79a8]">*</span> are required
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Two-column grid for shorter fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {FORM_FIELDS.map((field) => {
                    const { name, label, type, placeholder, required } = field;
                    const options = "options" in field ? field.options : undefined;
                    return (
                      <div key={name}>
                        <label
                          htmlFor={name}
                          className="block text-sm font-medium mb-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {label} {required && <span className="text-[#fd79a8]">*</span>}
                        </label>

                        {type === "select" ? (
                          /* Dropdown select */
                          <select
                            id={name}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required={required}
                            className={`${inputClasses} appearance-none`}
                            style={{ background: "var(--bg-input)", border: "1px solid var(--border-light)", color: "var(--text-primary)" }}
                          >
                            <option value="" disabled style={{ background: "var(--select-bg)" }}>
                              {placeholder}
                            </option>
                            {options?.map((opt) => (
                              <option key={opt} value={opt} style={{ background: "var(--select-bg)" }}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          /* Text / email / tel input */
                          <input
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            value={formData[name]}
                            onChange={handleChange}
                            required={required}
                            className={inputClasses}
                            style={{ background: "var(--bg-input)", border: "1px solid var(--border-light)", color: "var(--text-primary)" }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Description textarea (full-width) */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                    Project Description <span className="text-[#fd79a8]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your project — goals, features, timeline..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} resize-none`}
                    style={{ background: "var(--bg-input)", border: "1px solid var(--border-light)", color: "var(--text-primary)" }}
                  />
                </div>

                {/* Submit button with loading spinner */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00e5ff]/20 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Success message */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-[#55efc4]/10 border border-[#55efc4]/20 text-[#55efc4] text-sm text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Message sent successfully! We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-[#fd79a8]/10 border border-[#fd79a8]/20 text-[#fd79a8] text-sm text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Google Sheets Setup (dev-only, hidden in production) ---- */}
    </>
  );
}
