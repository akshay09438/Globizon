import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

// Unsplash photos of professional South Asian business people
const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
];

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
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author}
              className="bg-white/[0.03] border border-white/[0.07] p-8"
            >
              <p className="text-[15px] text-white/65 leading-relaxed italic mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={AVATARS[i]}
                    alt={t.author}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-white tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-white/35 mt-0.5">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
