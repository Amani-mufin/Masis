"use client"

import React from "react";
import Image from "next/image";

const SocialLinks: React.FC = () => {
  return (
    <div className="self-center flex w-[754px] max-w-full flex-col items-stretch mt-[80px] max-md:mt-10">
      <div className="self-center flex w-80 max-w-full items-center gap-[40px_100px] justify-between">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="bg-[rgba(14,9,39,1)] self-stretch flex min-h-[90px] items-center justify-center w-[90px] h-[90px] my-auto px-5 py-[21px] rounded-2xl hover:bg-[rgba(30,20,70,1)] transition-colors duration-200"
        >
          <Image
            width={"49"}
            height={"49"}
            src="/X-icon.png"
            alt="Twitter"
            className="aspect-[1] object-contain w-[49px] self-stretch my-auto"
          />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="bg-[rgba(14,9,39,1)] self-stretch flex min-h-[90px] items-center justify-center w-[90px] h-[90px] my-auto px-5 py-[21px] rounded-2xl hover:bg-[rgba(30,20,70,1)] transition-colors duration-200"
        >
          <Image
            width={"49"}
            height={"49"}
            src="/instagram-icon.png"
            alt="LinkedIn"
            className="aspect-[1] object-contain w-[49px] self-stretch my-auto"
          />
        </a>
      </div>
      <p className="text-[rgba(217,217,217,1)] text-xl font-normal text-center mt-[35px] max-md:max-w-full">
        Connect with us on our socials and be part of MASIS AI
      </p>
    </div>
  );
};

export default SocialLinks;

