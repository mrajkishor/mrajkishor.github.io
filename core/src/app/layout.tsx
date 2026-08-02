import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajkishor Maharana — The Backend Whisperer",
  description: "A magazine-format portfolio for an engineer who has spent 8+ years making Fortune 500 systems behave — Java/Spring Boot, Node.js, React, Kafka, AWS, and a healthy suspicion of monoliths.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable} ${serif.variable}`}>
      <body style={{ background: 'var(--paper)', color: 'var(--ink)' }} suppressHydrationWarning>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
          <footer
            style={{
              background: 'var(--ink)',
              borderTop: '4px solid var(--ink)',
              padding: '2rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              textAlign: 'center',
            }}
          >
            <img
              src="/images/byline.jpg"
              alt="Rajkishor Maharana"
              className="photo-brut"
              style={{ width: '28px', height: '28px', objectFit: 'cover', border: '2px solid var(--paper-2)', flexShrink: 0 }}
            />
            <p
              className="mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: 'var(--paper-2)',
              }}
            >
              VOL. 1, NO. 8 · WRITTEN, CODED &amp; MOSTLY DEBUGGED BY RAJKISHOR MAHARANA · HYDERABAD, INDIA ·{" "}
              <a
                href="https://github.com/mrajkishor/mrajkishor.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-source-link"
              >
                READ THE SOURCE ↗
              </a>
            </p>
          </footer>
        </PageTransition>
      </body>
    </html>
  );
}
