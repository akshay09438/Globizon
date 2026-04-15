"use client";

import { PACKAGES } from "@/lib/constants";

export default function Packages() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0d0d0d] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          Packages
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          Pick Your Package.
        </h2>
        <p className="text-[16px] text-white/45 mb-16 max-w-lg">
          All packages include a free onboarding strategy call and monthly PR
          documentation reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              className={`relative p-9 border ${
                pkg.featured
                  ? "bg-[#00e5a0]/[0.06] border-[#00e5a0]/30"
                  : "bg-white/[0.03] border-white/[0.08]"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 bg-[#00e5a0] text-black text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1">
                  Most Popular
                </span>
              )}

              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
                {pkg.tier}
              </p>
              <h3 className="text-2xl font-black text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-[13px] text-white/45 leading-relaxed mb-7 pb-7 border-b border-white/[0.06]">
                {pkg.description}
              </p>

              <ul className="mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[13px] text-white/60 py-2 border-b border-white/[0.04]"
                  >
                    <span className="text-[#00e5a0] flex-shrink-0">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full text-[11px] font-bold tracking-[0.15em] uppercase py-3.5 transition-colors ${
                  pkg.featured
                    ? "bg-[#00e5a0] text-black hover:bg-[#00c98e]"
                    : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                Book a Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
