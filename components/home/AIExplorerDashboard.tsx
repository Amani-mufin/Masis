"use client";

import React, { useState } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import CategoryDropdown from "./CategoryDropDown";
import FeaturedAISection from "./FeaturedAISelection";
import AICard from "./AICard";
import ChatBotButton from "./ChatButton";
import MobileNavbar from "./MobileNav";

const AIExplorerDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // AI card data
  const aiCards = [
    {
      title: "Chat GPT",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a8f83a22ad88ffa8ac0fbe73ab12d70170b48e4",
      altText: "Chat GPT",
      badgeText: "Free",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "Pecan AI",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4163741039be7692a6331a2b392099b79f7702f",
      altText: "Pecan AI",
      badgeText: "Free",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "Dataiku",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/70bc6eea83207091f6ac31ac79ef54b0e2ccf476",
      altText: "Dataiku",
      badgeText: "Pro",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "H20.ai",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b86bef8788451ec70e44655247cac5992af0ba97",
      altText: "H20.ai",
      badgeText: "Pro",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "NVIDIA",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fc33f4fd489636768e2c4ace605baf272f9a6a2e",
      altText: "NVIDIA",
      badgeText: "Free",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "TensorFlow",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9cc1b1ab8ef9defcb05ad4cfb93ec2a73a13b04c",
      altText: "TensorFlow",
      badgeText: "Pro",
      rating: "4.95",
      hasComments: true,
    },
    {
      title: "Amazon Sagemaker",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e24f314d6de24cf9fc00347f39ebc7ad24fc0930",
      altText: "Amazon Sagemaker",
      badgeText: "Pro",
      hasComments: false,
    },
    {
      title: "Gemini.ai",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f",
      altText: "Gemini.ai",
      badgeText: "Free",
      hasComments: false,
    },
    {
      title: "Rainbird",
      description:
        "This is a new AI system that lets you generate stunning art of yourself from text description.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5d652a484c07b9e5c840c81cdefaba50d3865269",
      altText: "Rainbird",
      badgeText: "Pro",
      hasComments: false,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Silkscreen&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col min-h-screen bg-neutral-900">
        <MobileNavbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex gap-4 p-4 flex-1">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="relative flex-1 bg-white rounded-3xl max-sm:rounded-xl">
            <Header />
            <CategoryDropdown />
            <FeaturedAISection />
            <section className="grid gap-6 p-4 mt-5 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[repeat(2,1fr)]">
              {aiCards.map((card, index) => (
                <AICard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  altText={card.altText}
                  badgeText={card.badgeText}
                  rating={card.rating}
                  hasComments={card.hasComments}
                />
              ))}
            </section>
          </main>
          <ChatBotButton />
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 max-sm:block hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );
};

export default AIExplorerDashboard;
