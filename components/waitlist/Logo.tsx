import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="bg-white self-center flex w-[187px] max-w-full flex-col items-stretch whitespace-nowrap justify-center px-[26px] py-2.5 rounded-[35px] max-md:px-5">
      <div className="flex w-full items-center gap-[9px]">
        <div className="bg-[#512B9E] self-stretch min-h-[47px] text-3xl text-white font-normal tracking-[0.3px] w-12 my-auto px-2.5 py-1 rounded-[9px] font-[silkscreen]">
          M
        </div>
        <div className="text-[#5F0F76] text-[25px] font-bold self-stretch my-auto">
          MASIS
        </div>
      </div>
    </div>
  );
};

export default Logo;
