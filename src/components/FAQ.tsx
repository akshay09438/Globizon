"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
          FAQ
        </span>

        <h2
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 400,
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
            color: "#1a1a1a",
            marginBottom: "48px",
          }}
        >
          Common Questions.
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              style={{ borderBottom: "1px solid rgba(26,26,26,0.08)" }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    letterSpacing: "-0.2px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#ff2600",
                    fontSize: "22px",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  display: openIndex === i ? "block" : "none",
                  paddingBottom: "24px",
                  fontSize: "14px",
                  color: "rgba(26,26,26,0.55)",
                  lineHeight: 1.7,
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
