import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F8]/95 backdrop-blur-md border-b border-[#EBE3E0]/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="border-2 border-[#A31536] px-2 py-1 rounded font-black text-xs uppercase tracking-tighter text-[#A31536]">
            The Recruiting <br/> Squad
          </div>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] text-gray-700 font-medium">
          <a href="#how-it-works" className="hover:text-[#A31536] transition-colors">How It Works</a>
          <a href="#who-we-serve" className="hover:text-[#A31536] transition-colors">Who We Serve ▾</a>
          <a href="#pricing" className="hover:text-[#A31536] transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-[#A31536] transition-colors">Resources ▾</a>
          <a href="#about" className="hover:text-[#A31536] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#A31536] transition-colors">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1.5 text-[14px] font-semibold text-[#A31536] hover:opacity-80">
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 rounded-full bg-black text-white text-[14px] font-semibold hover:bg-neutral-800 transition">
            Sign In
          </button>
          <button className="hidden md:block px-5 py-2.5 rounded-full bg-[#A31536] text-white text-[14px] font-semibold hover:bg-[#820f2a] transition shadow-sm">
            Get Instant Pricing
          </button>
        </div>

      </div>
    </header>
  );
}