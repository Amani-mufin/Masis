"use client";

import { useState } from "react";

const FeaturedAISection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Free", "Paid"];

  return (
    <div className="flex justify-between items-center m-2 md:m-4 flex-wrap">
      <h2 className="text-2xl font-bold text-neutral-900">Featured AI</h2>
      <div className="flex  md:gap-2.5 max-sm:mt-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-colors ${activeTab === tab
              ? "bg-[#2F1183] text-white"
              : "bg-white text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAISection;
