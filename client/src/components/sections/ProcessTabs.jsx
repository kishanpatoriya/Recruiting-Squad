import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabsData = [
  { id: "find", label: "Find Candidates" },
  { id: "screen", label: "Screen & Qualify" },
  { id: "hire", label: "Move To Hire" },
];

export default function ProcessTabs() {
  const [activeTab, setActiveTab] = useState("screen");

  // 5 seconds automatic smooth transition loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "find") return "screen";
        if (prev === "screen") return "hire";
        return "find";
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Theme styling based on active tab
  const getTheme = () => {
    if (activeTab === "find") {
      return {
        cardBg: "bg-[#EBF3FD]",
        borderColor: "border-[#D5E6FA]",
        activeTabBg: "bg-[#EBF3FD]",
        inactiveTabBg: "bg-[#F3F7FD]",
        activeTextColor: "text-[#1E293B]",
        headlineColor: "text-[#141518]",
      };
    }
    if (activeTab === "hire") {
      return {
        cardBg: "bg-[#FCF6EE]",
        borderColor: "border-[#F4E3CD]",
        activeTabBg: "bg-[#FCF6EE]",
        inactiveTabBg: "bg-[#FDF9F5]",
        activeTextColor: "text-[#1E293B]",
        headlineColor: "text-[#141518]",
      };
    }
    // Default: screen (mint teal)
    return {
      cardBg: "bg-[#E4F5F1]",
      borderColor: "border-[#CDEAE3]",
      activeTabBg: "bg-[#E4F5F1]",
      inactiveTabBg: "bg-[#F0F8F6]",
      activeTextColor: "text-[#1E293B]",
      headlineColor: "text-[#141518]",
    };
  };

  const theme = getTheme();

  return (
    <section className="w-full bg-[#FFFBFB] py-10 px-4 xl:px-10 select-none font-sans">
      <div className="max-w-[1440px] mx-auto relative pt-12">
        
        {/* ================= 3 TABS EXACT CENTER ME ALIGNED ================= */}
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 z-20 flex items-end gap-2.5">
          {tabsData.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-3 rounded-t-[20px] text-[15px] font-[700] transition-colors duration-200 outline-none whitespace-nowrap ${
                  isActive
                    ? `${theme.activeTabBg} text-[#1E293B] border-t-[2px] border-x-[2px] ${theme.borderColor} relative z-30 -mb-[2px] pb-[14px]`
                    : `bg-[#F4F7F9] hover:bg-[#EAEFF4] text-[#2C323D] border-t-[2px] border-x-[2px] border-transparent opacity-95`
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ================= MAIN CONTAINER ================= */}
        <div className={`w-full ${theme.cardBg} rounded-[36px] border-[2px] ${theme.borderColor} p-8 lg:p-12 pb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-colors duration-500 relative z-10`}>
          
          <AnimatePresence mode="wait">
            
            {/* ==================== TAB 1: FIND CANDIDATES ==================== */}
            {activeTab === "find" && (
              <motion.div
                key="find"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pr-0 lg:pr-6">
                  <div className="space-y-6">
                    {/* Donut Icon */}
                    <div className="w-14 h-14">
                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                        <ellipse cx="50" cy="85" rx="30" ry="8" fill="#BACFE8" fillOpacity="0.6" />
                        <path d="M50 20 A30 30 0 0 1 80 50 L65 50 A15 15 0 0 0 50 35 Z" fill="#6366F1" />
                        <path d="M80 50 A30 30 0 0 1 50 80 L50 65 A15 15 0 0 0 65 50 Z" fill="#FBBF24" />
                        <path d="M50 80 A30 30 0 0 1 20 50 L35 50 A15 15 0 0 0 50 65 Z" fill="#312E81" />
                        <path d="M20 50 A30 30 0 0 1 50 20 L50 35 A15 15 0 0 0 35 50 Z" fill="#4338CA" />
                      </svg>
                    </div>

                    <h2 className="text-[38px] sm:text-[46px] xl:text-[52px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.08]">
                      Find the right people, <br />
                      without the endless search.
                    </h2>

                    <p className="text-[#5F6775] text-[15.5px] sm:text-[16.5px] font-[450] leading-[1.6] max-w-[480px]">
                      Your Dedicated Recruiter Sources Qualified Candidates Across The Right Channels, So You Don’t Have To Spend Hours Searching Through Resumes.
                    </p>

                    <div>
                      <button className="h-[46px] px-7 rounded-[18px] bg-white text-[#1E293B] text-[14.5px] font-[700] border border-[#CFE0F5] hover:bg-[#F8FAFC] transition shadow-sm">
                        See How It Works
                      </button>
                    </div>
                  </div>

                  {/* 3 Bottom Badges */}
                  <div className="pt-8 mt-6 flex flex-wrap items-center gap-6 text-[#475569] text-[13.5px] font-[600]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Location Matched</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span>Experience Matched</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>Skills Matched</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-6 flex">
                  <div className="w-full min-h-[500px] xl:min-h-[550px] rounded-[30px] bg-gradient-to-br from-[#D9EAFE] via-[#C9DFFA] to-[#BACFE8] border border-[#C5DAF5] relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                    <svg viewBox="0 0 800 680" className="w-full h-auto max-w-[620px]" fill="none">
                      <ellipse cx="400" cy="460" rx="300" ry="120" fill="#93C5FD" fillOpacity="0.4" />
                      <g opacity="0.85">
                        <rect x="250" y="220" width="46" height="74" rx="10" fill="#FFFFFF" fillOpacity="0.65" stroke="#FFFFFF" strokeWidth="1.2" />
                        <circle cx="273" cy="242" r="10" fill="#475569" />
                        <path d="M260 274c0-8 6-12 13-12s13 4 13 12" fill="#64748B" />
                      </g>
                      <g opacity="0.85">
                        <rect x="335" y="195" width="46" height="74" rx="10" fill="#FFFFFF" fillOpacity="0.65" stroke="#FFFFFF" strokeWidth="1.2" />
                        <circle cx="358" cy="217" r="10" fill="#334155" />
                        <path d="M345 250c0-8 6-12 13-12s13 4 13 12" fill="#1E293B" />
                      </g>
                      <path d="M170 320 C 170 200, 630 200, 630 320" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" opacity="0.3" />
                      <g>
                        <path d="M260 360 C 260 300, 540 300, 540 360 L 540 450 C 540 510, 260 510, 260 450 Z" fill="#FFFFFF" fillOpacity="0.9" stroke="#FFFFFF" strokeWidth="2" />
                        <rect x="340" y="380" width="120" height="12" rx="6" fill="#93C5FD" fillOpacity="0.4" />
                        <circle cx="430" cy="386" r="3.5" fill="#3B82F6" />
                        <rect x="290" y="270" width="90" height="42" rx="8" fill="#FFFFFF" fillOpacity="0.75" stroke="#FFFFFF" />
                        <circle cx="430" cy="272" r="14" fill="#1E293B" />
                        <path d="M400 320c0-20 12-28 30-28s30 8 30 28v50h-60z" fill="#334155" />
                        <path d="M402 305 L350 300" stroke="#334155" strokeWidth="9" strokeLinecap="round" />
                      </g>
                      <g>
                        <ellipse cx="585" cy="240" rx="36" ry="46" fill="#38BDF8" fillOpacity="0.4" />
                        <rect x="560" y="200" width="52" height="84" rx="12" fill="#FFFFFF" fillOpacity="0.85" stroke="#38BDF8" strokeWidth="2" />
                        <circle cx="586" cy="225" r="13" fill="#0F172A" />
                        <path d="M570 268c0-11 7-16 16-16s16 5 16 16" fill="#38BDF8" />
                      </g>
                      <g>
                        <ellipse cx="360" cy="485" rx="38" ry="48" fill="#38BDF8" fillOpacity="0.4" />
                        <rect x="332" y="440" width="56" height="96" rx="14" fill="#FFFFFF" fillOpacity="0.9" stroke="#38BDF8" strokeWidth="2.5" />
                        <circle cx="360" cy="470" r="14" fill="#0F172A" />
                        <path d="M342 522c0-12 8-18 18-18s18 6 18 18" fill="#60A5FA" />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ==================== TAB 2: SCREEN & QUALIFY ==================== */}
            {activeTab === "screen" && (
              <motion.div
                key="screen"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pr-0 lg:pr-6">
                  <div className="space-y-6">
                    {/* Hand Checklist Icon */}
                    <div className="w-14 h-14 relative shrink-0">
                      <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md">
                        <rect x="12" y="10" width="34" height="44" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                        <line x1="18" y1="20" x2="32" y2="20" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="18" y1="26" x2="36" y2="26" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="18" y1="32" x2="28" y2="32" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                        <path d="M30 42c4-6 12-4 15 2l5 8-12 6-5-6-3-10z" fill="#F87171" />
                        <path d="M42 46l8 12c1 2 4 1 5-1l2-4c1-2 0-4-2-5l-8-6" fill="#FCA5A5" />
                        <rect x="23" y="32" width="6" height="18" rx="2" transform="rotate(-35 23 32)" fill="#FB7185" />
                      </svg>
                    </div>

                    <h2 className="text-[38px] sm:text-[46px] xl:text-[52px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.08]">
                      Less time screening. <br />
                      More time interviewing.
                    </h2>

                    <p className="text-[#556964] text-[15.5px] sm:text-[16.5px] font-[450] leading-[1.6] max-w-[480px]">
                      We Review, Qualify, And Organize Candidates Against Your Requirements—So You Only See People Worth Talking To.
                    </p>

                    <div>
                      <button className="h-[46px] px-7 rounded-[18px] bg-white text-[#134E48] text-[14.5px] font-[700] border border-[#BEE7DE] hover:bg-[#F2FAF8] transition shadow-sm">
                        Meet Your Recruiter
                      </button>
                    </div>
                  </div>

                  {/* 3 Bottom Badges */}
                  <div className="pt-8 mt-6 flex flex-wrap items-center gap-6 text-[#134E48] text-[13.5px] font-[600]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Required Skills</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Salary Aligned</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Recruiter Screened</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-6 flex">
                  <div className="w-full min-h-[500px] xl:min-h-[560px] rounded-[30px] bg-gradient-to-br from-[#CEEFE7] via-[#BFE8DF] to-[#A9DDD1] border border-[#A4D8CC] relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                    <svg viewBox="0 0 800 680" className="w-full h-auto max-w-[640px]" fill="none">
                      <defs>
                        <radialGradient id="mintHalo" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.85" />
                          <stop offset="60%" stopColor="#14B8A6" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <path d="M100 520 L 720 280 L 750 320 L 120 570 Z" fill="#99CFC2" fillOpacity="0.45" />
                      
                      <g transform="matrix(0.88 -0.32 0 0.98 90 200)">
                        <ellipse cx="530" cy="310" rx="90" ry="110" fill="url(#mintHalo)" />
                        <rect x="470" y="225" width="105" height="160" rx="18" fill="#FFFFFF" fillOpacity="0.95" stroke="#2DD4BF" strokeWidth="2.5" />
                        <circle cx="500" cy="265" r="16" fill="#0F766E" />
                        <circle cx="550" cy="265" r="10" fill="#14B8A6" fillOpacity="0.15" />
                        <path d="M546 265l3 3 6-6" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="490" y1="305" x2="555" y2="305" stroke="#0D9488" strokeWidth="4.5" strokeLinecap="round" />
                        <line x1="490" y1="322" x2="540" y2="322" stroke="#99F6E4" strokeWidth="4" strokeLinecap="round" />
                        <line x1="490" y1="338" x2="550" y2="338" stroke="#CCFBF1" strokeWidth="4" strokeLinecap="round" />
                      </g>

                      <g transform="matrix(0.866 -0.35 0 0.95 240 120)">
                        <rect x="480" y="240" width="85" height="130" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                        <circle cx="505" cy="270" r="12" fill="#0D9488" />
                      </g>
                      <g transform="matrix(0.866 -0.35 0 0.95 160 170)">
                        <rect x="480" y="240" width="85" height="130" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                        <circle cx="505" cy="270" r="12" fill="#475569" />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ==================== TAB 3: MOVE TO HIRE ==================== */}
            {activeTab === "hire" && (
              <motion.div
                key="hire"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pr-0 lg:pr-6">
                  <div className="space-y-6">
                    {/* Notebook Icon */}
                    <div className="w-14 h-14 relative shrink-0">
                      <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md">
                        <rect x="14" y="10" width="40" height="46" rx="8" fill="#FDEEE0" stroke="#F6D5B8" strokeWidth="2" />
                        <circle cx="34" cy="26" r="6" fill="#D97706" />
                        <path d="M26 40c0-5 3.5-8 8-8s8 3 8 8" fill="#D97706" />
                        <rect x="10" y="16" width="8" height="3" rx="1.5" fill="#B45309" />
                        <rect x="10" y="24" width="8" height="3" rx="1.5" fill="#B45309" />
                      </svg>
                    </div>

                    <h2 className="text-[38px] sm:text-[46px] xl:text-[52px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.08]">
                      Your shortlist is ready. <br />
                      Now make the hire.
                    </h2>

                    <p className="text-[#78614E] text-[15.5px] sm:text-[16.5px] font-[450] leading-[1.6] max-w-[480px]">
                      Review Your Qualified Candidates, Schedule Interviews, And Keep The Entire Hiring Pipeline Moving From One Simple Dashboard.
                    </p>

                    <div>
                      <button className="h-[46px] px-7 rounded-[18px] bg-white text-[#9A3412] text-[14.5px] font-[700] border border-[#F4D1B5] hover:bg-[#FDF9F5] transition shadow-sm">
                        Get Instant Pricing
                      </button>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 flex items-center gap-2 text-[#9A3412] text-[13.5px] font-[600]">
                    <svg className="w-4 h-4 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Interview Scheduled</span>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-6 flex">
                  <div className="w-full min-h-[500px] xl:min-h-[560px] rounded-[30px] bg-gradient-to-br from-[#FDEEDC] via-[#F9E2C8] to-[#F2D4B3] border border-[#ECD1B4] relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                    <svg viewBox="0 0 800 680" className="w-full h-auto max-w-[640px]" fill="none">
                      <path
                        d="M 120 540 C 260 520, 360 480, 520 530 C 620 560, 720 570, 740 520 C 760 470, 680 430, 560 400 C 420 370, 240 420, 120 540 Z"
                        fill="#FFFFFF"
                        fillOpacity="0.8"
                      />
                      <g transform="translate(620, 480)">
                        <rect x="0" y="0" width="70" height="26" rx="8" fill="#1C1917" />
                        <path d="M12 13l3 3 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                        <text x="26" y="17" fill="#FFFFFF" fontSize="11" fontWeight="700">passed</text>
                      </g>
                      <g transform="translate(480, 140)">
                        <circle cx="120" cy="60" r="16" fill="#78350F" />
                        <path d="M96 95c0-15 10-22 24-22s24 7 24 22l6 75h-60z" fill="#C29B78" />
                        <rect x="100" y="165" width="16" height="110" rx="6" fill="#9A7B5F" transform="rotate(10 100 165)" />
                        <rect x="124" y="165" width="16" height="105" rx="6" fill="#9A7B5F" transform="rotate(-15 124 165)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}