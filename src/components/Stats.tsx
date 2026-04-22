import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <div
      style={{
        backgroundColor: "#e8f1e8",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: "44px",
                fontWeight: 400,
                color: "#1a1a1a",
                lineHeight: 1,
                letterSpacing: "-1px",
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(26,26,26,0.5)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
