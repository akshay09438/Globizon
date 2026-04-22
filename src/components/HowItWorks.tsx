"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const STEPS = [
  {
    num: "1",
    title: "Strategy Research & Development",
    body: "We use data and competitive analysis to build your business visa-ready brand strategy — your personal narrative, business story, and the exact content angles that resonate with Canadian visa standards.",
    extra: "Content pillars · LinkedIn positioning · Instagram narrative · Brand voice guide",
  },
  {
    num: "2",
    title: "Creative Production & Management",
    body: "Titles, thumbnails, captions, and visuals — fully written, designed, and published by our team. Monthly content calendars, community management, and profile optimisation, all done for you.",
    extra: "8–24 posts/month · Profile builds · Bi-weekly strategy calls · Reply management",
  },
  {
    num: "3",
    title: "Documentation & Visa Reporting",
    body: "We generate structured activity reports that serve as timestamped, verifiable evidence of your business operations and leadership presence — ready to attach to your business visa application file.",
    extra: "Monthly reports · Evidence packaging · Consultant-ready documentation kit",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" style={{ backgroundColor: "#EDEDED", padding: "96px 32px 112px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em",
            textTransform: "uppercase", color: "rgba(26,26,26,0.3)",
            display: "block", marginBottom: "20px",
          }}>
            How It Works
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(44px, 5vw, 72px)",
            fontWeight: 400, letterSpacing: "-0.5px",
            color: "#1a1a1a", lineHeight: 1.1, maxWidth: "640px",
          }}>
            You bring the expertise.{" "}
            <em style={{ fontStyle: "italic", color: "#ff2600" }}>We do the rest.</em>
          </h2>
        </motion.div>

        <div style={{ display: "flex", gap: "6px", height: "560px" }}>
          {STEPS.map((step, i) => {
            const isActive = active === i;
            return (
              <div
                key={step.num}
                onClick={() => setActive(i)}
                style={{
                  flexGrow: isActive ? 5 : 0.7,
                  flexShrink: 1,
                  flexBasis: 0,
                  minWidth: 0,
                  borderRadius: "24px",
                  backgroundColor: isActive ? "#ff2600" : "#ffffff",
                  border: isActive ? "none" : "1px solid rgba(26,26,26,0.08)",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  transition: "flex-grow 0.55s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease",
                }}
              >
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute", inset: 0,
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "space-between",
                        padding: "36px 0",
                      }}
                    >
                      <span style={{
                        fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
                        textTransform: "uppercase", color: "rgba(26,26,26,0.25)",
                        writingMode: "vertical-rl", transform: "rotate(180deg)",
                      }}>
                        Step {step.num}
                      </span>
                      <span style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: "80px", fontWeight: 400,
                        color: "rgba(255,38,0,0.2)", lineHeight: 1, letterSpacing: "-3px",
                      }}>
                        {step.num}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.18 }}
                      style={{
                        position: "absolute", inset: 0,
                        padding: "44px 44px 40px",
                        display: "flex", flexDirection: "column", justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          fontSize: "80px", fontWeight: 400,
                          color: "rgba(26,26,26,0.3)", lineHeight: 1,
                          letterSpacing: "-3px", display: "block", marginBottom: "28px",
                        }}>
                          {step.num}
                        </span>
                        <h3 style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          fontSize: "clamp(30px, 3.2vw, 56px)",
                          fontWeight: 400, color: "#1a1a1a",
                          letterSpacing: "-1px", lineHeight: 1.1,
                          marginBottom: "20px", maxWidth: "440px",
                        }}>
                          {step.title}
                        </h3>
                        <p style={{
                          fontSize: "clamp(14px, 1.1vw, 17px)",
                          color: "rgba(26,26,26,0.65)", lineHeight: 1.7, maxWidth: "460px",
                        }}>
                          {step.body}
                        </p>
                      </div>
                      <p style={{
                        fontSize: "12px", color: "rgba(26,26,26,0.5)",
                        fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1.6,
                      }}>
                        {step.extra}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
