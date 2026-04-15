const STEPS = [
  {
    num: "01",
    title: "Brand Strategy Session",
    body: "We map out your personal narrative, business story, and the exact angles that resonate with Canadian immigration standards.",
  },
  {
    num: "02",
    title: "Profile Setup & Optimisation",
    body: "LinkedIn, Instagram, and more — fully built out with professional copy, visuals, and keyword-optimised bios.",
  },
  {
    num: "03",
    title: "Ongoing Content & Management",
    body: "Monthly content calendars, post creation, publishing, and community management — all done for you.",
  },
  {
    num: "04",
    title: "Monthly PR-Ready Reports",
    body: "We generate activity reports you can submit directly as supporting documentation in your PR application file.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#111] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          How It Works
        </span>

        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white mb-16 max-w-xl">
          We Handle Everything.
          <br />
          You Focus on Your Move.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.num}>
              <div className="text-6xl font-black text-[#00e5a0]/10 leading-none mb-4">
                {step.num}
              </div>
              <h4 className="text-[15px] font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-[13px] text-white/45 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
