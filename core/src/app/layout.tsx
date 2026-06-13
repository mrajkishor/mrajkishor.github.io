import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Rajkishor Maharana — Full Stack Engineer",
  description: "7.5+ years building enterprise systems — Java/Spring Boot, Node.js, React, Kafka, AWS. Fortune 500 delivery across Healthcare, Telecom, BFSI & Aviation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--bg-base)', color: 'var(--text-100)' }} suppressHydrationWarning>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
          <footer
            style={{
              background: 'var(--bg-surface)',
              borderTop: '1px solid var(--border)',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: 'var(--text-400)',
              }}
            >
              RAJKISHOR MAHARANA · HYDERABAD, INDIA ·{" "}
              <a
                href="https://github.com/mrajkishor/mrajkishor.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-source-link"
              >
                VIEW SOURCE ↗
              </a>
            </p>
          </footer>
        </PageTransition>
      </body>
    </html>
  );
}
