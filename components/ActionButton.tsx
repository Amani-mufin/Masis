"use client";
import React from "react";

const ActionButtons: React.FC = () => {
  return (
    <>
      <button
        className="flex items-center justify-center text-base text-white rounded border cursor-pointer border-neutral-500 h-[59px] w-[403px] max-sm:w-full hover:bg-white hover:bg-opacity-10 transition-colors"
        onClick={() => console.log("Create Account clicked")}
      >
        Create Account
      </button>
      <button
        className="flex items-center justify-center text-base text-white rounded border cursor-pointer bg-[linear-gradient(180deg,#512B9E_0%,#44126A_100%)] border-neutral-500 h-[59px] w-[403px] max-sm:w-full hover:opacity-90 transition-opacity"
        onClick={() => console.log("Log in clicked")}
      >
        Log in
      </button>
    </>
  );
};

export default ActionButtons;
