"use client";

import React from "react";

interface MobileNavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <nav className="hidden max-sm:flex justify-between items-center w-full bg-neutral-900 px-4 py-3 text-white">
      <div className="text-xl font-bold">MASIS</div>
      <div className="flex items-center gap-2">
        <span className="text-base">Home</span>
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center"
          aria-label="Toggle sidebar"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
