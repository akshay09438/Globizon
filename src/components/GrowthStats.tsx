"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CLIENTS = [
  {
    name: "Rajesh M.",
    handle: "E-commerce · Ontario",
    stat: "9K",
    targetNum: 9,
    statLabel: "LinkedIn in 12 months",
    badge: "0→9K in 12 months",
    points: "10,80 20,75 30,70 40,60 50,50 60,35 70,20 80,10 90,5",
  },
  {
    name: "Priya S.",
    handle: "IT Consulting · BC",
    stat: "3K",
    targetNum: 3,
    statLabel: "Instagram in 10 months",
    badge: "0→3K in 10 months",
    points: "10,82 20,78 30,72 40,65 50,52 60,38 70,22 80,12 90,6",
  },
  {
    name: "Amit D.",
    handle: "Restaurant Chain · Alberta",
    stat: "1K",
    targetNum: 1,
    statLabel: "LinkedIn in 8 months",
    badge: "0→1K in 8 months",
    points: "10,85 20,80 30,76 40,68 50,56 60,42 70,28 80,15 90,7",
  },
];

function HockeyGraph({ points, inView }: { points: string; inView: boolean }) {
  const pts = points.split(" ").map((p) => {
    const [x, y] = p.split(",").map(Number);
    return { x, y };
  });

  const pathD = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    return `${acc} L ${p.x} ${p.y}`;
  }, "");

  const last = pts[pts.length - 1];
  const first = pts[0];
  const fillD = `${pathD} L ${last.x} 100 L ${first.x} 100 Z`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "120px", display: "block" }}
    >
      <defs>
        <linearGradient id={`redGrad-${points.slice(0, 5)}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff2600" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff2600" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`clip-${points.slice(0, 5)}`}>
          <motion.rect
            x="0"
            y="0"
            width="100"
            height="100"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformOrigin: "0 50%" }}
          />
        </clipPath>
      </defs>
      <path d={fillD} fill={`url(#redGrad-${points.slice(0, 5)})`} clipPath={`url(#clip-${points.slice(0, 5)})`} />
      <motion.path
        d={pathD}
        fill="none"
        stroke="#ff2600"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </svg>
  );
}

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 14 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <>{display}K</>;
}

function StatCard({ c, i }: { c: (typeof CLIENTS)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        padding: "28px 28px 20px",
        overflow: "hidden",
        border: "1px solid #EAEAEA",
        boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{c.name}</p>
        <p style={{ fontSize: "12px", color: "rgba(26,26,26,0.45)", marginTop: "2px" }}>{c.handle}</p>
      </div>

      <div
        style={{
          backgroundColor: "#111111",
          borderRadius: "16px",
          padding: "20px 20px 12px",
          marginBottom: "16px",
        }}
      >
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "12px" }}>
          Follower Growth
        </p>
        <HockeyGraph points={c.points} inView={inView} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "52px",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          <CountUp target={c.targetNum} inView={inView} />
        </span>
        <div style={{ backgroundColor: "#ff2600", borderRadius: "999px", padding: "6px 14px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#ffffff" }}>{c.badge}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function GrowthStats() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 32px", borderTop: "1px solid rgba(26,26,26,0.05)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.3)",
            }}
          >
            Results
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-1.5px",
              color: "#1a1a1a",
              marginTop: "12px",
              lineHeight: 1.05,
            }}
          >
            When you win,{" "}
            <em style={{ fontStyle: "italic", color: "#ff2600" }}>we win.</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {CLIENTS.map((c, i) => (
            <StatCard key={c.name} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
