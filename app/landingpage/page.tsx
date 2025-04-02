"use client";
import React from "react";
import MasisLogo from "@/components/waitlist/Logo";
import HeroSection from "@/components/Hero";
import ActionButtons from "@/components/ActionButton";
import "../globals.css"

const MasisLandingPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center p-5 w-full min-h-screen bg-[url('/landingpage-bg.png')] bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(14,9,39,1)] opacity-50 -z-10"></div>
      <section className="relative p-10 w-full rounded-3xl backdrop-blur-[15.85px] bg-transparent bg-opacity-10 border-[1.5px] border-zinc-600 max-w-[1296px] max-md:p-8 max-sm:p-5">


        <div className="flex justify-center mb-16 max-md:mb-10 max-sm:mb-8">
          <MasisLogo />
        </div>

        <HeroSection />

        <div className="flex gap-10 justify-center items-center mt-16 max-md:mt-10 max-sm:flex-col max-sm:gap-5">
          <ActionButtons />
        </div>
      </section>
    </main>
  );
};

export default MasisLandingPage;
