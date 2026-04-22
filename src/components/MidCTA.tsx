"use client";

export default function MidCTA() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundColor: "#1a1a1a",
        padding: "120px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scattered red dots — decorative */}
      {[
        { top: "12%", left: "8%", size: 6 },
        { top: "30%", left: "15%", size: 10 },
        { top: "70%", left: "6%", size: 7 },
        { top: "85%", left: "20%", size: 5 },
        { top: "15%", right: "10%", size: 8 },
        { top: "45%", right: "7%", size: 6 },
        { top: "75%", right: "15%", size: 9 },
        { top: "90%", right: "8%", size: 5 },
        { top: "55%", left: "3%", size: 14, opacity: 0.15, hollow: true },
        { top: "20%", right: "3%", size: 18, opacity: 0.12, hollow: true },
        { top: "80%", left: "25%", size: 12, opacity: 0.13, hollow: true },
      ].map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            backgroundColor: dot.hollow ? "transparent" : "#fd2507",
            border: dot.hollow ? `1.5px solid rgba(253,37,7,${dot.opacity ?? 0.6})` : "none",
            opacity: dot.hollow ? 1 : 0.7,
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        {/* Logo icon */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "16px",
            backgroundColor: "#fd2507",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 36px",
          }}
        >
          <span
            style={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: "28px",
              color: "#ffffff",
              fontWeight: 400,
            }}
          >
            G
          </span>
        </div>

        <h2
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(36px, 5.5vw, 68px)",
            fontWeight: 400,
            letterSpacing: "-2px",
            lineHeight: 1.0,
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          We&apos;re serious about
          <br />
          <em style={{ fontStyle: "italic", color: "#fd2507" }}>immigration branding.</em>
        </h2>

        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: "0 auto 44px",
          }}
        >
          We&apos;ve helped 80+ Indian entrepreneurs build the digital presence
          that got their PR approved. No shortcuts, no generic content — just
          work that moves immigration files forward.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={scrollToBooking}
            style={{
              backgroundColor: "#fd2507",
              color: "#ffffff",
              borderRadius: "999px",
              padding: "18px 44px",
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
              color: "rgba(255,255,255,0.6)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "999px",
              padding: "18px 44px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
          >
            See Our Process
          </button>
        </div>
      </div>
    </section>
  );
}
