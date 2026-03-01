/**
 * Root Layout
 * -----------
 * Wraps all pages with Header, Footer, and global styles.
 * This is the single source of truth for page structure.
 *
 * Includes:
 *   - Google Fonts (Inter for body, Space Grotesk for headings)
 *   - Global CSS with Tailwind v4
 *   - Persistent Header (fixed top)
 *   - Persistent Footer
 *   - Floating animated contact button
 */
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactBtn from "@/components/FloatingContactBtn";
import ThemeProvider from "@/components/ThemeProvider";

/* ---- SEO Metadata ---- */
export const metadata: Metadata = {
  title: "Auxbyte — Transforming Ideas into Digital Reality",
  description:
    "Website Design, App Development, E-Commerce Solutions & Digital Marketing. Your Digital Helper & Partner with 7+ Years of Excellence. Based in India, serving globally.",
  keywords: [
    "web development",
    "app development",
    "e-commerce",
    "digital marketing",
    "SEO",
    "Auxbyte",
    "software company",
    "Bihar",
    "India",
    "React",
    "Next.js",
    "Flutter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Load Inter (body) and Space Grotesk (headings) fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {/* Fixed Header — stays at top on scroll */}
          <Header />

          {/* Page Content — min-height ensures footer stays at bottom */}
          <main className="min-h-screen">{children}</main>

          {/* Site-wide Footer */}
          <Footer />

          {/* Floating animated contact button (bottom-right) */}
          <FloatingContactBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
