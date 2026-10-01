import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Brand logos with exact shapes and sizing
const brandLogosExact = [
  {
    name: "Emblem",
    icon: (
      <div className="flex items-center gap-[3px] h-5 shrink-0">
        <div className="w-[3.5px] h-[14px] bg-black rounded-full" />
        <div className="w-[3.5px] h-[20px] bg-black rounded-full" />
        <div className="w-[3.5px] h-[12px] bg-black rounded-full" />
        <div className="w-[3.5px] h-[18px] bg-black rounded-full" />
      </div>
    ),
  },
  {
    name: "Optimal",
    icon: (
      <svg className="w-5 h-5 text-black shrink-0 -rotate-12" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="2 3 22 12 2 21 5 12 2 3" />
      </svg>
    ),
  },
  {
    name: "Grapho",
    icon: (
      <svg className="w-6 h-6 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    name: "Vectra",
    icon: (
      <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="6" r="4" fill="#1C1C1E" />
        <circle cx="6" cy="17" r="4" fill="#6B6E77" />
        <circle cx="18" cy="17" r="4" fill="#1C1C1E" />
      </svg>
    ),
  },
  {
    name: "Iconic",
    icon: (
      <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 2.5L9.5 12 12 16.5 14.5 12 12 7.5z" />
      </svg>
    ),
  },
];

// 5 exact vector characters
const characters = [
  {
    id: 0,
    cx: 125,
    render: (isActive) => (
      <g>
        <path d="M104 280C104 260 148 260 148 280C153 288 158 300 154 312C146 316 144 318 140 322C136 310 134 300 134 300L118 300C118 300 116 310 112 322C108 318 106 316 98 312C94 300 99 288 104 280Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <path d="M116 286C116 280 136 280 136 286C136 300 133 312 126 312C119 312 116 300 116 286Z" fill="#FFFFFF" />
        <rect x="122" y="306" width="8" height="14" fill="#FFFFFF" />
        <path d="M105 320C114 316 138 316 147 320L153 392C153 400 99 400 99 392L105 320Z" fill={isActive ? "#DF3E65" : "#A6586C"} />
        <polygon points="121,320 131,320 126,342" fill="#FFFFFF" />
        <path d="M106 392L146 392L143 488L109 488Z" fill={isActive ? "#8C1B35" : "#5F3C47"} />
        <path d="M105 324L123 398L126 435L123 435L114 392L101 330Z" fill={isActive ? "#F391A8" : "#D38C9E"} />
        <path d="M147 324L129 398L126 435L129 435L138 392L151 330Z" fill={isActive ? "#F391A8" : "#D38C9E"} />
        <rect x="118" y="488" width="7" height="82" rx="3" fill={isActive ? "#75182D" : "#5F3C47"} />
        <rect x="127" y="488" width="7" height="82" rx="3" fill={isActive ? "#75182D" : "#5F3C47"} />
        <polygon points="112,570 125,570 125,576 112,576" fill="#4A343B" />
        <polygon points="127,570 140,570 140,576 127,576" fill="#4A343B" />
      </g>
    ),
  },
  {
    id: 1,
    cx: 260,
    render: (isActive) => (
      <g>
        <path d="M239 266C239 252 281 252 281 266C281 270 279 286 276 292C271 292 269 285 260 285C251 285 249 292 244 292C241 286 239 270 239 266Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <path d="M248 272C248 266 272 266 272 272C272 290 267 304 260 304C253 304 248 290 248 272Z" fill="#FFFFFF" />
        <polygon points="254,308 266,308 260,322" fill="#FFFFFF" />
        <path d="M233 316C243 310 277 310 287 316L290 410L230 410Z" fill={isActive ? "#B8143C" : "#7A4A56"} />
        <polygon points="253,312 267,312 260,335" fill={isActive ? "#75182D" : "#5F3C47"} />
        <path d="M233 322L243 388L277 388L287 322L277 342L270 376L250 376L243 342Z" fill={isActive ? "#DF3E65" : "#8A5462"} />
        <path d="M236 410L284 410L280 570L265 570L262 458L258 458L255 570L240 570Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <rect x="236" y="568" width="20" height="9" rx="3" fill="#4A343B" />
        <rect x="264" y="568" width="20" height="9" rx="3" fill="#4A343B" />
      </g>
    ),
  },
  {
    id: 2,
    cx: 400,
    render: (isActive) => (
      <g>
        <path d="M375 220C375 198 425 198 425 220C434 235 438 268 434 290C424 296 418 290 415 284C410 270 405 258 400 258C395 258 390 270 385 284C382 290 376 296 366 290C362 268 366 235 375 220Z" fill={isActive ? "#660A1F" : "#55081A"} />
        <path d="M386 226C386 218 414 218 414 226C414 246 409 264 400 264C391 264 386 246 386 226Z" fill="#FFFFFF" />
        <rect x="395" y="258" width="10" height="16" fill="#FFFFFF" />
        <path d="M372 278C384 272 416 272 428 278L435 370C435 385 365 385 365 370L372 278Z" fill={isActive ? "#C2153F" : "#991D39"} />
        <rect x="382" y="306" width="36" height="46" rx="4" fill="#FCEEF1" stroke="#DF3E65" strokeWidth="2" />
        <path d="M372 284L388 344L412 344L428 284L420 310L405 348L395 348L380 310Z" fill={isActive ? "#DF3E65" : "#AC2B49"} />
        <path d="M371 370C365 410 368 460 376 520L424 520C432 460 435 410 429 370Z" fill={isActive ? "#E84F76" : "#A63553"} />
        <rect x="388" y="520" width="9.5" height="98" rx="4" fill={isActive ? "#8C0E2A" : "#660A1F"} />
        <rect x="403" y="520" width="9.5" height="98" rx="4" fill={isActive ? "#8C0E2A" : "#660A1F"} />
        <path d="M378 616L400 616L397 626H378Z" fill="#55081A" />
        <path d="M403 616L425 616L422 626H403Z" fill="#55081A" />
      </g>
    ),
  },
  {
    id: 3,
    cx: 540,
    render: (isActive) => (
      <g>
        <path d="M521 280C521 260 559 260 559 280C563 300 563 322 555 322C547 305 543 302 540 302C537 302 533 305 525 322C517 322 517 300 521 280Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <path d="M529 286C529 280 551 280 551 286C551 302 547 314 540 314C533 314 529 302 529 286Z" fill="#FFFFFF" />
        <polygon points="535,314 545,314 540,324" fill="#FFFFFF" />
        <path d="M521 322C529 318 551 318 559 322L564 400L516 400Z" fill={isActive ? "#DF3E65" : "#7A4A56"} />
        <path d="M519 400L561 400L557 492L523 492Z" fill={isActive ? "#8C1B35" : "#5F3C47"} />
        <path d="M521 326L537 400L540 436L537 436L528 392L518 332Z" fill={isActive ? "#F391A8" : "#D38C9E"} />
        <path d="M559 326L543 400L540 436L543 436L552 392L562 332Z" fill={isActive ? "#F391A8" : "#D38C9E"} />
        <rect x="533" y="492" width="7" height="78" rx="3" fill={isActive ? "#75182D" : "#5F3C47"} />
        <rect x="542" y="492" width="7" height="78" rx="3" fill={isActive ? "#75182D" : "#5F3C47"} />
        <polygon points="527,568 539,568 539,574 527,574" fill="#4A343B" />
        <polygon points="542,568 554,568 554,574 542,574" fill="#4A343B" />
      </g>
    ),
  },
  {
    id: 4,
    cx: 675,
    render: (isActive) => (
      <g>
        <path d="M653 266C653 250 695 250 695 266C695 270 693 285 690 292C685 292 683 285 675 285C667 285 665 292 660 292C657 285 653 270 653 266Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <path d="M662 272C662 266 688 266 688 272C688 290 683 304 675 304C667 304 662 290 662 272Z" fill="#FFFFFF" />
        <polygon points="670,308 680,308 675,320" fill="#FFFFFF" />
        <path d="M647 316C657 310 693 310 703 316L707 410L643 410Z" fill={isActive ? "#B8143C" : "#7A4A56"} />
        <path d="M647 322L657 388L693 388L703 322L693 342L685 376L665 376L657 342Z" fill={isActive ? "#DF3E65" : "#8A5462"} />
        <path d="M650 410L700 410L696 570L681 570L678 458L672 458L669 570L654 570Z" fill={isActive ? "#75182D" : "#5F3C47"} />
        <rect x="651" y="568" width="20" height="9" rx="3" fill="#4A343B" />
        <rect x="679" y="568" width="20" height="9" rx="3" fill="#4A343B" />
      </g>
    ),
  },
];

export default function Hero() {
  const [activePerson, setActivePerson] = useState(2);

  // Sequential light on loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePerson((prev) => (prev + 1) % characters.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-2 pb-6 px-4 xl:px-10 select-none font-sans">
      {/* Outer Big Rounded Frame */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[36px] border-[2.5px] border-[#F6DEE3] pt-6 pb-0 px-6 lg:px-10 shadow-[0_4px_30px_rgba(251,236,239,0.4)] relative flex flex-col justify-between overflow-hidden">
        
        {/* Upper Main Section: items-stretch thi banne side exact same height thashe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pb-10">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-[#FDF0F3] border border-[#FBE0E6] -mt-1">
              <span className="text-[#B8143C] text-[13.5px] font-[600] tracking-[-0.01em]">
                without the recruiting headache...
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[44px] sm:text-[58px] xl:text-[68px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.04]">
              Hire Great People. <br />
              We’ll Handle the Rest.
            </h1>

            {/* Sub-headline */}
            <p className="text-[#6F7078] text-[15.5px] sm:text-[16.5px] font-[400] leading-[1.55] max-w-[490px] tracking-[-0.01em]">
              We Find, Screen, And Deliver Interview-Ready Candidates While You Stay Focused On Growing Your Business.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 pt-1">
              <button className="h-[48px] px-8 rounded-[16px] bg-[#18191B] text-white text-[15px] font-[700] hover:bg-black transition shadow-sm">
                Get Started
              </button>
              <a
                href="#estimate"
                className="flex items-center gap-2 text-[15px] font-[700] text-[#B8143C] hover:opacity-85 transition"
              >
                <span>Get Estimate</span>
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

            {/* Marquee Logos */}
            <div className="pt-2 w-full max-w-[560px]">
              <div className="relative flex items-center overflow-hidden py-1 border-l-2 border-r-2 border-[#F2BDC8] px-3">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex items-center gap-12 whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 6, repeat: Infinity }}
                >
                  {[...brandLogosExact, ...brandLogosExact, ...brandLogosExact].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-[#141518] font-[800] text-[17px] tracking-tight shrink-0 select-none hover:text-[#B8143C] transition-colors"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT GRAPHIC: HEIGHT EXPANDED ================= */}
          <div className="lg:col-span-6 flex">
            <div className="w-full h-full min-h-[660px] rounded-[30px] bg-gradient-to-b from-[#FDF2F4] via-[#FDF5F7] to-[#FCEEF1] border border-[#FBE3E8] relative overflow-hidden flex flex-col justify-between items-center p-6 pb-6">
              
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="140" fill="none" stroke="#B8143C" strokeWidth="1.2" />
                <circle cx="250" cy="250" r="200" fill="none" stroke="#B8143C" strokeWidth="1.2" />
                <circle cx="250" cy="250" r="260" fill="none" stroke="#B8143C" strokeWidth="1.2" />
              </svg>

              {/* Character Illustration */}
              <div className="relative z-10 w-full flex items-center justify-center my-auto">
                <svg viewBox="0 0 800 680" className="w-full h-auto max-w-[620px]" fill="none">
                  <defs>
                    <linearGradient id="verticalSpotlight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#BE123C" stopOpacity="0.95" />
                      <stop offset="30%" stopColor="#D93B60" stopOpacity="0.75" />
                      <stop offset="65%" stopColor="#EB728E" stopOpacity="0.4" />
                      <stop offset="98%" stopColor="#FCEEF1" stopOpacity="0.05" />
                    </linearGradient>

                    <filter id="spotlightGrain">
                      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
                      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.16 0" />
                      <feComposite in2="SourceGraphic" in="gl" operator="in" />
                    </filter>
                  </defs>

                  {/* Individual Vertical Beams */}
                  {characters.map((person, idx) => {
                    const isLightOn = activePerson === idx;
                    const topWidth = idx === 2 ? 32 : 24;
                    const bottomWidth = idx === 2 ? 82 : 68;
                    const bottomY = idx === 2 ? 632 : 586;

                    return (
                      <g key={`light-${person.id}`}>
                        <AnimatePresence>
                          {isLightOn && (
                            <motion.g
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <polygon
                                points={`${person.cx - topWidth},0 ${person.cx + topWidth},0 ${person.cx + bottomWidth},${bottomY} ${person.cx - bottomWidth},${bottomY}`}
                                fill="url(#verticalSpotlight)"
                              />
                              <polygon
                                points={`${person.cx - topWidth},0 ${person.cx + topWidth},0 ${person.cx + bottomWidth},${bottomY} ${person.cx - bottomWidth},${bottomY}`}
                                fill="#FFFFFF"
                                filter="url(#spotlightGrain)"
                                opacity="0.3"
                              />
                              <ellipse
                                cx={person.cx}
                                cy={bottomY}
                                rx={bottomWidth - 4}
                                ry={idx === 2 ? 18 : 14}
                                fill="#BE123C"
                                fillOpacity="0.32"
                              />
                            </motion.g>
                          )}
                        </AnimatePresence>
                      </g>
                    );
                  })}

                  {/* 5 Characters */}
                  {characters.map((person, idx) => {
                    const isLightOn = activePerson === idx;

                    return (
                      <g
                        key={`char-${person.id}`}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setActivePerson(idx)}
                        opacity={isLightOn ? 1 : 0.55}
                      >
                        <ellipse
                          cx={person.cx}
                          cy={idx === 2 ? 624 : 580}
                          rx={idx === 2 ? 55 : 44}
                          ry={idx === 2 ? 14 : 11}
                          fill="#4A343B"
                          fillOpacity={isLightOn ? 0.75 : 0.55}
                        />
                        {person.render(isLightOn)}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Exact Debbie Speech Bubble Floating Card */}
              <div className="relative z-30 self-center max-w-[460px] w-full flex items-center gap-3 select-none mt-2">
                <div className="relative shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Debbie"
                    className="w-[44px] h-[44px] rounded-full object-cover border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  />
                </div>

                <div className="relative flex-1 bg-white rounded-[22px] px-5 py-3 shadow-[0_6px_26px_rgba(0,0,0,0.06)] border border-[#F8E5E9]">
                  {/* Left notch pointer */}
                  <div className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[7px] border-y-transparent border-r-[8px] border-r-white" />
                  
                  <p className="text-[12px] font-bold text-[#BE123C] tracking-tight leading-none mb-1">
                    Debbie
                  </p>
                  <p className="text-[14px] text-[#1E2024] font-[450] leading-snug">
                    Hey! We Found <span className="font-[800] text-[#111215]">12 Candidates</span> For Your Open Role.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= 3 BOTTOM FLOOR TABS (ATTACHED TO BOTTOM FLOOR) ================= */}
        <div className="flex items-end gap-3.5 z-20 overflow-x-auto pt-2">
          
          {/* Tab 1: Dedicated Recruiter */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-t-[22px] bg-white border-t border-x border-[#F6E1E6] shadow-[0_-4px_14px_rgba(251,236,239,0.5)] shrink-0">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#FFF2F4] border border-[#FCD9E0] flex items-center justify-center text-[#B8143C] shrink-0">
              <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <circle cx="16" cy="11" r="4.5" />
                <path d="M8 25c0-4.5 3.5-7.5 8-7.5s8 3 8 7.5" strokeLinecap="round" />
                <path d="M7 23C5 18 8 13.5 13 13.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="leading-[1.2]">
              <p className="text-[14px] font-[700] text-[#141518]">Dedicated</p>
              <p className="text-[14px] font-[700] text-[#141518]">Recruiter</p>
            </div>
          </div>

          {/* Tab 2: Interview-Ready Candidates */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-t-[22px] bg-white border-t border-x border-[#F6E1E6] shadow-[0_-4px_14px_rgba(251,236,239,0.5)] shrink-0">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#FFF2F4] border border-[#FCD9E0] flex items-center justify-center text-[#B8143C] shrink-0">
              <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M7 5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" fill="#B8143C" stroke="none" />
                <circle cx="17" cy="17" r="9.5" strokeLinecap="round" />
                <circle cx="17" cy="14" r="3" />
                <path d="M12 22.5c0-2.2 2.2-4 5-4s5 1.8 5 4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="leading-[1.2]">
              <p className="text-[14px] font-[700] text-[#141518]">Interview-Ready</p>
              <p className="text-[14px] font-[700] text-[#141518]">Candidates</p>
            </div>
          </div>

          {/* Tab 3: Predictable Hiring Costs */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-t-[22px] bg-white border-t border-x border-[#F6E1E6] shadow-[0_-4px_14px_rgba(251,236,239,0.5)] shrink-0">
            <div className="w-[44px] h-[44px] rounded-[14px] bg-[#FFF2F4] border border-[#FCD9E0] flex items-center justify-center text-[#B8143C] shrink-0">
              <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <circle cx="13" cy="14" r="6" strokeLinecap="round" />
                <circle cx="19" cy="18" r="6.5" fill="#FFF2F4" />
                <path d="M19 14.5v7M17.5 16c0-.8.7-1.5 1.5-1.5s1.5.5 1.5 1.2c0 1.5-3 1.2-3 2.5 0 .8.7 1.3 1.5 1.3s1.5-.5 1.5-1" strokeLinecap="round" strokeWidth="1.6" />
                <path d="M7 25h18" strokeLinecap="round" />
              </svg>
            </div>
            <div className="leading-[1.2]">
              <p className="text-[14px] font-[700] text-[#141518]">Predictable</p>
              <p className="text-[14px] font-[700] text-[#141518]">Hiring Costs</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}