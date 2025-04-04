import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="bg-white self-center flex  items-center  w-[104px] md:w-[187px] max-w-full flex-col whitespace-nowrap justify-center px-[5px] md:px-[26px] py-2.5 rounded-[35px] max-md:px-5">
      <div className="flex w-full items-center justify-center gap-[5px] mx-auto text-center md:gap-[9px]">
        <div className="bg-[#512B9E] self-stretch md:min-h-[47px] min-h-[22px] md:text-3xl text-sm text-white font-normal tracking-[0.3px] w-12 my-auto px-2 md:px-2.5 py-1 rounded-[9px] font-[silkscreen]">
          M
        </div>
        <div className="text-[#5F0F76]  text-[14px] md:text-[25px] font-bold self-stretch my-auto">
          MASIS
        </div>
      </div>
    </div>
  );
};

export default Logo;
