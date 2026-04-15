"use client";

import { useState } from "react";

export default function BookingCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="bg-[#0d0d0d] border-t border-white/[0.06] px-6 py-28 flex flex-col items-center text-center"
    >
      <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-6">
        Get Started
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white mb-5 max-w-2xl">
        Ready to Build the Brand
        <br />
        That Gets You to{" "}
        <em className="not-italic text-[#00e5a0]">Canada?</em>
      </h2>

      <p className="text-[17px] text-white/45 leading-relaxed max-w-md mb-10">
        Book a free 30-minute strategy call. We'll review your current online
        presence, identify the gaps, and tell you exactly what it'll take to
        strengthen your PR file.
      </p>

      {submitted ? (
        <div className="bg-[#00e5a0]/10 border border-[#00e5a0]/30 px-8 py-6 max-w-md w-full">
          <p className="text-[#00e5a0] font-bold text-lg mb-1">
            You're on the list!
          </p>
          <p className="text-white/55 text-[14px]">
            We'll be in touch within 24 hours to confirm your call.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl w-full mb-4"
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/30 px-5 py-3.5 text-[14px] outline-none focus:border-[#00e5a0]/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-[1.2] bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/30 px-5 py-3.5 text-[14px] outline-none focus:border-[#00e5a0]/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-[#00e5a0] text-black text-[11px] font-black tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-[#00c98e] transition-colors whitespace-nowrap"
          >
            Book Free Call
          </button>
        </form>
      )}

      <p className="text-[12px] text-white/25 tracking-wide">
        No commitment. No fees. Just clarity on your next step.
      </p>
    </section>
  );
}
