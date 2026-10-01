import React from "react";
import { motion } from "framer-motion";

export default function DashboardSection() {
  const candidates = [
    { name: "Sena Eskooch", exp: "Senior / Experience", status: "Sourced", col: "Sourced", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" },
    { name: "Galassi Samper", exp: "Senior / Experience", status: "Screened", col: "Screened", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" },
    { name: "Jason Romas", exp: "United States", status: "Screened", col: "Screened", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" },
    { name: "Doreh Behin", exp: "Senior / Experience", status: "Qualified", col: "Qualified", badgeBg: "bg-[#DCFCE7] text-[#166534]", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces" },
    { name: "Senion Roultis", exp: "Senior / Experience", status: "Interview Ready", col: "Interview", badgeBg: "bg-[#E0E7FF] text-[#3730A3]", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces" },
    { name: "Senior Kawnis", exp: "Senior / Experience", status: "Hired", col: "Hired", badgeBg: "bg-[#CCFBF1] text-[#115E59]", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces" },
  ];

  const columns = ["Sourced", "Screened", "Qualified", "Interview", "Hired"];

  return (
    <section className="w-full bg-[#FFFBFB] pb-16 px-4 xl:px-10 select-none font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= OUTER CONTAINER WITH EXACT BOTTOM CURVED DESIGN (IMAGE_A1F547) ================= */}
        <div className="w-full bg-white rounded-t-[36px] rounded-b-[52px] border-[2px] border-[#F4DEE4] shadow-[0_15px_45px_rgba(251,230,236,0.45)] overflow-hidden">
          
          {/* Inner Ambient Gradient Container */}
          <div className="w-full bg-gradient-to-br from-[#EAF0FC]/60 via-[#FDF3F5]/80 to-[#FCEBEF]/70 p-6 lg:p-10 xl:p-12 pb-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
              
              {/* ================= LEFT SIDE: SPRINT DASHBOARD WINDOW ================= */}
              <div className="lg:col-span-7 xl:col-span-7 relative">
                <div className="w-full bg-white rounded-[28px] border border-[#F2DEE4] shadow-[0_10px_35px_rgba(0,0,0,0.04)] p-5 sm:p-7 relative overflow-hidden">
                  
                  {/* 1. App Top Nav Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#F7EBF0]">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-[6px] bg-[#B8143C] text-white flex items-center justify-center font-bold text-[12px]">
                        R
                      </div>
                      <span className="text-[12.5px] font-[700] text-[#141518] leading-tight">
                        Recruiting <br /> Squad
                      </span>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E9ECEF] text-[#868E96] text-[12px] w-[200px]">
                      <svg className="w-3.5 h-3.5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span>Search</span>
                    </div>

                    {/* Header Actions */}
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400">
                        •••
                      </button>
                      <button className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </button>
                      <button className="px-3 py-1 rounded-full bg-[#B8143C] text-white text-[11px] font-[700] hover:bg-black transition">
                        Start Sprint
                      </button>
                    </div>
                  </div>

                  {/* 2. Role Title */}
                  <div className="pt-6 pb-6 text-center">
                    <h3 className="text-[26px] sm:text-[32px] font-[900] text-[#141518] tracking-tight">
                      Senior DevOps Engineer
                    </h3>
                    <p className="text-[12.5px] font-[600] text-[#868E96] mt-1">
                      Active Sprint · Day 9 of 21
                    </p>
                  </div>

                  {/* 3. Kanban Stage Columns */}
                  <div className="grid grid-cols-5 gap-2 text-center text-[11px] font-[700] text-[#64748B] pb-3">
                    {columns.map((col, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-1">
                        <span>{col}</span>
                        {idx < columns.length - 1 && (
                          <span className="text-gray-300 font-normal">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* 4. Kanban Candidate Cards */}
                  <div className="grid grid-cols-5 gap-2 pt-1 pb-10 min-h-[190px]">
                    {columns.map((col, cIdx) => {
                      const colCandidates = candidates.filter((c) => c.col === col);
                      return (
                        <div key={cIdx} className="space-y-2">
                          {colCandidates.map((cand, idx) => (
                            <div
                              key={idx}
                              className={`p-2 rounded-[12px] bg-white border border-[#F0E6EA] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-left ${
                                cand.status === "Qualified" ? "border-green-200 bg-green-50/20" : ""
                              }`}
                            >
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <img
                                  src={cand.avatar}
                                  alt={cand.name}
                                  className="w-5 h-5 rounded-full object-cover"
                                />
                                <span className="text-[9.5px] font-[700] text-[#1E293B] truncate">
                                  {cand.name}
                                </span>
                              </div>
                              <p className="text-[8px] text-[#94A3B8] truncate mb-1">
                                {cand.exp}
                              </p>
                              {cand.badgeBg && (
                                <span className={`inline-block text-[7.5px] font-[700] px-1.5 py-0.5 rounded-full ${cand.badgeBg}`}>
                                  {cand.status}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>

                  {/* Mini Sidebar Mock */}
                  <div className="absolute left-2.5 top-20 flex flex-col gap-3 text-gray-400">
                    <div className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-[9px] text-gray-500">🏠</div>
                    <div className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-[9px] text-gray-500">📊</div>
                    <div className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-[9px] text-gray-500">👥</div>
                  </div>

                </div>

                {/* ================= FLOATING SUMMARY WIDGET ================= */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -bottom-6 -right-3 sm:right-2 bg-white rounded-[22px] border border-[#F2DEE4] shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-4 w-[210px] sm:w-[230px] z-20"
                >
                  <div className="flex items-center justify-between text-[11.5px] font-[700] text-[#1E293B]">
                    <span>Hiring Sprint</span>
                    <span className="text-[#868E96]">Day 9 / 21</span>
                  </div>

                  <div className="w-full h-8 my-2">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0 25 Q 30 25, 50 15 T 100 5"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 25 Q 30 25, 50 15 T 100 5 L 100 30 L 0 30 Z"
                        fill="#818CF8"
                        fillOpacity="0.12"
                      />
                    </svg>
                  </div>

                  <div className="space-y-1 text-[10.5px] font-[600] text-[#475569]">
                    <p className="flex justify-between">
                      <span>Interview Ready</span>
                      <strong className="text-[#141518]">3</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>Interviews Scheduled</span>
                      <strong className="text-[#141518]">2</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>Candidates Screened</span>
                      <strong className="text-[#141518]">12</strong>
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* ================= RIGHT SIDE: 4 FEATURE CARDS ================= */}
              <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Dedicated Recruiter */}
                <div className="bg-white rounded-[24px] p-5 border border-[#F4E1E7] shadow-[0_4px_16px_rgba(251,230,236,0.35)] flex flex-col justify-between min-h-[170px] hover:shadow-md transition">
                  <div className="w-[46px] h-[46px] rounded-[16px] bg-[#FDEEF2] border border-[#FBDCE4] flex items-center justify-center text-[#B8143C] shrink-0 mb-3">
                    <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                      <path d="M3 15c0-3 2.5-5 5-5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#141518] mb-1">
                      Dedicated Recruiter
                    </h4>
                    <p className="text-[12px] text-[#64748B] leading-relaxed">
                      An Experienced Recruiting Expert Focused On Your Role.
                    </p>
                  </div>
                </div>

                {/* 2. Candidate Pipeline */}
                <div className="bg-white rounded-[24px] p-5 border border-[#E3EDFA] shadow-[0_4px_16px_rgba(227,237,250,0.4)] flex flex-col justify-between min-h-[170px] hover:shadow-md transition">
                  <div className="w-[46px] h-[46px] rounded-[16px] bg-[#EBF3FD] border border-[#D5E6FA] flex items-center justify-center text-[#2563EB] shrink-0 mb-3">
                    <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="3" width="6" height="6" rx="1.5" />
                      <rect x="16" y="3" width="6" height="6" rx="1.5" />
                      <rect x="9" y="15" width="6" height="6" rx="1.5" />
                      <path d="M5 9v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
                      <line x1="12" y1="14" x2="12" y2="15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#141518] mb-1">
                      Candidate Pipeline
                    </h4>
                    <p className="text-[12px] text-[#64748B] leading-relaxed">
                      Track Candidates From Sourcing To Interview.
                    </p>
                  </div>
                </div>

                {/* 3. Recruiter Activity */}
                <div className="bg-white rounded-[24px] p-5 border border-[#F9EBDC] shadow-[0_4px_16px_rgba(249,235,220,0.35)] flex flex-col justify-between min-h-[170px] hover:shadow-md transition">
                  <div className="w-[46px] h-[46px] rounded-[16px] bg-[#FDF5EB] border border-[#F9E4CE] flex items-center justify-center text-[#D97706] shrink-0 mb-3">
                    <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#141518] mb-1">
                      Recruiter Activity
                    </h4>
                    <p className="text-[12px] text-[#64748B] leading-relaxed">
                      See Sourcing, Outreach, Screening, And Progress.
                    </p>
                  </div>
                </div>

                {/* 4. One Simple Dashboard */}
                <div className="bg-white rounded-[24px] p-5 border border-[#ECE6F8] shadow-[0_4px_16px_rgba(236,230,248,0.4)] flex flex-col justify-between min-h-[170px] hover:shadow-md transition">
                  <div className="w-[46px] h-[46px] rounded-[16px] bg-[#F3EFFB] border border-[#E3D9F7] flex items-center justify-center text-[#7C3AED] shrink-0 mb-3">
                    <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <path d="M6 12l3-3 3 3 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#141518] mb-1">
                      One Simple Dashboard
                    </h4>
                    <p className="text-[12px] text-[#64748B] leading-relaxed">
                      Keep Your Entire Hiring Pipeline In One Place.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}