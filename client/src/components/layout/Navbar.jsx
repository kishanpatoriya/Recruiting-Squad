import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-[#F0ECEB] select-none sticky top-0 z-50">
      {/* Container with wide stretch and exact edge padding */}
      <div className="w-full px-6 xl:px-10 h-[88px] flex items-center justify-between">
        
        {/* Left: Shield Logo + Navigation Items directly adjacent */}
        <div className="flex items-center gap-10 xl:gap-12">
          
          {/* Exact Shield Logo */}
          <div className="flex items-center cursor-pointer shrink-0">
            <svg
              width="118"
              height="50"
              viewBox="0 0 134 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67 2L131 11.5V36.5L67 54L3 36.5V11.5L67 2Z"
                fill="#BE123C"
                stroke="#BE123C"
                strokeWidth="2"
              />
              <path
                d="M67 5.5L127 14.5V34.5L67 51L7 34.5V14.5L67 5.5Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="#BE123C"
              />
              <path
                d="M38 12.5C48 9.5 86 9.5 96 12.5L92 19C82 17 52 17 42 19L38 12.5Z"
                fill="#38BDF8"
              />
              <text
                x="67"
                y="16.5"
                fill="#FFFFFF"
                fontSize="6.5"
                fontWeight="900"
                textAnchor="middle"
                letterSpacing="2"
                fontFamily="system-ui, sans-serif"
              >
                THE
              </text>
              <text
                x="67"
                y="32.5"
                fill="#FFFFFF"
                fontSize="14"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                RECRUITING
              </text>
              <rect
                x="42"
                y="37"
                width="50"
                height="8"
                rx="1.5"
                fill="#FFFFFF"
              />
              <text
                x="67"
                y="43.5"
                fill="#BE123C"
                fontSize="7.5"
                fontWeight="900"
                textAnchor="middle"
                letterSpacing="1.8"
                fontFamily="system-ui, sans-serif"
              >
                SQUAD™
              </text>
            </svg>
          </div>

          {/* Center/Left-aligned Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-[550] text-[#1E2024] whitespace-nowrap">
            <a href="#how-it-works" className="hover:text-[#BE123C] transition-colors">
              How It Works
            </a>

            <button className="flex items-center gap-1.5 hover:text-[#BE123C] transition-colors">
              <span>Who We Serve</span>
              <svg
                className="w-3.5 h-3.5 text-[#555]"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            <a href="#pricing" className="hover:text-[#BE123C] transition-colors">
              Pricing
            </a>

            <button className="flex items-center gap-1.5 hover:text-[#BE123C] transition-colors">
              <span>Resources</span>
              <svg
                className="w-3.5 h-3.5 text-[#555]"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            <a href="#about" className="hover:text-[#BE123C] transition-colors">
              About
            </a>

            <a href="#contact" className="hover:text-[#BE123C] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Right Actions: Anchored properly near the right edge */}
        <div className="flex items-center gap-5 xl:gap-6 shrink-0">
          
          {/* Schedule a Call */}
          <a
            href="#schedule"
            className="hidden md:inline-flex items-center gap-2 text-[15px] font-bold text-[#BE123C] hover:opacity-90 transition-opacity"
          >
            <span>Schedule a Call</span>
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

          {/* Sign In Squircle Button */}
          <button className="h-[48px] px-8 rounded-[20px] bg-[#1A1A1A] text-white text-[15px] font-bold tracking-tight hover:bg-black transition-all">
            Sign In
          </button>

          {/* Get Instant Pricing Squircle Box */}
          <div className="h-[52px] pl-6 pr-2 bg-[#FDF1F3] rounded-[20px] flex items-center gap-4 cursor-pointer hover:bg-[#FBE5E9] transition-colors">
            <span className="text-[15px] font-semibold text-[#1A1A1A] whitespace-nowrap">
              Get Instant Pricing
            </span>
            <div className="w-[38px] h-[38px] rounded-[14px] bg-[#BE123C] hover:bg-[#A30F33] text-white flex items-center justify-center shrink-0 transition-colors">
              <svg
                className="w-4 h-4 stroke-[2.8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}