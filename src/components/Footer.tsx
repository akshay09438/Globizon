"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(26,26,26,0.1)",
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo + links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
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
          {["Instagram", "LinkedIn", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(26,26,26,0.5)",
                textDecoration: "none",
                letterSpacing: "0.03em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,26,26,0.5)")}
            >
              {link}
            </a>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "rgba(26,26,26,0.3)" }}>
          © 2025 Globizon. Business visa branding specialists.
        </p>
      </div>
    </footer>
  );
}
