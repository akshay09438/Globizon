import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-[#111] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          Results
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          Real Clients. Real Approvals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white/[0.03] border border-white/[0.07] p-8"
            >
              <p className="text-[15px] text-white/65 leading-relaxed italic mb-6">
                {t.quote}
              </p>
              <p className="text-[12px] font-bold text-white tracking-wide">
                {t.author}
              </p>
              <p className="text-[11px] text-white/35 mt-1">{t.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
