import React from "react";

const stats = [
  {
    id: 1,
    value: "21",
    desc: "To build an interview-ready candidate pipeline",
  },
  {
    id: 2,
    value: "24 Hrs",
    desc: "Sprint launch after kickoff is completed.",
  },
  {
    id: 3,
    value: "$0",
    desc: "Placement fees. No percentage-of-salary placement fees",
  },
  {
    id: 4,
    value: "100%",
    desc: "Cost visibility. Your estimate is your guaranteed maximum.",
  },
];

export default function NumbersSection() {
  return (
    <section className="w-full bg-white pt-20 pb-20 px-4 select-none font-sans relative overflow-hidden">
      
      {/* Background Soft Studio Ambient Light Beam (exact shape as reference) */}
      <div 
        className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[480px] pointer-events-none -z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(254, 237, 222, 0.85) 0%, rgba(255, 246, 238, 0.4) 55%, rgba(255, 255, 255, 0) 80%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto flex flex-col items-center relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FCEEE2] border border-[#F6DEC9] mb-5">
            <span className="text-[#523A28] text-[13px] font-[700] tracking-tight">
              TRS by the Numbers
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-[900] text-[#141518] tracking-[-0.035em] leading-[1.08] max-w-[850px]">
            Recruiting, measured by what matters.
          </h2>
        </div>

        {/* ================= COMPACT 4 ARCH PILLARS ================= */}
        {/* max-w-[940px] ensures exact slim proportions matching your image */}
        <div className="w-full max-w-[940px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 justify-center">
          {stats.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[215px] mx-auto bg-gradient-to-b from-[#FDF5ED] via-[#FCEEE1] to-[#FBE3CD] rounded-t-full border border-[#F4DCB0]/70 pt-5 pb-8 px-3 sm:px-4 flex flex-col items-center text-center shadow-[0_6px_20px_rgba(240,215,190,0.35)] min-h-[350px] sm:min-h-[370px]"
            >
              {/* Inner Circular Debossed Number Medallion */}
              <div className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-full bg-gradient-to-b from-[#FAF2E9] to-[#FCEFE2] border border-[#ECD3BE] flex items-center justify-center shadow-[inset_0_2px_6px_rgba(215,185,158,0.22)] mb-6 shrink-0">
                <span className="text-[32px] sm:text-[36px] font-[800] text-[#7A583E] tracking-tight">
                  {item.value}
                </span>
              </div>

              {/* Description Text */}
              <p className="text-[#5E4A3B] text-[12.5px] sm:text-[13px] font-[500] leading-[1.4] max-w-[170px] mt-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}