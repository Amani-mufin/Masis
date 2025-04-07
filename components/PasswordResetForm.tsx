"use client"

import React, { useState } from "react";
import OtpInput from "./OtpInput";

interface PasswordResetFormProps {
  email?: string;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  email = "delapka@gmail.com",
}) => {
  const [otp, setOtp] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [resendDisabled, setResendDisabled] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);

  const handleOtpComplete = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 4) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Handle password reset logic here
      console.log("Password reset submitted with OTP:", otp);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleResendOtp = () => {
    if (resendDisabled) return;

    // Disable resend button and start countdown
    setResendDisabled(true);
    setCountdown(30);

    // Simulate OTP resend
    console.log("Resending OTP to:", email);

    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[445px]">
      <header>
        <h1 className="text-[32px] text-[#131212] text-center font-medium">
          Password reset
        </h1>
        <p className="text-lg text-center">
          <span className="text-[#727272]">We sent an OTP to </span>
          <span className="text-[#131212]">{email}</span>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 w-full max-w-[445px] mt-[51px]"
      >
        <div className="flex flex-col items-center gap-10 w-full">
          <OtpInput length={4} onComplete={handleOtpComplete} />

          <button
            type="submit"
            disabled={isSubmitting || otp.length !== 4}
            className="flex items-center justify-center text-[#FEFEFE] text-[15px] h-[58px] w-full bg-[linear-gradient(180deg,#512B9E_0%,#44126A_100%)] rounded-[4.627px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Reset password"}
          </button>
        </div>

        <div className="text-[15px] text-[#595959] text-center">
          <span>Didn't receive the OTP? </span>
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={resendDisabled}
            className="text-[#512B9E] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {resendDisabled ? `Resend (${countdown}s)` : "Resend"}
          </button>
        </div>

        <button
          type="button"
          className="text-[15px] text-[#512B9E] text-center cursor-pointer"
          onClick={() => (window.location.href = "/login")}
        >
          Back to Log In
        </button>
      </form>
    </div>
  );
};

export default PasswordResetForm;