import React from "react";

export default function ProcessHeader() {
  return (
    <section className="w-full bg-[#FFFBFB] pt-20 pb-12 px-4 select-none font-sans text-center">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Main 2-line Heading */}
        <h2 className="text-[42px] sm:text-[56px] lg:text-[68px] font-[900] text-[#141518] tracking-[-0.04em] leading-[1.08]">
          We Find Them. <br />
          We Screen Them. You Hire Them.
        </h2>

        {/* 2-line Sub-headline */}
        <p className="mt-5 text-[#686874] text-[15.5px] sm:text-[17px] font-[450] leading-[1.6] max-w-[680px] tracking-[-0.01em]">
          Your Dedicated Recruiter Sources Qualified Candidates Across The Right Channels, So 
          You Don’t Have To Spend Hours Searching Through Resumes.
        </p>

      </div>
    </section>
  );
}