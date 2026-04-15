"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0d0d0d] px-6 pt-20 pb-16 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] mb-6">
            India → Canada Immigration Branding
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] text-white mb-6">
            Your Social Media Is
            <br />
            Your{" "}
            <em className="not-italic text-[#00e5a0]">Visa Application.</em>
          </h1>

          <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
            Immigration officers look you up online. We make sure what they
            find builds your case — not breaks it. Globizon manages your
            personal and business social presence so your PR file is
            bulletproof.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={scrollToBooking}
              className="bg-[#00e5a0] text-black text-[12px] font-black tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#00c98e] transition-colors"
            >
              Book Your Free Strategy Call
            </button>
            <button
              onClick={scrollToProcess}
              className="text-white/50 text-[12px] font-semibold tracking-wide uppercase border-b border-white/20 pb-0.5 hover:text-white/80 transition-colors"
            >
              See How It Works
            </button>
          </div>

          <p className="text-[12px] text-white/35 tracking-wide">
            ⚡{" "}
            <span className="text-red-400 font-bold">3 spots left</span> for
            onboarding this month
          </p>
        </div>

        {/* Right: image */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Professional Indian business owner"
              fill
              className="object-cover grayscale"
              priority
            />
            {/* Dark overlay for brand consistency */}
            <div className="absolute inset-0 bg-[#0d0d0d]/40" />
            {/* Accent border */}
            <div className="absolute inset-0 border border-[#00e5a0]/20" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 bg-[#111] border border-white/[0.08] px-6 py-5">
            <div className="text-3xl font-black text-white">94%</div>
            <div className="text-[11px] text-white/40 tracking-widest uppercase mt-1">
              PR Approval Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
