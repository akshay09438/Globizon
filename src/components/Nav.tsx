"use client";

export default function Nav() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black tracking-[0.2em] uppercase text-white">
          GLOBI<span className="text-[#00e5a0]">ZON</span>
        </span>
        <button
          onClick={scrollToBooking}
          className="bg-[#00e5a0] text-black text-[11px] font-black tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#00c98e] transition-colors"
        >
          Book Free Call
        </button>
      </div>
    </nav>
  );
}
