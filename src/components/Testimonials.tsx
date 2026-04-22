"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      style={{
        backgroundColor: "#EDEDED",
        padding: "112px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.4)",
            marginBottom: "56px",
          }}
        >
          Results
        </span>

        {/* Giant quote */}
        <p
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#1a1a1a",
            lineHeight: 1.2,
            letterSpacing: "-1px",
            marginBottom: "48px",
          }}
        >
          {t.quote}
        </p>

        {/* Author row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                position: "relative",
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={AVATARS[active]}
                alt={t.author}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "0.02em",
                }}
              >
                {t.author}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(26,26,26,0.45)",
                  marginTop: "2px",
                }}
              >
                {t.meta}
              </p>
            </div>
          </div>

          {/* Dot navigation */}
          <div style={{ display: "flex", gap: "10px" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "999px",
                  backgroundColor: i === active ? "#ff2600" : "rgba(26,26,26,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s, background-color 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
