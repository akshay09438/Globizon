"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "18px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s ease",
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "20px",
          fontWeight: 400,
          color: "#1a1a1a",
          letterSpacing: "-0.3px",
        }}
      >
        Globizon
      </span>

      {/* CTA pill */}
      <button
        onClick={scrollToBooking}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#ff2600",
          borderRadius: "999px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {/* Pulsing dot */}
        <div style={{ position: "relative", width: "8px", height: "8px", flexShrink: 0 }}>
          <motion.div
            animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          Reserve Your Spot
        </span>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            whiteSpace: "nowrap",
          }}
        >
          — 3 slots left
        </span>
      </button>
    </nav>
  );
}
