"use client"

import React, {
  useRef,
  useState,
  KeyboardEvent,
  ChangeEvent,
  useEffect,
} from "react";

interface OtpInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Only accept single characters
    if (value.length > 1) {
      return;
    }

    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete if all inputs are filled
    if (newOtp.every((val) => val) && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Handle arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Only process if pasted data matches expected length
    if (pastedData.length !== length || !/^\d+$/.test(pastedData)) {
      return;
    }

    const newOtp = pastedData.split("");
    setOtp(newOtp);

    // Focus last input
    inputRefs.current[length - 1]?.focus();

    if (onComplete) {
      onComplete(pastedData);
    }
  };

  return (
    <div className="flex items-center justify-center gap-[32.5px] w-full max-sm:gap-4">
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-5xl text-[#131212] w-[87px] h-[87px] bg-white rounded-[6.96px] border-[1.74px] border-[#6A1183] max-sm:text-4xl max-sm:w-[70px] max-sm:h-[70px]"
        >
          <input
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="w-full h-full text-center bg-transparent outline-none"
            aria-label={`OTP digit ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;