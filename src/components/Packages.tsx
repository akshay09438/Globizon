"use client";

import { motion } from "framer-motion";

const PRESTIGE_FEATURES = [
  "Website included",
  "1 year maintenance included",
  "Your messaging, your tone, your content — all created by us",
  "Managed posting across all social media platforms",
  "108 static posts/year",
  "1 brand video",
  "Monthly strategy calls",
];

const PINNACLE_FEATURES = [
  "Everything in Prestige, plus:",
  "LinkedIn profile optimization",
  "12 videos/year",
  "4 blogs/year",
  "Dedicated account manager",
];

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="8" cy="8" r="7.5" stroke={light ? "rgba(255,255,255,0.3)" : "rgba(26,26,26,0.15)"} />
      <path d="M5 8l2 2 4-4" stroke={light ? "#ffffff" : "#ff2600"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

        <span style={{
          display: "inline-block",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(26,26,26,0.35)",
          marginBottom: "24px",
        }}>
          Packages
        </span>

        <h2 style={{
          fontFamily: "DM Serif Display, Georgia, serif",
          fontSize: "clamp(44px, 5vw, 72px)",
          fontWeight: 400,
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
          color: "#1a1a1a",
          marginBottom: "16px",
        }}>
          Pick Your Package.
        </h2>
        <p style={{
          fontSize: "clamp(16px, 1.2vw, 20px)",
          color: "rgba(26,26,26,0.5)",
          marginBottom: "72px",
          maxWidth: "480px",
          lineHeight: 1.6,
        }}>
          All packages include a free onboarding strategy call and monthly activity reports.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "20px",
          alignItems: "stretch",
        }}>

          {/* Prestige — white card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #E5E5E5",
              borderRadius: "28px",
              padding: "48px 40px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              marginBottom: "20px",
            }}>
              Prestige
            </p>

            <div style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid rgba(26,26,26,0.07)" }}>
              <p style={{
                fontSize: "14px",
                color: "rgba(26,26,26,0.4)",
                textDecoration: "line-through",
                marginBottom: "4px",
              }}>
                ₹3,00,000/yr
              </p>
              <p style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "48px",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "-2px",
                lineHeight: 1,
                marginBottom: "6px",
              }}>
                ₹2,54,000
                <span style={{ fontSize: "16px", fontWeight: 400, color: "rgba(26,26,26,0.4)", letterSpacing: "0px" }}>/yr</span>
              </p>
              <p style={{ fontSize: "14px", color: "rgba(26,26,26,0.5)", lineHeight: 1.5 }}>
                For businesses establishing a strong business profile on the internet.
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", flex: 1 }}>
              {PRESTIGE_FEATURES.map((f) => (
                <li key={f} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(26,26,26,0.05)",
                  fontSize: "14px",
                  color: "rgba(26,26,26,0.7)",
                  lineHeight: 1.5,
                }}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToBooking}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#1a1a1a",
                border: "1.5px solid rgba(26,26,26,0.2)",
                borderRadius: "999px",
                padding: "16px 0",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,26,0.6)";
                e.currentTarget.style.backgroundColor = "rgba(26,26,26,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,26,0.2)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Book a Call
            </button>
          </motion.div>

          {/* Pinnacle — red card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: `radial-gradient(ellipse 70% 50% at 20% 30%, rgba(255,100,50,0.4) 0%, transparent 60%), #ff2600`,
              borderRadius: "28px",
              padding: "48px 40px",
              boxShadow: "0 12px 48px rgba(255,38,0,0.3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "20px",
            }}>
              Pinnacle
            </p>

            <div style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "48px",
                fontWeight: 400,
                color: "#ffffff",
                letterSpacing: "-2px",
                lineHeight: 1,
                marginBottom: "6px",
              }}>
                ₹3,99,000
                <span style={{ fontSize: "16px", fontWeight: 400, color: "rgba(255,255,255,0.5)", letterSpacing: "0px" }}>/yr</span>
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                Everything in Prestige, plus a video add-on for brands that want more content velocity.
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", flex: 1 }}>
              {PINNACLE_FEATURES.map((f) => (
                <li key={f} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                }}>
                  <CheckIcon light />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToBooking}
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#ff2600",
                border: "none",
                borderRadius: "999px",
                padding: "16px 0",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Book a Call
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
