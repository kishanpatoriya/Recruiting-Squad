import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Asten Morgan Jr.",
    role: "Co-Founder at Mnumonic",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    quote:
      "“We needed to make several critical hires at Mnumonic and The Recruiting Squad was a game changer. Our assigned recruiter was incredible and had experience in our industry. We made multiple hires for a fraction of traditional recruiting fees.”",
  },
  {
    id: 2,
    name: "Jon Pfohl",
    role: "CFO | VCpartners",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    quote:
      "“The Recruiting Squad helps us build strong candidate pipelines across our portfolio companies. Instead of sorting through hundreds of unqualified resumes, we see the right candidates faster and more consistently. This has been critical in keeping our founders focused on revenue and growth.”",
  },
  {
    id: 3,
    name: "Scott Smith",
    role: "GM at HB Honda Motorcycles",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    quote:
      "“I needed to hire a service technician for our local dealership. I started with Indeed, but we were inundated with resumes and my team was spending too much time sorting through them. That’s not where our focus should be. The Recruiting Squad sent candidates who were actually worth talking to, and it made hiring a lot easier.”",
  },
];

export default function TestimonialsSection() {
  // Infinite smooth loop mate double list
  const scrollList = [...testimonials, ...testimonials];

  return (
    
    <section className="w-full  bg-white py-24 px-6 sm:px-10 xl:px-16 select-none font-sans overflow-hidden border-t border-[#F2DEE4]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          {/* Crimson Red Double Quote Icon */}
          <div className="text-[#B8143C] -mb-2">
            <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>

          {/* Badge Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FDF0F3] border border-[#FBE0E6]">
            <span className="text-[#B8143C] text-[13.5px] font-[700] tracking-[-0.01em]">
              Trusted By Growing Teams
            </span>
          </div>

          {/* Ultra-Bold Headline */}
          <h2 className="text-[44px] sm:text-[56px] xl:text-[62px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.06]">
            Real hiring results.
          </h2>

          {/* Subtitle */}
          <p className="text-[#646470] text-[15.5px] sm:text-[16.5px] font-[450] leading-[1.6] max-w-[460px]">
            See Why Growing Companies Trust Recruiting Squad To Find The People They Need—Without Building A Recruiting Team From Scratch.
          </p>

          {/* Black Pill CTA Button */}
          <div className="pt-2">
            <button className="h-[48px] px-8 rounded-[16px] bg-[#18191B] text-white text-[15px] font-[700] hover:bg-black transition shadow-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* ================= RIGHT AMBIENT CAROUSEL FRAME ================= */}
        <div className="lg:col-span-7">
          <div className="w-full bg-[#FDF1F3] rounded-[48px] p-6 sm:p-10 relative overflow-hidden h-[540px] sm:h-[580px] flex flex-col justify-center">
            
            {/* Top & Bottom Soft Fading Masks */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FDF1F3] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDF1F3] to-transparent z-20 pointer-events-none" />

            {/* Continuous Vertical Marquee Scrolling Upwards */}
            <motion.div
              className="flex flex-col gap-6 cursor-grab active:cursor-grabbing"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {scrollList.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-white rounded-[32px] p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#F6E1E6] flex flex-col space-y-4 shrink-0 transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Profile Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[58px] h-[58px] rounded-[18px] object-cover border border-gray-100 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="text-[16.5px] font-[800] text-[#B8143C] tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[14px] font-[700] text-[#141518] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* 5 Solid Black Stars */}
                  <div className="flex items-center gap-1.5 text-[#141518]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-[#36383E] text-[14.5px] sm:text-[15.5px] font-[450] leading-[1.65]">
                    {item.quote}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}