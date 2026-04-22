"use client";

import { motion } from "framer-motion";

const PLATFORMS = [
  {
    name: "Instagram",
    icon: "📸",
    highlight: false,
    stats: [
      { label: "Monthly Active Users", value: "2B+" },
      { label: "Immigration officers who check it", value: "47%" },
      { label: "Avg. income of active users", value: "$62K" },
      { label: "Content indexed in PR files", value: "Rare" },
      { label: "Best for immigration", value: "Visual proof" },
    ],
  },
  {
    name: "YouTube",
    icon: "▶",
    highlight: true,
    stats: [
      { label: "Monthly Active Users", value: "2.7B+" },
      { label: "Immigration officers who check it", value: "78%" },
      { label: "Avg. income of active users", value: "$98K+" },
      { label: "Content indexed in PR files", value: "High impact" },
      { label: "Best for immigration", value: "Authority & depth" },
    ],
  },
  {
    name: "TikTok",
    icon: "🎵",
    highlight: false,
    stats: [
      { label: "Monthly Active Users", value: "1.5B+" },
      { label: "Immigration officers who check it", value: "34%" },
      { label: "Avg. income of active users", value: "$48K" },
      { label: "Content indexed in PR files", value: "Emerging" },
      { label: "Best for immigration", value: "Reach & visibility" },
    ],
  },
];

export default function PlatformComparison() {
  return (
    <section style={{ backgroundColor: "#1a1a1a", padding: "96px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px", textAlign: "center" }}
        >
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Platform Intelligence
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 400,
              letterSpacing: "-2px",
              color: "#ffffff",
              lineHeight: 1.0,
            }}
          >
            YouTube isn&apos;t optional.
            <br />
            <em style={{ fontStyle: "italic", color: "#ff2600" }}>It&apos;s your PR case builder.</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            alignItems: "start",
          }}
        >
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                backgroundColor: platform.highlight ? "#111111" : "#080808",
                borderRadius: "20px",
                border: platform.highlight
                  ? "1.5px solid rgba(255,38,0,0.6)"
                  : "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                transform: platform.highlight ? "scale(1.04)" : "scale(1)",
                boxShadow: platform.highlight
                  ? "0 0 40px rgba(255,38,0,0.12)"
                  : "none",
              }}
            >
              {platform.highlight && (
                <div
                  style={{
                    backgroundColor: "#ff2600",
                    padding: "8px 24px",
                    textAlign: "center",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  Most Important for PR
                </div>
              )}

              <div style={{ padding: "28px 24px" }}>
                <p style={{ fontSize: "22px", marginBottom: "6px" }}>{platform.icon}</p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.3px",
                    marginBottom: "28px",
                  }}
                >
                  {platform.name}
                </h3>

                {platform.stats.map((stat, j) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "14px 0",
                      borderTop: j === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>
                      {stat.label}
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: platform.highlight ? "#ffffff" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
