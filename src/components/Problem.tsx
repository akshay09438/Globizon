const PROBLEMS = [
  {
    icon: "01",
    title: "Your Online Presence Is Evidence",
    body: "Visa officers and immigration consultants verify your business credibility through your digital footprint. A weak online presence raises red flags.",
  },
  {
    icon: "02",
    title: "Documentation Needs Proof",
    body: "Your PR file needs to show active business operations. A consistent posting history across platforms serves as timestamped, verifiable evidence.",
  },
  {
    icon: "03",
    title: "Competition Is Fierce",
    body: "Thousands of Indian entrepreneurs are applying. The ones with a strong personal brand and active business profile stand out — and get approved faster.",
  },
];

export default function Problem() {
  return (
    <section
      style={{
        backgroundColor: "#1a1a1a",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "24px",
          }}
        >
          The Problem
        </span>

        <h2
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 400,
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
            color: "#ffffff",
            marginBottom: "20px",
            maxWidth: "640px",
          }}
        >
          Immigration Officers{" "}
          <em style={{ fontStyle: "italic", color: "#fd2507" }}>Google You.</em>
          <br />
          What Do They Find?
        </h2>

        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "64px",
          }}
        >
          Canada&apos;s PR programs require you to prove your business is real, your
          leadership is credible, and your presence is established. A blank
          Instagram and a LinkedIn with 12 connections doesn&apos;t cut it anymore.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "DM Serif Display, Georgia, serif",
                  fontSize: "48px",
                  fontWeight: 400,
                  color: "rgba(253,37,7,0.2)",
                  lineHeight: 1,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                {p.icon}
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "10px",
                  letterSpacing: "-0.2px",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.65,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
