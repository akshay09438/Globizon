const PROBLEMS = [
  {
    icon: "🔍",
    title: "Your Online Presence Is Evidence",
    body: "Visa officers and immigration consultants verify your business credibility through your digital footprint. A weak online presence raises red flags.",
  },
  {
    icon: "📄",
    title: "Documentation Needs Proof",
    body: "Your PR file needs to show active business operations. A consistent posting history across platforms serves as timestamped, verifiable evidence.",
  },
  {
    icon: "🏆",
    title: "Competition Is Fierce",
    body: "Thousands of Indian entrepreneurs are applying. The ones with a strong personal brand and active business profile stand out — and get approved faster.",
  },
];

export default function Problem() {
  return (
    <section
      className="relative bg-[#0d0d0d] px-6 py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d0d0d]/90" />
      <div className="relative max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          The Problem
        </span>

        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white mb-6 max-w-2xl">
          Immigration Officers{" "}
          <em className="not-italic text-[#00e5a0]">Google You.</em>
          <br />
          What Do They Find?
        </h2>

        <p className="text-[17px] text-white/55 leading-relaxed max-w-xl mb-14">
          Canada's PR programs require you to prove your business is real, your
          leadership is credible, and your presence is established. A blank
          Instagram and a LinkedIn with 12 connections doesn't cut it anymore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.03] border border-white/[0.08] p-7"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h4 className="text-[15px] font-bold text-white mb-2">
                {p.title}
              </h4>
              <p className="text-[13px] text-white/45 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
