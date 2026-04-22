"use client";

import { motion } from "framer-motion";

// Organic blob shapes (irregular border-radius) + tiny dots — matches dragonfruitmedia.co
const BLOBS = [
  { top: "12%",  left: "4%",   w: 52, h: 46, r: "62% 38% 70% 30% / 45% 65% 35% 55%"  },
  { top: "68%",  left: "3%",   w: 44, h: 40, r: "40% 60% 30% 70% / 60% 40% 65% 35%"  },
  { top: "38%",  left: "11%",  w: 36, h: 34, r: "55% 45% 65% 35% / 35% 65% 45% 55%"  },
  { top: "85%",  left: "20%",  w: 28, h: 26, r: "70% 30% 55% 45% / 50% 60% 40% 70%"  },
  { top: "8%",   right: "5%",  w: 48, h: 44, r: "38% 62% 45% 55% / 65% 35% 70% 30%"  },
  { top: "52%",  right: "4%",  w: 56, h: 50, r: "60% 40% 35% 65% / 40% 60% 55% 45%"  },
  { top: "28%",  right: "13%", w: 34, h: 32, r: "45% 55% 60% 40% / 70% 30% 50% 50%"  },
  { top: "78%",  right: "7%",  w: 42, h: 38, r: "35% 65% 50% 50% / 55% 45% 40% 60%"  },
];

// Tiny filled dots scattered everywhere
const DOTS = [
  { top: "6%",  left: "18%" }, { top: "15%", left: "32%" }, { top: "8%",  left: "62%" },
  { top: "4%",  left: "78%" }, { top: "22%", left: "8%"  }, { top: "30%", left: "44%" },
  { top: "45%", left: "26%" }, { top: "55%", left: "56%" }, { top: "18%", right: "22%"},
  { top: "35%", right: "8%"  }, { top: "60%", left: "14%" }, { top: "72%", left: "38%"},
  { top: "80%", left: "52%" }, { top: "65%", right: "18%" }, { top: "88%", right: "30%"},
  { top: "92%", left: "28%" }, { top: "48%", left: "6%"  }, { top: "25%", right: "34%"},
];

export default function ValueProp() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundColor: "#EDEDED",
        padding: "160px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Organic blob outlines */}
      {BLOBS.map((b, i) => (
        <div
          key={`blob-${i}`}
          style={{
            position: "absolute",
            top: b.top,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            width: `${b.w}px`,
            height: `${b.h}px`,
            borderRadius: b.r,
            border: "1.5px solid rgba(255,38,0,0.3)",
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Tiny red dots */}
      {DOTS.map((d, i) => (
        <div
          key={`dot-${i}`}
          style={{
            position: "absolute",
            top: d.top,
            left: (d as { left?: string }).left,
            right: (d as { right?: string }).right,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,38,0,0.55)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto" }}>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "22px",
            backgroundColor: "#ff2600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 48px",
            boxShadow: "0 8px 40px rgba(255,38,0,0.4)",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.8"/>
            <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1.8"/>
            <path d="M6 18c0-3 2.7-5 6-5s6 2 6 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M9 4V3M15 4V3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* Headline — 72px matching reference */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(44px, 5vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
            color: "#1a1a1a",
            marginBottom: "24px",
          }}
        >
          We are serious about your branding.
        </motion.h2>

        {/* Body — 28px matching reference */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontSize: "clamp(17px, 1.5vw, 24px)",
            color: "rgba(26,26,26,0.55)",
            lineHeight: 1.55,
            maxWidth: "640px",
            margin: "0 auto 52px",
          }}
        >
          We&apos;ve helped 100+ entrepreneurs build digital presences that enhanced
          their business visa application. No filler content, no vanity metrics,
          just work that moves files forward.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={scrollToBooking}
            style={{
              backgroundColor: "#ff2600",
              color: "#ffffff",
              borderRadius: "999px",
              padding: "18px 48px",
              fontSize: "13px",
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
              padding: "18px 48px",
              fontSize: "13px",
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
    </section>
  );
}
