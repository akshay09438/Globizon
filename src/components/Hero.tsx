"use client";

import { motion } from "framer-motion";

const TRUST_LOGOS = [
  "IRCC", "Start-Up Visa", "Express Entry", "PNP", "LMIA", "SUV Program", "RNIP", "BCPNP",
];

const DOT_POSITIONS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: (i % 4) * 33 + 17,
  y: Math.floor(i / 4) * 33 + 17,
  delay: i * 0.12,
}));

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "#ffffff",
        padding: "120px 24px 80px",
      }}
    >
      {/* Animated floating dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "relative", width: "320px", height: "320px", opacity: 0.35 }}>
          {DOT_POSITIONS.map((dot) => (
            <motion.div
              key={dot.id}
              style={{
                position: "absolute",
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#ff2600",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.8,
                delay: dot.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.45)",
            marginBottom: "28px",
          }}
        >
          Your social media presence is important
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(48px, 9.5vw, 112px)",
            fontWeight: 400,
            lineHeight: 0.94,
            letterSpacing: "-3px",
            color: "#1a1a1a",
            marginBottom: "28px",
          }}
        >
          Build your profile
          <br />
          and become{" "}
          <em style={{ fontStyle: "italic", color: "#ff2600" }}>
            a global citizen.
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontSize: "17px",
            color: "rgba(26,26,26,0.55)",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: "0 auto 44px",
          }}
        >
          Visa officers Google you. We make sure what they find builds your
          case. We manage your full social presence so your business visa is
          bulletproof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={scrollToBooking}
            style={{
              backgroundColor: "#ff2600",
              color: "#ffffff",
              borderRadius: "999px",
              padding: "16px 40px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Book a Demo
          </button>
          <button
            onClick={scrollToProcess}
            style={{
              backgroundColor: "transparent",
              color: "#1a1a1a",
              borderRadius: "999px",
              padding: "16px 40px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1.5px solid rgba(26,26,26,0.3)",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,26,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(26,26,26,0.3)")}
          >
            Watch Video
          </button>
        </motion.div>
      </div>

      {/* Trust marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(26,26,26,0.07)",
          overflow: "hidden",
          padding: "18px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 22s linear infinite",
          }}
        >
          {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
            <span
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.3)",
                padding: "0 44px",
                whiteSpace: "nowrap",
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
