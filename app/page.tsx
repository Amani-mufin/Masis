"use client"

import React from "react";
import { WaitlistForm, SocialLinks } from "@/components";
import Logo from "@/components/waitlist/Logo";

import Image from "next/image";

const Index: React.FC = () => {
  return (
    <>
      <title>MASIS AI - Join The AI Revolution</title>
      <meta
        name="description"
        content="Join the MASIS AI waitlist and be among the first to experience the power of AI."
      />


      <main className="bg-[rgba(23,21,24,1)] overflow-hidden  h-[100vh] w-full">
        <section className="flex flex-col relative min-h-[100vh] w-full items-center justify-center px-20 py-[84px] max-md:max-w-full max-md:px-5">
          <Image
            width={1011}
            height={1011}
            src="/background.png"
            alt="Background"
            className="absolute h-full w-full object-cover inset-0"
            priority
            aria-hidden="true"
          />

          <div className="relative flex w-full max-w-[1011px] flex-col items-stretch max-md:max-w-full z-10">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              <div className="self-center flex w-[863px] max-w-full flex-col items-stretch">
                <Logo />

                <h1 className="text-[rgba(233,219,236,1)] text-[85px] font-bold text-center mt-[47px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  Join The AI Revolution
                </h1>
              </div>

              <WaitlistForm />
            </div>
            <SocialLinks />
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
