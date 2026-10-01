import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#A31536] text-xs font-semibold tracking-wider italic bg-[#FDF0F2] px-3 py-1 rounded-full border border-[#F6D5DA]">
            without the recruiting headache...
          </span>

          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
            Hire Great People. <br />
            We’ll Handle the Rest.
          </h1>

          <p className="text-gray-600 text-lg max-w-lg">
            We Find, Screen, And Deliver Interview-Ready Candidates While You Stay Focused On Growing Your Business.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-[15px] hover:bg-neutral-800 transition">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-gray-800 font-semibold text-[15px] hover:text-[#A31536] transition px-4 py-2">
              Get Estimate <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof Logos */}
          <div className="pt-10 border-t border-[#EBE3E0]/70 flex flex-wrap items-center gap-8 opacity-70 grayscale">
            <span className="font-bold text-sm tracking-widest text-gray-800">EMBLEM</span>
            <span className="font-bold text-sm tracking-widest text-gray-800">OPTIMAL</span>
            <span className="font-bold text-sm tracking-widest text-gray-800">GRAPHO</span>
            <span className="font-bold text-sm tracking-widest text-gray-800">VECTRA</span>
            <span className="font-bold text-sm tracking-widest text-gray-800">ICONIC</span>
          </div>
        </div>

        {/* Right Column / Spotlight Box */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#FBEFF2] rounded-3xl p-8 border border-[#F4D9DF] overflow-hidden min-h-[460px] flex flex-col justify-end">
            
            {/* Spotlight Beam Visual */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full bg-gradient-to-b from-[#A31536]/30 via-[#A31536]/10 to-transparent clip-spotlight" />

            {/* Candidate Notification Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#A31536] text-white flex items-center justify-center font-bold text-sm">
                DS
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Dedicated Recruiter</p>
                <p className="text-xs text-gray-500">
                  Hey! We Found <span className="font-bold text-[#A31536]">12 Candidates</span> For Your Open Role.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}