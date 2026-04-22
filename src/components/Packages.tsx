"use client";

import { PACKAGES } from "@/lib/constants";

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.35)",
            marginBottom: "24px",
          }}
        >
          Packages
        </span>

        <h2
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(44px, 5vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
            color: "#1a1a1a",
            marginBottom: "16px",
          }}
        >
          Pick Your Package.
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 1.2vw, 20px)",
            color: "rgba(26,26,26,0.5)",
            marginBottom: "64px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          All packages include a free onboarding strategy call and monthly
          activity reports.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "24px",
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              style={{
                position: "relative",
                backgroundColor: pkg.featured ? "#ff2600" : "#ffffff",
                border: pkg.featured ? "none" : "1px solid #EAEAEA",
                boxShadow: pkg.featured ? "none" : "0 4px 24px rgba(0,0,0,0.05)",
                borderRadius: "28px",
                padding: "52px 44px",
              }}
            >
              {pkg.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "28px",
                    backgroundColor: "#ffffff",
                    color: "#ff2600",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    borderRadius: "999px",
                    padding: "4px 14px",
                  }}
                >
                  Most Popular
                </span>
              )}

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: pkg.featured ? "rgba(255,255,255,0.6)" : "rgba(26,26,26,0.4)",
                  marginBottom: "14px",
                }}
              >
                {pkg.tier}
              </p>
              <h3
                style={{
                  fontFamily: "DM Serif Display, Georgia, serif",
                  fontSize: "36px",
                  fontWeight: 400,
                  color: pkg.featured ? "#ffffff" : "#1a1a1a",
                  marginBottom: "14px",
                  letterSpacing: "-0.5px",
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: pkg.featured ? "rgba(255,255,255,0.65)" : "rgba(26,26,26,0.55)",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: pkg.featured ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(26,26,26,0.08)",
                }}
              >
                {pkg.description}
              </p>

              <ul style={{ marginBottom: "40px", listStyle: "none", padding: 0 }}>
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: pkg.featured ? "rgba(255,255,255,0.8)" : "rgba(26,26,26,0.65)",
                      padding: "12px 0",
                      borderBottom: pkg.featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(26,26,26,0.06)",
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                style={{
                  width: "100%",
                  backgroundColor: pkg.featured ? "#ffffff" : "transparent",
                  color: pkg.featured ? "#ff2600" : "rgba(26,26,26,0.7)",
                  border: pkg.featured ? "none" : "1px solid rgba(26,26,26,0.2)",
                  borderRadius: "999px",
                  padding: "17px 0",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Book a Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
