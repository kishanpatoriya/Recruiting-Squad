import React from "react";

export default function OrganizedHeader() {
  return (
    <section className="w-full bg-white pt-24 pb-14 px-6 lg:px-12 xl:px-16 select-none font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-[760px] flex flex-col space-y-5">
          {/* Main Bold Headline */}
          <h2 className="text-[44px] sm:text-[56px] xl:text-[68px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.06]">
            Recruiting work, <br />
            organized around you.
          </h2>

          {/* Subtitle */}
          <p className="text-[#646470] text-[15.5px] sm:text-[17px] font-[450] leading-[1.6] max-w-[620px] tracking-[-0.01em]">
            Launch A Focused Hiring Sprint And Get A Dedicated Recruiter, Qualified Candidates, And Complete Visibility Through Your TRS Dashboard.
          </p>
        </div>

        {/* ================= RIGHT ACTION LINK ================= */}
        <div className="pb-2 shrink-0">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 text-[16px] font-[700] text-[#B8143C] hover:opacity-85 transition-opacity"
          >
            <span>Get Instant Pricing Estimate</span>
            <svg
              className="w-4 h-4 stroke-[2.4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="13 5 20 12 13 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}