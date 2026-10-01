import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProcessHeader from "./components/sections/ProcessHeader";
import ProcessTabs from "./components/sections/ProcessTabs";
import OrganizedHeader from "./components/sections/OrganizedHeader";
import DashboardSection from "./components/sections/DashboardSection";
import SupportBanner from "./components/sections/SupportBanner";
import PricingHeader from "./components/sections/PricingHeader";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import NumbersSection from "./components/sections/NumbersSection";
import FaqSection from "./components/sections/FaqSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBFB] text-[#141518]">
      <Navbar />
      <Hero />
      <ProcessHeader />
      <ProcessTabs />
      <OrganizedHeader />
      <DashboardSection />
      <SupportBanner/>
      <PricingHeader />
      <TestimonialsSection/>
      <NumbersSection />
      <FaqSection/>
      <Footer/>
    </div>
  );
}