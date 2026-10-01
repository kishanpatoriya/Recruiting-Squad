import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What is Recruiting Squad?",
    answer:
      "The Recruiting Squad is a tech-enabled recruiting solution that combines smart software with seasoned recruiters, enabling businesses to hire without the overhead of an in-house recruiting team or costly staffing agency placement fees.",
  },
  {
    id: 2,
    question: "What type of positions does The Recruiting Squad fill?",
    answer:
      "We recruit across technical roles (Software Engineering, DevOps, Product), go-to-market roles (Sales, Marketing, Customer Success), and operational leadership positions tailored to your company's growth stage.",
  },
  {
    id: 3,
    question: "Does The Recruiting Squad handle the full lifecycle of recruiting?",
    answer:
      "Yes, we handle everything from candidate sourcing and multi-touch outreach to deep qualification screening, interview scheduling, and final offer management.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10 xl:px-16 select-none font-sans overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ================= LEFT SIDE: HEADLINE & BUTTON ================= */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 lg:sticky lg:top-28">
          
          {/* FAQs Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FDF1F4] border border-[#FBE3E9]">
            <span className="text-[#B8143C] text-[13.5px] font-[800] tracking-tight">
              FAQs
            </span>
          </div>

          {/* Ultra-Condensed Bold Headline */}
          <h2
            className="text-[44px] sm:text-[52px] lg:text-[58px] font-[900] text-[#141517] leading-[1.02] tracking-[-0.045em] max-w-[420px]"
            style={{
              fontStretch: "condensed",
              fontFamily: '"Plus Jakarta Sans", "Impact", "Arial Black", sans-serif',
            }}
          >
            Everything you need to know about TRS.
          </h2>

          {/* Pill Action Button */}
          <div className="pt-2">
            <button className="h-[52px] pl-6 pr-2 rounded-full bg-[#F3F5F8] hover:bg-[#EAEFF4] text-[#16171B] text-[14.5px] font-[600] flex items-center gap-4 transition shadow-sm group">
              <span className="tracking-[-0.01em]">Talk to our Team</span>
              <div className="w-[38px] h-[38px] rounded-full bg-[#1C1D20] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg
                  className="w-4 h-4 stroke-[2.4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>

        </div>

        {/* ================= RIGHT SIDE: ACCORDION LIST ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="w-full bg-[#FDF2F4] rounded-[28px] p-6 sm:p-7 transition-all duration-200"
              >
                {/* Accordion Question Row */}
                <div
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <h3 className="text-[18px] sm:text-[19px] font-[700] text-[#141518] tracking-[-0.02em]">
                    {item.question}
                  </h3>

                  {/* Circular Chevron Icon */}
                  <div
                    className={`w-11 h-11 rounded-full bg-white/80 border border-[#F6DCE2] flex items-center justify-center text-[#B8143C] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 stroke-[2.2]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Answer White Box on Expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <div className="pt-5">
                        <div className="w-full bg-white rounded-[22px] p-6 sm:p-7 border border-[#F3E2E6] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                          <p className="text-[#3D3E44] text-[14.5px] sm:text-[15px] font-[450] leading-[1.6] tracking-[-0.01em]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}