"use client";

import React, { useState, } from "react";
import { toast } from "sonner";
import "../../app/globals.css";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Thank you for joining our waitlist!");
      setShowModal(true); // Show success modal

      // Hide modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setEmail(""); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="glass-container bg-[rgba(255,255,255,0.08)] flex min-h-[303px] w-full flex-col items-start text-center justify-start gap-[10px] px-[117px] py-[38px] rounded-[23px] border-2 border-solid border-transparent border-image-[linear-gradient(107deg,#5a5a5a_15%,#fff_25%,#474747_34%,#474747_53%,#fff_64%,#5f5e5e_72%,#fff_89%,#989898_95%)_1] backdrop-blur-[31.7px] max-md:max-w-full max-md:px-5">
        <div className="flex max-w-full w-[754px] flex-col items-stretch mx-auto">
          <div className=" w-full text-[rgba(217,217,217,1)] max-md:max-w-full">
            <h2 className="text-[40px] font-bold max-md:max-w-full">Join our waitlist!</h2>
            <p className="text-xl font-medium mt-3 max-md:max-w-full">
              Be among the first to experience <span className="font-bold">MASIS</span> and unlock the power of AI. Sign up for our waitlist and gain early access.
            </p>
          </div>

          <div className="self-center flex items-center gap-4 text-base font-medium mt-[53px] max-md:max-w-full max-md:flex-col max-md:mt-10">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="self-stretch bg-[rgba(3,0,19,1)] shadow-[23px_83px_24px_rgba(255,255,255,0)] min-w-60 min-h-[60px] text-[#989898] w-[330px] my-auto px-[22px] py-[21px] rounded-[100px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-[#5F0F76]"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="self-stretch bg-[rgba(219,218,221,1)] shadow-[23px_83px_24px_rgba(255,255,255,0)] min-h-[60px] text-[#131212] my-auto px-[22px] py-[21px] rounded-[100px] max-md:px-5 hover:bg-[#c0bfc2] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              aria-label="Join waitlist"
            >
              {isSubmitting ? "Submitting..." : "Join waitlist"}
            </button>
          </div>

          {/* Success Modal with fade-in and fade-out effect */}
          {showModal && (
            <div className="self-center mt-6 w-[569px] h-[126px] bg-[#0E0927] text-white flex items-center justify-center rounded-[24px] text-[15px] font-medium text-center px-6 transition-opacity duration-500 ease-in-out opacity-100 animate-fadeInOut">
              <p>We’ve added {email} to our waitlist. We’ll let you know when Viveo AI is ready.</p>
            </div>
          )}
        </div>
      </div>
    </form>


  );
};

export default WaitlistForm;



