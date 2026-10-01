import React from "react";

export default function PricingHeader() {
  return (
    <section className="w-full bg-[#2C1810] select-none font-sans relative">
      {/* Top Seamless Inverted Arch Cutout into White */}
      <div className="w-full bg-white rounded-t-[48px] sm:rounded-t-[64px] lg:rounded-t-[76px] pt-20 pb-20 px-4 sm:px-8 xl:px-12 flex flex-col items-center">
        
        {/* ================= 1. PRICING HEADER ================= */}
        <div className="text-center max-w-[900px] mx-auto mb-14 flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FDF0F3] border border-[#FBE0E6] mb-5">
            <span className="text-[#B8143C] text-[13.5px] font-[700] tracking-[-0.01em]">
              simple, predictable pricing
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[44px] sm:text-[56px] xl:text-[68px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.06]">
            Predictable Hiring Costs
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[#666874] text-[15.5px] sm:text-[17px] font-[450] leading-[1.6] max-w-[700px] tracking-[-0.01em]">
            No Percentage-Based Placement Fees. No Guessing. No Surprise Invoices.
          </p>
        </div>

        {/* ================= 2. MAIN PRICING DUAL-COLUMN CARD ================= */}
        <div className="w-full max-w-[1240px] rounded-[36px] border-[2.5px] border-[#EADCCF] bg-white p-3 sm:p-5 shadow-[0_12px_45px_rgba(234,220,207,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Left 3D Golden Podium Area */}
            <div className="lg:col-span-6 rounded-[28px] bg-gradient-to-b from-[#FDFBF7] via-[#FAF4ED] to-[#F5ECE1] border border-[#F0E3D5] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[440px]">
              
              <svg viewBox="0 0 520 400" className="w-full h-auto max-w-[460px]" fill="none">
                <defs>
                  {/* Gold Gradients */}
                  <linearGradient id="goldRim" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#DFB272" />
                    <stop offset="35%" stopColor="#F9E2A8" />
                    <stop offset="70%" stopColor="#D8A359" />
                    <stop offset="100%" stopColor="#B37C34" />
                  </linearGradient>

                  <linearGradient id="goldSurface" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FDF7EA" />
                    <stop offset="100%" stopColor="#E6C186" />
                  </linearGradient>

                  <linearGradient id="ribbonGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FDECC3" />
                    <stop offset="50%" stopColor="#E5B973" />
                    <stop offset="100%" stopColor="#B88035" />
                  </linearGradient>

                  <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#B88A58" floodOpacity="0.22" />
                  </filter>
                </defs>

                {/* Base Shadow */}
                <ellipse cx="240" cy="340" rx="190" ry="32" fill="#D7C1AC" fillOpacity="0.35" />

                {/* Main Golden Pedestal Disc */}
                <g filter="url(#softShadow)">
                  {/* Pedestal Extrusion */}
                  <path d="M70 300 C 70 270, 410 270, 410 300 L 410 324 C 410 354, 70 354, 70 324 Z" fill="url(#goldRim)" />
                  {/* Top Surface */}
                  <ellipse cx="240" cy="300" rx="170" ry="28" fill="url(#goldSurface)" />
                </g>

                {/* Secondary Step Platform */}
                <ellipse cx="240" cy="275" rx="135" ry="18" fill="#FFFFFF" />
                <path d="M105 275 C 105 260, 375 260, 375 275 L 375 288 C 375 303, 105 303, 105 288 Z" fill="#EFE8DE" />
                <ellipse cx="240" cy="274" rx="135" ry="17" fill="#FCFAF6" />

                {/* Coin Stacks on Right */}
                <g transform="translate(370, 245)">
                  <path d="M0 20 C 0 12, 44 12, 44 20 L 44 42 C 44 50, 0 50, 0 42 Z" fill="url(#goldRim)" />
                  <ellipse cx="22" cy="20" rx="22" ry="8" fill="url(#goldSurface)" />
                  <path d="M15 35 C 15 29, 52 29, 52 35 L 52 52 C 52 58, 15 58, 15 52 Z" fill="url(#goldRim)" />
                  <ellipse cx="33.5" cy="35" rx="18.5" ry="6" fill="url(#goldSurface)" />
                </g>

                {/* Main White Board ($11,104) */}
                <g filter="url(#softShadow)" transform="translate(110, 85)">
                  <rect x="0" y="0" width="220" height="150" rx="20" fill="#FFFFFF" stroke="#F1E7DC" strokeWidth="2.5" />
                  
                  {/* "Lowest Price Guaranteed" Pill */}
                  <rect x="25" y="18" width="150" height="24" rx="12" fill="#FDF0F3" />
                  <circle cx="37" cy="30" r="4.5" fill="#E11D48" />
                  <text x="47" y="34" fill="#1C1D21" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
                    Lowest Price <tspan fill="#E11D48">Guaranteed</tspan>
                  </text>

                  {/* $11,104 Big Bold Display */}
                  <text x="20" y="98" fill="#141518" fontSize="44" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1.5">
                    $11,104
                  </text>
                </g>

                {/* Golden Shield on Top Right of Whiteboard */}
                <g filter="url(#softShadow)" transform="translate(295, 62)">
                  <path d="M35 0 C 56 0, 70 12, 70 28 C 70 54, 35 75, 35 75 C 35 75, 0 54, 0 28 C 0 12, 14 0, 35 0 Z" fill="url(#ribbonGold)" />
                  <path d="M35 6 C 52 6, 64 16, 64 29 C 64 50, 35 68, 35 68 C 35 68, 6 50, 6 29 C 6 16, 18 6, 35 6 Z" fill="url(#goldSurface)" />
                  {/* Shield Checkmark */}
                  <path d="M25 33 L 33 41 L 47 25" stroke="#9A6520" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Floating $26,000 Comparison Strikethrough Badge */}
                <g filter="url(#softShadow)" transform="translate(360, 140)">
                  <rect x="0" y="0" width="86" height="36" rx="10" fill="#F8EFEB" stroke="#F1DDD4" strokeWidth="1.5" />
                  <text x="10" y="24" fill="#786B66" fontSize="15" fontWeight="800" fontFamily="sans-serif">
                    $26,000
                  </text>
                  <line x1="8" y1="20" x2="78" y2="20" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Gold Arrow from $26,000 curving down to $11,104 */}
                <path d="M375 190 C 375 220, 345 235, 325 210" fill="none" stroke="url(#goldRim)" strokeWidth="3" strokeLinecap="round" />
                <polygon points="328,212 322,204 333,203" fill="#C88E3E" />

                {/* Dynamic Gold Ribbon curving to the front */}
                <path d="M90 170 C 50 200, 70 280, 160 295 C 240 310, 270 270, 310 260" fill="none" stroke="url(#ribbonGold)" strokeWidth="16" strokeLinecap="round" opacity="0.9" />

                {/* Downward Red Arrow Tile (Left Bottom) */}
                <g filter="url(#softShadow)" transform="translate(85, 235)">
                  <rect x="0" y="0" width="56" height="56" rx="16" fill="#FFFFFF" stroke="#F1E7DC" strokeWidth="1.5" transform="rotate(-8 28 28)" />
                  <path d="M28 16 L 28 36 M 20 28 L 28 36 L 36 28" stroke="#E11D48" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-8 28 28)" />
                </g>
              </svg>

            </div>

            {/* Right Stepper Timeline */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
              <div className="relative space-y-9 pl-2 sm:pl-4">
                
                {/* Dashed Connecting Timeline Line */}
                <div className="absolute left-[33px] sm:left-[41px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#DCCBB9] z-0" />

                {/* Step 1 */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[14px] bg-[#F7EFE7] border border-[#E9DEC2] flex items-center justify-center text-[#9A6520] shrink-0 shadow-sm">
                    {/* Money bag glyph */}
                    <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2v2M9 4h6a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2z" />
                      <path d="M5 11c0 6 3 10 7 10s7-4 7-10" />
                      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[12px] font-[800] text-[#9A6520] uppercase tracking-wider">
                      Step 1
                    </span>
                    <h4 className="text-[16.5px] font-[800] text-[#141518] mt-0.5">
                      Know Your Cost Upfront
                    </h4>
                    <p className="text-[13.5px] text-[#6E7079] font-[450] mt-1 leading-snug max-w-[360px]">
                      Get an Instant Pricing Estimate before your recruiting sprint begins.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[14px] bg-[#F7EFE7] border border-[#E9DEC2] flex items-center justify-center text-[#9A6520] shrink-0 shadow-sm">
                    {/* Target/Sprint glyph */}
                    <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[12px] font-[800] text-[#9A6520] uppercase tracking-wider">
                      Step 2
                    </span>
                    <h4 className="text-[16.5px] font-[800] text-[#141518] mt-0.5">
                      Start Your Hiring Sprint
                    </h4>
                    <p className="text-[13.5px] text-[#6E7079] font-[450] mt-1 leading-snug max-w-[360px]">
                      Activate your 21-Day Hiring Sprint and pay only for the recruiting hours you use.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[14px] bg-[#F7EFE7] border border-[#E9DEC2] flex items-center justify-center text-[#9A6520] shrink-0 shadow-sm">
                    {/* Success handshake/hire badge */}
                    <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[12px] font-[800] text-[#9A6520] uppercase tracking-wider">
                      Step 3
                    </span>
                    <h4 className="text-[16.5px] font-[800] text-[#141518] mt-0.5">
                      Pay When You Hire
                    </h4>
                    <p className="text-[13.5px] text-[#6E7079] font-[450] mt-1 leading-snug max-w-[360px]">
                      A success fee applies only when you hire a TRS candidate.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ================= 3. BOTTOM CTA BUTTON ================= */}
        <div className="mt-8 flex justify-center">
          <button className="h-[46px] px-8 rounded-[16px] bg-[#F4EFEB] hover:bg-[#EDE3DA] text-[#1E2024] text-[14.5px] font-[700] transition border border-[#E3D4C4] shadow-sm">
            Get Instant Pricing
          </button>
        </div>

      </div>
    </section>
  );
}