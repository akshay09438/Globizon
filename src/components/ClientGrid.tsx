"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const CLIENTS = [
  {
    name: "Rajesh M.",
    handle: "@rajesh.builds",
    achievement: "PR Approved · Ontario",
    stat: "9.2 / 10",
    statLabel: "PR File Score",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya S.",
    handle: "@priyasconsults",
    achievement: "PR Approved · BC",
    stat: "11 mo",
    statLabel: "To Approval",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Amit D.",
    handle: "@amitdoshi.ca",
    achievement: "PR Approved · Alberta",
    stat: "4.8K",
    statLabel: "LinkedIn Followers",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Neha K.",
    handle: "@neha.ventures",
    achievement: "PR Approved · Manitoba",
    stat: "16 mo",
    statLabel: "Brand Built In",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Vikram P.",
    handle: "@vikram.tech",
    achievement: "Application Active",
    stat: "6.1K",
    statLabel: "Instagram Followers",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Ananya R.",
    handle: "@ananya.brand",
    achievement: "PR Approved · Quebec",
    stat: "8 mo",
    statLabel: "To Approval",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80",
  },
  {
    name: "Arjun S.",
    handle: "@arjun.startup",
    achievement: "PR Approved · Ontario",
    stat: "12K",
    statLabel: "Total Reach",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
  },
  {
    name: "Divya M.",
    handle: "@divya.wellness",
    achievement: "Application Active",
    stat: "9.5K",
    statLabel: "LinkedIn Network",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

function ClientCard({ c, i }: { c: (typeof CLIENTS)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#111111",
        borderRadius: "20px",
        overflow: "hidden",
        border: hovered
          ? "1px solid rgba(255,38,0,0.5)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(255,38,0,0.2), 0 8px 32px rgba(255,38,0,0.12)"
          : "none",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Portrait */}
      <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden" }}>
        <Image
          src={c.img}
          alt={c.name}
          fill
          style={{
            objectFit: "cover",
            filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "filter 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
          sizes="300px"
        />
        {/* Red badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "#ff2600",
            borderRadius: "999px",
            padding: "4px 12px",
            fontSize: "10px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.05em",
          }}
        >
          {c.achievement}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px 20px 22px" }}>
        <p style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "2px" }}>
          {c.name}
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "14px" }}>
          {c.handle}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "14px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            {c.stat}
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
            {c.statLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ClientGrid() {
  return (
    <section style={{ backgroundColor: "#1a1a1a", padding: "96px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          Home to genuine entrepreneurs and thought-leaders
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {CLIENTS.map((c, i) => (
            <ClientCard key={c.name} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
