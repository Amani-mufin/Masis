import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:gap-8 items-center mx-auto max-w-[1091px]">
      <div className="flex gap-14 items-center max-md:flex-col max-md:gap-5">
        <h2 className="text-[84px] leading-tight text-center text-violet-100 max-md:text-6xl max-sm:text-4xl font-['Rubik_Glitch']">
          CONNECT WITH EVERY EXISTING
        </h2>
        <div className="leading-none text-violet-100 text-[275px] max-md:text-[200px] max-sm:text-9xl font-['Rubik_Iso']">
          AI
        </div>
      </div>
      <p className=" text-xs md:text-xl font-medium text-center max-w-[1200px] text-zinc-200 max-md:text-lg max-sm:text-base font-[roboto]">
        The future of AI is interconnected. Connect with EVERY EXISTING AI,
        unlock new possibilities, and streamline your workflows with a single,
        intuitive interface.
      </p>
    </section>
  );
};

export default HeroSection;
