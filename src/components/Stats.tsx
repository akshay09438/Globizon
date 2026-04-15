import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <div className="bg-[#161616] border-y border-white/[0.06] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-x-16 gap-y-6">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-black text-white">{stat.num}</div>
            <div className="text-[11px] text-white/40 tracking-[0.15em] uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
