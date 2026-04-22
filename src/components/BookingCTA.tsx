"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      style={{ backgroundColor: "#F8F9FA", padding: "96px 32px 80px" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Massive pulsing CTA pill — the dragonfruit signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "56px" }}
        >
          <motion.div
            animate={{ boxShadow: ["0 0 0 0 rgba(255,38,0,0.4)", "0 0 0 20px rgba(255,38,0,0)", "0 0 0 0 rgba(255,38,0,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ borderRadius: "999px" }}
          >
            <a
              href="#booking"
              onClick={(e) => e.preventDefault()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: `radial-gradient(ellipse 55% 60% at 20% 40%, rgba(255,100,50,0.45) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 80% 70%, rgba(120,0,0,0.5) 0%, transparent 50%), #ff2600`,
                borderRadius: "999px",
                padding: "20px 20px 20px 24px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {/* Logo mark */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "22px",
                    color: "#ffffff",
                    fontWeight: 400,
                  }}
                >
                  G
                </span>
              </div>
              <span
                style={{
                  fontSize: "clamp(18px, 3.5vw, 32px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                  textTransform: "uppercase",
                  flex: 1,
                }}
              >
                Book a Free Call Now
              </span>
              {/* Arrow */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "18px", color: "#ffffff" }}>→</span>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(26,26,26,0.12)", marginBottom: "48px" }} />

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "22px",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "-0.5px",
                marginBottom: "4px",
              }}
            >
              {submitted ? "You're in. We'll reach out within 24hrs." : "Sign up for the Globizon newsletter"}
            </p>
            {!submitted && (
              <p style={{ fontSize: "13px", color: "rgba(26,26,26,0.45)" }}>
                Business visa branding insights for entrepreneurs
              </p>
            )}
          </div>

          {!submitted && (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(26,26,26,0.15)",
                  borderRadius: "999px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  color: "#1a1a1a",
                  outline: "none",
                  minWidth: "130px",
                }}
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(26,26,26,0.15)",
                  borderRadius: "999px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  color: "#1a1a1a",
                  outline: "none",
                  minWidth: "200px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "12px 24px",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Receive Guide
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
