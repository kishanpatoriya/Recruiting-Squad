import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "find", label: "Find Candidates" },
  { id: "screen", label: "Screen & Qualify" },
  { id: "hire", label: "Move To Hire" },
];

export default function ProcessTabs() {
  const [activeTab, setActiveTab] = useState("screen");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center" id="how-it-works">
      
      <h2 className="text-3xl sm:text-5xl font-black text-gray-900">
        We Find Them. <br />
        We Screen Them. You Hire Them.
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
        Your Dedicated Recruiter Sources Qualified Candidates Across The Right Channels, So You Don’t Have To Spend Hours Searching Through Resumes.
      </p>

      {/* Tab Switcher */}
      <div className="mt-10 inline-flex p-1.5 rounded-full bg-white border border-[#EBE3E0] shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-black text-white shadow"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Cards */}
      <div className="mt-12 bg-[#E9F7F5] rounded-3xl p-8 sm:p-14 border border-[#D5EFEA] text-left">
        <AnimatePresence mode="wait">
          {activeTab === "screen" && (
            <motion.div
              key="screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div>
                <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Step 02</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
                  Less time screening. <br /> More time interviewing.
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  We Review, Qualify, And Organize Candidates Against Your Requirements — So You Only See People Worth Talking To.
                </p>
                <button className="mt-8 px-6 py-3 rounded-full bg-white border border-gray-300 font-semibold text-sm hover:bg-gray-50 transition">
                  Meet Your Recruiter
                </button>
              </div>

              {/* Pipeline Mockup Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 text-xs font-bold text-gray-400 uppercase">
                  <span>Candidate</span>
                  <span>Match Score</span>
                  <span>Status</span>
                </div>
                {[
                  { name: "Sarah Jenkins", role: "Sr. Frontend Dev", score: "98%", status: "Screened" },
                  { name: "David Ross", role: "Product Designer", score: "94%", status: "Interviewing" },
                  { name: "Priya Sharma", role: "Full Stack Engineer", score: "91%", status: "Shortlisted" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between text-sm py-2">
                    <div>
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.role}</p>
                    </div>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs">
                      {c.score}
                    </span>
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "find" && (
            <motion.div
              key="find"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <h3 className="text-3xl font-extrabold text-gray-900">Custom Sourcing Engine</h3>
              <p className="text-gray-600 mt-2">Connecting with high-caliber passive talent tailored for your roles.</p>
            </motion.div>
          )}

          {activeTab === "hire" && (
            <motion.div
              key="hire"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <h3 className="text-3xl font-extrabold text-gray-900">Your shortlist is ready. Now make the hire.</h3>
              <p className="text-gray-600 mt-2">Smooth offer rollout and onboarding support.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}