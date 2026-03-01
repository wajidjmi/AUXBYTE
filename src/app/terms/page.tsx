/**
 * Terms & Conditions Page
 * -----------------------
 * Legal terms for Auxbyte's digital services.
 *
 * Covers:
 *   - Service descriptions
 *   - Payment terms & refunds
 *   - Intellectual property rights
 *   - Liability limitations
 *   - Data protection & privacy
 *   - Dispute resolution
 *
 * All sections are stored in a data array (DRY) for easy updates.
 */
import Link from "next/link";

/* ========================================
   TERMS SECTIONS DATA
   ======================================== */
const TERMS_SECTIONS = [
  {
    title: "1. Introduction",
    content: `Welcome to Auxbyte ("Company", "we", "us", or "our"). These Terms and Conditions govern your use of our website (auxbyte.com) and the digital services we provide, including but not limited to website design, mobile app development, e-commerce solutions, and digital marketing services. By engaging our services or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.`,
  },
  {
    title: "2. Services We Provide",
    content: `Auxbyte provides end-to-end digital solutions including:\n\n• Website Design & Development — Custom responsive websites, landing pages, and web applications built with modern technologies.\n• Mobile App Development — Native and cross-platform mobile applications for iOS and Android.\n• E-Commerce Solutions — Complete online store setup with payment gateway integration, inventory management, and order processing.\n• Digital Marketing & SEO — Search engine optimization, social media marketing, content strategy, and paid advertising campaigns.\n• Cloud Solutions & DevOps — Cloud infrastructure setup, deployment pipelines, and server management.\n• Maintenance & Support — Ongoing technical support, bug fixes, and feature updates post-launch.`,
  },
  {
    title: "3. Project Engagement & Process",
    content: `All projects begin with a free consultation to understand your requirements. After the consultation, we provide a detailed project proposal including scope, timeline, deliverables, and cost estimate. Work commences only after the client approves the proposal and makes the initial payment as outlined in the payment terms. We follow an agile development methodology with regular updates, milestone reviews, and client feedback sessions throughout the project lifecycle.`,
  },
  {
    title: "4. Payment Terms",
    content: `Payment terms are agreed upon before project commencement and are outlined in the project proposal. Typical payment structure: 30% advance payment before work begins, 30% at mid-project milestone, and 40% upon project completion and delivery. Payments can be made via bank transfer, UPI, or other agreed-upon methods. Late payments may result in project delays. All prices are quoted in Indian Rupees (₹) unless otherwise specified. Applicable taxes (GST) will be charged as per government regulations.`,
  },
  {
    title: "5. Intellectual Property Rights",
    content: `Upon full payment, the client receives full ownership of all custom-developed code, designs, and digital assets created specifically for their project. Pre-existing frameworks, libraries, and third-party tools used in development remain under their respective licenses. Auxbyte retains the right to showcase the project in our portfolio unless the client requests otherwise in writing. Any proprietary tools, templates, or internal libraries developed by Auxbyte remain our intellectual property.`,
  },
  {
    title: "6. Client Responsibilities",
    content: `The client is responsible for providing all necessary content (text, images, logos, branding materials), timely feedback on deliverables, access to required third-party accounts and services, and accurate and complete project requirements. Delays in providing the above may result in project timeline extensions. The client must ensure that all content provided does not infringe upon any third-party copyrights, trademarks, or other intellectual property rights.`,
  },
  {
    title: "7. Revisions & Changes",
    content: `Each project includes a reasonable number of revision rounds as specified in the project proposal (typically 2-3 rounds). Additional revisions beyond the agreed scope will be billed separately at our standard hourly rate. Major scope changes or feature additions after project approval will require a change order with revised timeline and cost estimates. Minor text changes, color adjustments, and bug fixes during the development phase are included at no extra cost.`,
  },
  {
    title: "8. Warranties & Guarantees",
    content: `We provide a 30-day warranty period after project delivery during which we fix any bugs or issues free of charge. We guarantee that all deliverables will match the approved design and functional specifications. However, we do not guarantee specific business outcomes such as search engine rankings, traffic volumes, or revenue increases. All third-party integrations (payment gateways, APIs, hosting services) are subject to their respective providers' terms and availability.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `Auxbyte's total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project. We are not liable for any indirect, incidental, consequential, or punitive damages including loss of profits, data, or business opportunities. We are not responsible for downtime, data loss, or security breaches caused by third-party hosting providers, plugins, or services. Clients are advised to maintain their own backups of all critical data and content.`,
  },
  {
    title: "10. Confidentiality",
    content: `Both parties agree to maintain strict confidentiality regarding all proprietary information, business strategies, technical details, and personal data shared during the course of the project. This obligation survives the termination of our business relationship. We will never share, sell, or distribute client information to third parties without explicit written consent, except as required by law.`,
  },
  {
    title: "11. Project Cancellation & Refunds",
    content: `If a client wishes to cancel a project, written notice must be provided. Refunds are calculated based on work completed: if less than 25% is complete, 50% of the advance is refundable; if 25-50% is complete, 25% of the advance is refundable; if more than 50% is complete, no refund is applicable. All completed work up to the cancellation date will be delivered to the client. Cancellation does not affect payment obligations for work already completed.`,
  },
  {
    title: "12. Data Protection & Privacy",
    content: `We are committed to protecting your personal data in compliance with applicable Indian data protection laws. Information collected through our contact forms (name, email, phone number, project details) is used solely for business communication purposes. We do not sell or share your personal information with third parties for marketing purposes. Our website may use cookies for analytics purposes. By using our website, you consent to our use of cookies as described in this policy.`,
  },
  {
    title: "13. Governing Law & Disputes",
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or our services shall first be attempted to be resolved through mutual negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts in Purnia, Bihar, India. Both parties agree to attempt mediation before pursuing legal action.`,
  },
  {
    title: "14. Changes to Terms",
    content: `Auxbyte reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on our website with the revision date. Continued use of our services after changes are posted constitutes acceptance of the revised terms. For ongoing projects, the terms agreed upon at project commencement will apply unless both parties agree to the updated terms.`,
  },
  {
    title: "15. Contact Information",
    content: `For any questions, concerns, or clarifications regarding these Terms and Conditions, please contact us:\n\nAbdul Wajid — Founder & Lead Consultant\nEmail: wajid.jmi@gmail.com\nPhone: +91-9716316256\nAddress: Purnia, Bihar, India\nWebsite: auxbyte.com`,
  },
] as const;

/* ========================================
   PAGE COMPONENT
   ======================================== */
export default function TermsPage() {
  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/3 via-transparent to-[#00e5ff]/3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-[11px] font-semibold tracking-[4px] uppercase text-[#6c5ce7] mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Last updated: February 2026 | Auxbyte — Your Digital Success Partner
          </p>
          {/* Decorative line */}
          <div className="h-px w-20 bg-gradient-to-r from-[#00e5ff] to-[#6c5ce7] mx-auto" />
        </div>
      </section>

      {/* ---- Terms Content ---- */}
      <section className="section-padding" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-4xl mx-auto">
          {/* Table of contents */}
          <div className="glow-card p-8 mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-secondary)" }}>
              Table of Contents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {TERMS_SECTIONS.map(({ title }) => (
                <span key={title} className="text-sm hover:text-[#00e5ff] transition-colors cursor-default" style={{ color: "var(--text-subtle)" }}>
                  {title}
                </span>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {TERMS_SECTIONS.map(({ title, content }) => (
              <div key={title} className="glow-card p-8">
                <h2 className="text-lg font-bold mb-4 text-[#00e5ff]">{title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
              By using Auxbyte&apos;s services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm text-[#00e5ff] hover:underline"
            >
              Have questions? Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
