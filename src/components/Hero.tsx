"use client";

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
    <section className="bg-[#0d0d0d] px-6 pt-24 pb-20 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] mb-6">
          India → Canada Immigration Branding
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-white mb-6 max-w-4xl">
          Your Social Media Is
          <br />
          Your{" "}
          <em className="not-italic text-[#00e5a0]">Visa Application.</em>
        </h1>

        <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
          Immigration officers look you up online. We make sure what they find
          builds your case — not breaks it. Globizon manages your personal and
          business social presence so your PR file is bulletproof.
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
    </section>
  );
}
