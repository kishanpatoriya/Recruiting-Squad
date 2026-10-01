import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white select-none font-sans relative">
      {/* Top Arched Concave Cutout with Exact Reference Background */}
      <div 
        className="w-full rounded-t-[44px] sm:rounded-t-[60px] lg:rounded-t-[72px] pt-16 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-16 text-white relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 30%, #2A2D35 0%, #17181D 50%, #0F1014 100%)",
        }}
      >
        {/* Soft Ambient Smoke / Fog Highlights matching screenshot */}
        <div 
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[450px] pointer-events-none opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 70%)"
          }}
        />

        <div className="max-w-[1380px] mx-auto relative z-10">
          
          {/* ================= 1. MAIN LINKS GRID ================= */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
            
            {/* Logo & Description Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-4 flex flex-col items-start space-y-5">
              {/* Badge Logo */}
              <div className="relative">
                <div className="bg-[#B8143C] text-white px-3.5 py-2 rounded-[10px] border-2 border-white shadow-md inline-flex flex-col items-center">
                  <span className="text-[8px] font-[800] tracking-widest uppercase bg-[#0F355A] text-white px-1.5 py-0.5 rounded-sm -mt-3.5 mb-0.5 border border-white">
                    The
                  </span>
                  <span className="text-[17px] font-[900] tracking-tight leading-none uppercase font-sans">
                    Recruiting
                  </span>
                  <div className="w-full flex items-center justify-center gap-1 mt-1">
                    <span className="h-[1px] w-3 bg-white/70" />
                    <span className="text-[10px] font-[900] tracking-widest uppercase">Squad</span>
                    <span className="h-[1px] w-3 bg-white/70" />
                  </div>
                </div>
              </div>

              {/* Bio Description */}
              <p className="text-white/60 text-[13.5px] font-[450] leading-[1.65] max-w-[270px]">
                Get dedicated recruiting support to find, screen, and deliver the people your business needs to grow.
              </p>
            </div>

            {/* Column 1: Platform */}
            <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
              <h4 className="text-[15.5px] font-[700] text-white tracking-tight">
                Platform
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-white/60 font-[450]">
                <li><a href="#how-it-works" className="hover:text-white transition">How it Works</a></li>
                <li><a href="#21-day-sprint" className="hover:text-white transition">21-Day Hiring Sprint</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
              <h4 className="text-[15.5px] font-[700] text-white tracking-tight">
                Company
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-white/60 font-[450]">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#join" className="hover:text-white transition">Join the Squad</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 3: Onboarding Services */}
            <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
              <h4 className="text-[15.5px] font-[700] text-white tracking-tight">
                Onboarding Services
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-white/60 font-[450]">
                <li><a href="#background" className="hover:text-white transition">Background Checks</a></li>
                <li><a href="#credit" className="hover:text-white transition">Credit Checks</a></li>
                <li><a href="#drug-testing" className="hover:text-white transition">Drug Testing</a></li>
                <li><a href="#driving-history" className="hover:text-white transition">Driving History & License Status</a></li>
                <li><a href="#performance-insurance" className="hover:text-white transition">New Hire Performance Insurance</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
              <h4 className="text-[15.5px] font-[700] text-white tracking-tight">
                Resources
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-white/60 font-[450]">
                <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#press" className="hover:text-white transition">Press</a></li>
                <li><a href="#newsroom" className="hover:text-white transition">Newsroom</a></li>
                <li><a href="#sales-portal" className="hover:text-white transition">Sales Portal</a></li>
                <li><a href="#hr-rev" className="hover:text-white transition">HR Rev-Share Program</a></li>
              </ul>
            </div>

          </div>

          {/* ================= 2. "STILL HAVE QUESTIONS?" CARD ================= */}
          <div className="my-8 w-full rounded-[22px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <h3 className="text-[18px] sm:text-[20px] font-[700] text-white tracking-tight px-2">
              Still Have Questions?
            </h3>

            <button className="h-[46px] pl-6 pr-1.5 rounded-full bg-white hover:bg-gray-100 text-[#141518] text-[13.5px] font-[700] flex items-center gap-3.5 transition shrink-0 group shadow-md">
              <span className="text-[#B8143C]">Schedule a Call</span>
              <div className="w-[34px] h-[34px] rounded-full bg-[#B8143C] group-hover:bg-[#970F30] text-white flex items-center justify-center shrink-0 transition">
                <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>

          {/* ================= 3. BOTTOM SUB-BAR ================= */}
          <div className="w-full rounded-[18px] bg-black/40 border border-white/[0.05] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
            {/* Copyright */}
            <span>
              © {currentYear} The Recruiting Squad. All Rights Reserved.
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a href="#youtube" className="w-8 h-8 rounded-[8px] bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#instagram" className="w-8 h-8 rounded-[8px] bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#facebook" className="w-8 h-8 rounded-[8px] bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#linkedin" className="w-8 h-8 rounded-[8px] bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
              <span>·</span>
              <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}