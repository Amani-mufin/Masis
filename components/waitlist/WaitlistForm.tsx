"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import "../../app/globals.css";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const saveEmailToCSV = async (email: string) => {
    const timestamp = new Date().toISOString();

    try {
      const response = await fetch('/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, timestamp }),
      });

      if (!response.ok) {
        throw new Error('Failed to save email');
      }
    } catch (error) {
      console.error('Error saving email:', error);
      throw error;
    }
  };

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
      await saveEmailToCSV(email);
      toast.success("Thank you for joining our waitlist!");
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <div className="glass-container bg-[rgba(255,255,255,0.08)] flex min-h-[303px] w-full flex-col items-start text-center justify-start gap-[10px] px-[117px] py-[38px] rounded-[23px] border-2 border-solid border-transparent border-image-[linear-gradient(107deg,#5a5a5a_15%,#fff_25%,#474747_34%,#474747_53%,#fff_64%,#5f5e5e_72%,#fff_89%,#989898_95%)_1] backdrop-blur-[31.7px] max-md:max-w-full max-md:px-5">
        <div className="flex max-w-full w-[754px] flex-col items-stretch mx-auto">
          <div className="w-full text-[rgba(217,217,217,1)] max-md:max-w-full">
            <h2 className="text-[40px] font-bold max-md:max-w-full">
              Join our waitlist!
            </h2>
            <p className="text-xl font-medium mt-3 max-md:max-w-full">
              Be among the first to experience{" "}
              <span className="font-bold">MASIS</span> and unlock the power of AI.
              Sign up for our waitlist and gain early access.
            </p>
          </div>

          <div className="relative self-center mt-[53px] max-md:max-w-full max-md:flex-col max-md:mt-10">
            <div className="flex items-center gap-4 text-base font-medium">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="self-stretch bg-[rgba(3,0,19,1)] shadow-[23px_83px_24px_rgba(255,255,255,0)] w-[144px] min-h-[24px] md:min-w-60 md:min-h-[60px] text-[#989898] my-auto py-[8px] px-[4px] md:px-[22px] md:py-[21px] rounded-[100px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-[#5F0F76]"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-stretch bg-[rgba(219,218,221,1)] shadow-[23px_83px_24px_rgba(255,255,255,0)] min-h-[24px] md:min-h-[60px] text-[#131212] my-auto px-[4px] py-[8px] md:px-[22px] md:py-[21px] rounded-[40px] md:rounded-[100px] max-md:px-5 hover:bg-[#c0bfc2] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed md:w-[144px] md:text-base font-medium"
                aria-label="Join waitlist"
              >
                {isSubmitting ? "Submitting..." : "Join waitlist"}
              </button>
            </div>

          </div>
        </div>
      </div>


      {typeof window !== "undefined" && showModal && (
        <div
          className="modal-border absolute z-50 -top-8 left-1/2 transform -translate-x-1/2 mt-2 w-[268px] h-[50px] md:w-[569px] md:h-[126px] text-white flex items-center justify-center text-[15px] font-medium text-center px-6 transition-opacity duration-500 ease-in-out opacity-100 backdrop-blur-[31.7px]"
        >
          <p className="text-xs md:text-base">
            We&apos;ve added {email} to our waitlist. We&apos;ll let you know when MASIS AI is ready.
          </p>
        </div>
      )}
    </form>
  );
};

export default WaitlistForm;



