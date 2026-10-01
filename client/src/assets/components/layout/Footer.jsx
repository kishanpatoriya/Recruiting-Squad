import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111418] text-white pt-16 pb-12 px-6 rounded-t-[40px] mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Card */}
        <div className="bg-[#1C2026] rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
          <div>
            <h3 className="text-2xl font-bold">Still Have Questions?</h3>
            <p className="text-gray-400 text-sm mt-1">Talk to our talent partner and get a tailored sprint walkthrough.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#A31536] text-white font-semibold text-sm hover:bg-[#820f2a] transition">
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-400 pb-16 border-b border-neutral-800">
          <div className="col-span-2">
            <div className="border border-[#A31536] inline-block px-3 py-1 rounded font-black text-xs uppercase tracking-tighter text-white mb-4">
              The Recruiting <br/> Squad
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Get dedicated recruiting support to find, screen, and deliver the people your business needs to grow.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">21-Day Hiring Sprint</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Join the Squad</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>© 2026 The Recruiting Squad. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}