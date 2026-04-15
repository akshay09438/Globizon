"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#0d0d0d] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#00e5a0] bg-[#00e5a0]/10 px-2.5 py-1 mb-5">
          FAQ
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
          Common Questions.
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border-b border-white/[0.07]">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-[15px] font-bold text-white pr-4">
                  {faq.q}
                </span>
                <span
                  className="text-[#00e5a0] text-xl flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform:
                      openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{ display: openIndex === i ? "block" : "none" }}
                className="pb-6 text-[14px] text-white/45 leading-relaxed"
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
