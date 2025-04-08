"use client";

import React from "react";

const CategoryDropdown: React.FC = () => {
  return (
    <div className="m-4 bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] w-[184px]">
      <button className="flex justify-center items-center p-2.5 text-base bg-neutral-200 text-neutral-900 w-full">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="164" height="20" viewBox="0 0 164 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-icon"> <text fill="#131212" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="500" letter-spacing="0.01em"><tspan x="0.544922" y="15.4688">Categories</tspan></text> <path fill-rule="evenodd" clip-rule="evenodd" d="M156.384 14.2363L163.455 7.16508L161.687 5.39758L155.5 11.5851L149.312 5.39758L147.545 7.16508L154.616 14.2363C154.851 14.4707 155.168 14.6023 155.5 14.6023C155.831 14.6023 156.149 14.4707 156.384 14.2363Z" fill="#131212"></path> </svg>`,
          }}
        />
      </button>
    </div>
  );
};

export default CategoryDropdown;
