"use client";

import { PACKAGE_ROWS } from "@/lib/constants";

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

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
          marginBottom: "64px",
          maxWidth: "480px",
          lineHeight: 1.6,
        }}>
          All packages include a free onboarding strategy call and monthly activity reports.
        </p>

        {/* Comparison table */}
        <div style={{
          border: "1px solid #E5E5E5",
          borderRadius: "20px",
          overflow: "hidden",
        }}>
          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            borderBottom: "1px solid #E5E5E5",
          }}>
            <div style={{ padding: "28px 32px" }}>
              <p style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.4)",
              }}>
                Feature
              </p>
            </div>

            {/* Prestige */}
            <div style={{
              padding: "28px 24px",
              borderLeft: "1px solid #E5E5E5",
              backgroundColor: "#FAFAFA",
            }}>
              <p style={{ fontSize: "18px", marginBottom: "4px" }}>⭐</p>
              <p style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "4px",
              }}>
                Prestige
              </p>
              <p style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#1a1a1a",
                letterSpacing: "-0.2px",
              }}>
                ₹2,54,000<span style={{ fontWeight: 400, color: "rgba(26,26,26,0.45)", fontSize: "12px" }}>/yr</span>
              </p>
            </div>

            {/* Pinnacle */}
            <div style={{
              padding: "28px 24px",
              borderLeft: "1px solid #E5E5E5",
              backgroundColor: "#fff5f3",
            }}>
              <p style={{ fontSize: "18px", marginBottom: "4px" }}>🏆</p>
              <p style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "4px",
              }}>
                Pinnacle
              </p>
              <p style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ff2600",
                letterSpacing: "-0.2px",
              }}>
                ₹3,99,000<span style={{ fontWeight: 400, color: "rgba(26,26,26,0.45)", fontSize: "12px" }}>/yr</span>
              </p>
            </div>
          </div>

          {/* Feature rows */}
          {PACKAGE_ROWS.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr",
                borderBottom: i < PACKAGE_ROWS.length - 1 ? "1px solid #E5E5E5" : "none",
              }}
            >
              <div style={{ padding: "20px 32px" }}>
                <p style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}>
                  {row.feature}
                </p>
              </div>
              <div style={{
                padding: "20px 24px",
                borderLeft: "1px solid #E5E5E5",
                backgroundColor: "#FAFAFA",
              }}>
                <p style={{
                  fontSize: "13px",
                  color: row.prestige === "✗" ? "rgba(26,26,26,0.3)" : "rgba(26,26,26,0.7)",
                  lineHeight: 1.5,
                }}>
                  {row.prestige}
                </p>
              </div>
              <div style={{
                padding: "20px 24px",
                borderLeft: "1px solid #E5E5E5",
                backgroundColor: "#fff5f3",
              }}>
                <p style={{
                  fontSize: "13px",
                  color: row.pinnacle === "✗" ? "rgba(26,26,26,0.3)" : "rgba(26,26,26,0.7)",
                  lineHeight: 1.5,
                }}>
                  {row.pinnacle}
                </p>
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            borderTop: "1px solid #E5E5E5",
          }}>
            <div style={{ padding: "24px 32px" }} />
            <div style={{
              padding: "24px 24px",
              borderLeft: "1px solid #E5E5E5",
              backgroundColor: "#FAFAFA",
            }}>
              <button
                onClick={scrollToBooking}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#1a1a1a",
                  border: "1.5px solid rgba(26,26,26,0.25)",
                  borderRadius: "999px",
                  padding: "13px 0",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,26,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,26,0.25)")}
              >
                Book a Call
              </button>
            </div>
            <div style={{
              padding: "24px 24px",
              borderLeft: "1px solid #E5E5E5",
              backgroundColor: "#fff5f3",
            }}>
              <button
                onClick={scrollToBooking}
                style={{
                  width: "100%",
                  backgroundColor: "#ff2600",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "13px 0",
                  fontSize: "11px",
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
          </div>
        </div>
      </div>
    </section>
  );
}
