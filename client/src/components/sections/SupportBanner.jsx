import React from "react";

const useCaseCards = [
  {
    id: "startups",
    title: "Startups",
    desc: "Build your team without building a recruiting department.",
    bgColor: "bg-gradient-to-b from-[#EBF3FD] via-[#DBEAFE] to-[#BFDBFE]",
    borderColor: "border-[#D0E2FB]",
    renderVisual: () => (
      <svg viewBox="0 0 400 320" className="w-full h-full object-contain" fill="none">
        <ellipse cx="200" cy="270" rx="140" ry="35" fill="#93C5FD" fillOpacity="0.4" />
        <polygon points="110,190 270,170 300,210 140,230" fill="#FFFFFF" />
        <polygon points="140,230 300,210 300,225 140,245" fill="#E2E8F0" />
        <rect x="142" y="235" width="8" height="60" rx="2" fill="#CBD5E1" />
        <rect x="290" y="215" width="8" height="60" rx="2" fill="#CBD5E1" />
        <rect x="114" y="195" width="8" height="55" rx="2" fill="#94A3B8" />
        <polygon points="175,190 235,183 245,198 185,205" fill="#60A5FA" />
        <polygon points="185,205 245,198 240,165 180,172" fill="#2563EB" />
        <circle cx="190" cy="130" r="18" fill="#3B82F6" />
        <path d="M170 155c0-10 9-16 20-16s20 6 20 16l8 45h-56z" fill="#93C5FD" />
        <rect x="150" y="180" width="10" height="70" rx="3" fill="#64748B" />
        <rect x="150" y="150" width="10" height="40" rx="3" fill="#475569" />
      </svg>
    ),
  },
  {
    id: "small-biz",
    title: "Small Businesses",
    desc: "Get experienced recruiting support without adding full-time overhead.",
    bgColor: "bg-gradient-to-b from-[#FDF0F3] via-[#FCE4EB] to-[#FBCFE0]",
    borderColor: "border-[#FAD2DF]",
    renderVisual: () => (
      <svg viewBox="0 0 400 320" className="w-full h-full object-contain" fill="none">
        <ellipse cx="200" cy="270" rx="140" ry="35" fill="#F472B6" fillOpacity="0.25" />
        <g transform="translate(160, 80)">
          <polygon points="70,10 160,50 160,110 70,70" fill="#FCE7F3" />
          <polygon points="70,10 0,50 0,110 70,70" fill="#FBCFE8" />
          <polygon points="70,10 0,50 90,50 160,50" fill="#F472B6" fillOpacity="0.8" />
          <polygon points="20,70 50,85 50,110 20,95" fill="#FFFFFF" />
          <polygon points="90,85 140,105 140,110 90,95" fill="#FFFFFF" />
          <path d="M140 100 L180 50 L165 45 M180 50 L185 65" stroke="#EC4899" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <polygon points="120,210 240,195 260,225 140,240" fill="#FFFFFF" />
        <rect x="140" y="240" width="6" height="50" rx="2" fill="#E2E8F0" />
        <rect x="250" y="225" width="6" height="50" rx="2" fill="#CBD5E1" />
        <polygon points="180,205 220,200 226,215 186,220" fill="#EC4899" />
        <circle cx="160" cy="150" r="16" fill="#DB2777" />
        <path d="M145 170c0-8 7-14 15-14s15 6 15 14l6 50h-42z" fill="#F472B6" />
      </svg>
    ),
  },
  {
    id: "growing-teams",
    title: "Growing Teams",
    desc: "Scale your recruiting capacity as your hiring needs grow.",
    bgColor: "bg-gradient-to-b from-[#FEF7EC] via-[#FDEED3] to-[#FCDFA6]",
    borderColor: "border-[#F8DCAB]",
    renderVisual: () => (
      <svg viewBox="0 0 400 320" className="w-full h-full object-contain" fill="none">
        <ellipse cx="200" cy="275" rx="140" ry="35" fill="#FBBF24" fillOpacity="0.25" />
        <g transform="translate(60, 60)">
          <polygon points="40,190 70,175 100,190 70,205" fill="#FFFFFF" />
          <polygon points="40,190 40,210 70,225 70,205" fill="#FDE68A" />
          <polygon points="70,205 70,225 100,210 100,190" fill="#F59E0B" />
          <polygon points="80,150 110,135 140,150 110,165" fill="#FFFFFF" />
          <polygon points="80,150 80,180 110,195 110,165" fill="#FDE68A" />
          <polygon points="110,165 110,195 140,180 140,150" fill="#F59E0B" />
          <polygon points="120,110 150,95 180,110 150,125" fill="#FFFFFF" />
          <polygon points="120,110 120,150 150,165 150,125" fill="#FDE68A" />
          <polygon points="150,125 150,165 180,150 180,110" fill="#F59E0B" />
          <polygon points="160,70 190,55 220,70 190,85" fill="#FFFFFF" />
          <polygon points="160,70 160,120 190,135 190,85" fill="#FDE68A" />
          <polygon points="190,85 190,135 220,120 220,70" fill="#F59E0B" />
        </g>
        <g transform="translate(260, 130)">
          <circle cx="25" cy="20" r="14" fill="#92400E" />
          <path d="M12 40c0-10 6-16 13-16s13 6 13 16l4 55h-34z" fill="#D97706" />
          <rect x="14" y="95" width="8" height="50" rx="3" fill="#78350F" />
          <rect x="26" y="95" width="8" height="50" rx="3" fill="#78350F" />
        </g>
      </svg>
    ),
  },
  {
    id: "hr-teams",
    title: "HR Teams",
    desc: "Extend your team with experienced recruiters when you need them.",
    bgColor: "bg-gradient-to-b from-[#F3F0FB] via-[#E8E2F8] to-[#DDD4F4]",
    borderColor: "border-[#D6CAEF]",
    renderVisual: () => (
      <svg viewBox="0 0 400 320" className="w-full h-full object-contain" fill="none">
        <ellipse cx="200" cy="270" rx="140" ry="35" fill="#A855F7" fillOpacity="0.25" />
        <g transform="translate(140, 110)">
          <polygon points="80,10 170,40 170,120 80,90" fill="#8B5CF6" />
          <polygon points="80,90 170,120 130,145 40,115" fill="#E2E8F0" />
          <ellipse cx="120" cy="55" rx="14" ry="16" fill="#EDE9FE" />
          <line x1="105" y1="80" x2="145" y2="80" stroke="#DDD6FE" strokeWidth="3" />
        </g>
        <g transform="translate(90, 140)">
          <circle cx="20" cy="25" r="12" fill="#6B21A8" />
          <path d="M10 40c0-8 5-13 10-13s10 5 10 13l4 40h-28z" fill="#A855F7" />
          <rect x="12" y="80" width="6" height="40" rx="2" fill="#581C87" />
          <rect x="22" y="80" width="6" height="40" rx="2" fill="#581C87" />
        </g>
        <g transform="translate(270, 150)">
          <circle cx="20" cy="25" r="12" fill="#475569" />
          <path d="M10 40c0-8 5-13 10-13s10 5 10 13l4 40h-28z" fill="#94A3B8" />
          <rect x="12" y="80" width="6" height="35" rx="2" fill="#1E293B" />
          <rect x="22" y="80" width="6" height="35" rx="2" fill="#1E293B" />
        </g>
      </svg>
    ),
  },
  {
    id: "flexible-hiring",
    title: "Flexible Hiring",
    desc: "From contract roles to contract-to-hire, hire the way your business needs.",
    bgColor: "bg-gradient-to-b from-[#EFF9F3] via-[#DCF3E4] to-[#C9ECD5]",
    borderColor: "border-[#BFE5CD]",
    renderVisual: () => (
      <svg viewBox="0 0 400 320" className="w-full h-full object-contain" fill="none">
        <ellipse cx="200" cy="275" rx="140" ry="35" fill="#10B981" fillOpacity="0.25" />
        <g transform="translate(150, 100)">
          <polygon points="50,10 110,35 110,135 50,110" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="2" />
          <line x1="65" y1="40" x2="95" y2="52" stroke="#6EE7B7" strokeWidth="2.5" />
          <line x1="65" y1="55" x2="95" y2="67" stroke="#D1FAE5" strokeWidth="2.5" />
          <path d="M70 95 Q 80 85, 90 95 T 100 95" stroke="#059669" strokeWidth="2" fill="none" />
        </g>
        <g transform="translate(80, 120)">
          <circle cx="30" cy="30" r="15" fill="#047857" />
          <path d="M18 50c0-12 6-18 12-18s12 6 12 18l5 50h-34z" fill="#A7F3D0" />
          <rect x="22" y="100" width="8" height="50" rx="3" fill="#065F46" />
          <rect x="32" y="100" width="8" height="50" rx="3" fill="#065F46" />
        </g>
        <g transform="translate(260, 125)">
          <circle cx="30" cy="30" r="15" fill="#065F46" />
          <path d="M18 50c0-12 6-18 12-18s12 6 12 18l5 50h-34z" fill="#34D399" />
          <rect x="22" y="100" width="8" height="45" rx="3" fill="#064E3B" />
          <rect x="32" y="100" width="8" height="45" rx="3" fill="#064E3B" />
        </g>
      </svg>
    ),
  },
];

export default function SupportBanner() {
  return (
    <section className="w-full relative select-none font-sans overflow-hidden bg-[#2C1810]">
      {/* Background Image with Warm Amber Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Recruiting Support Team"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B1810]/95 via-[#3B2215]/85 to-[#2B1810]/75 z-10" />
      </div>

      {/* Top Rounded Floor Curve from Dashboard */}
      <div className="absolute top-0 left-0 right-0 h-10 sm:h-14 bg-white rounded-b-[40px] sm:rounded-b-[56px] z-20 pointer-events-none" />

      {/* Headline & CTA (Constrained to 1440px container) */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 pb-8">
        <div className="max-w-[620px] flex flex-col space-y-6">
          <h2 className="text-[40px] sm:text-[54px] lg:text-[64px] font-[900] text-white tracking-[-0.04em] leading-[1.06]">
            Recruiting support that <br />
            fits the way you hire.
          </h2>

          <p className="text-white/80 text-[15.5px] sm:text-[17px] font-[450] leading-[1.6] max-w-[500px]">
            Whether You're Making Your First Hire Or Scaling An Entire Team, TRS Gives You The Recruiting Support To Keep Moving.
          </p>

          <div className="pt-2">
            <button className="h-[48px] px-8 rounded-full bg-white text-[#141518] text-[15px] font-[700] hover:bg-[#F4F4F6] transition shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* ================= 4TH CARD (HR TEAMS) EXACT 70% VISIBLE & 30% PEEK EFFECT ================= */}
      <div className="relative z-20 w-full pb-20 pt-4 overflow-hidden">
        <div
          className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 1440px) / 2 + 1.5rem))",
            paddingRight: "0px",
          }}
        >
          {/* Card List with Dynamic Width Formula: 3 full cards + exactly 0.7 (70%) of 4th card */}
          <div className="flex items-stretch gap-5 w-max">
            {useCaseCards.map((card) => (
              <div
                key={card.id}
                style={{
                  width: "clamp(290px, calc((100vw - max(1.5rem, calc((100vw - 1440px)/2 + 1.5rem)) - 60px) / 3.7), 380px)",
                }}
                className={`shrink-0 rounded-[30px] ${card.bgColor} border-[1.5px] ${card.borderColor} p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-transform duration-300`}
              >
                {/* Title & Description */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-[21px] sm:text-[23px] font-[900] text-[#141518] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] font-[450] text-[#475569] leading-snug">
                    {card.desc}
                  </p>
                </div>

                {/* 3D Visual Illustration */}
                <div className="w-full h-[210px] sm:h-[235px] flex items-center justify-center mt-auto">
                  {card.renderVisual()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}