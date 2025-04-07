"use client"

import React, { useState } from "react";
import InputField from "@/components/InputField";
import Divider from "@/components/ui/Divider";
import SocialLogin from "./SocialLogin";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  const EmailIcon = () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[18.51px] h-[18.51px]"
    >
      <path
        d="M13.3033 2.12109H5.20534C4.23376 2.12109 3.30197 2.50705 2.61496 3.19406C1.92795 3.88107 1.54199 4.81286 1.54199 5.78444V12.7255C1.54199 13.2066 1.63675 13.683 1.82085 14.1274C2.00495 14.5719 2.27479 14.9757 2.61496 15.3159C3.30197 16.0029 4.23376 16.3889 5.20534 16.3889H13.3033C14.2742 16.3868 15.2048 16.0002 15.8914 15.3136C16.578 14.6271 16.9646 13.6965 16.9666 12.7255V5.78444C16.9646 4.81349 16.578 3.88288 15.8914 3.19631C15.2048 2.50974 14.2742 2.12313 13.3033 2.12109ZM10.4883 8.53773C10.1088 8.75413 9.67954 8.86793 9.24273 8.86793C8.80591 8.86793 8.37664 8.75413 7.99719 8.53773L2.71426 5.5068C2.78257 4.8939 3.07443 4.3277 3.53402 3.91649C3.9936 3.50529 4.58865 3.27794 5.20534 3.27794H13.3033C13.9195 3.27963 14.5136 3.50756 14.9728 3.91845C15.4321 4.32933 15.7244 4.89456 15.7943 5.5068L10.4883 8.53773Z"
        fill="#727272"
      />
    </svg>
  );

  const PasswordIcon = () => (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[18.51px] h-[18.51px]"
    >
      <path
        d="M9.25481 13.6256C8.84572 13.6256 8.45339 13.4631 8.16412 13.1738C7.87485 12.8845 7.71234 12.4922 7.71234 12.0831C7.71234 11.227 8.39874 10.5407 9.25481 10.5407C9.66389 10.5407 10.0562 10.7032 10.3455 10.9924C10.6348 11.2817 10.7973 11.674 10.7973 12.0831C10.7973 12.4922 10.6348 12.8845 10.3455 13.1738C10.0562 13.4631 9.66389 13.6256 9.25481 13.6256ZM13.8822 15.9393V8.22696H4.62742V15.9393H13.8822ZM13.8822 6.6845C14.2913 6.6845 14.6836 6.84701 14.9729 7.13628C15.2621 7.42555 15.4246 7.81788 15.4246 8.22696V15.9393C15.4246 16.3484 15.2621 16.7407 14.9729 17.03C14.6836 17.3192 14.2913 17.4817 13.8822 17.4817H4.62742C4.21834 17.4817 3.826 17.3192 3.53674 17.03C3.24747 16.7407 3.08496 16.3484 3.08496 15.9393V8.22696C3.08496 7.3709 3.77136 6.6845 4.62742 6.6845H5.39865V5.14204C5.39865 4.11933 5.80492 3.1385 6.52809 2.41533C7.25126 1.69216 8.23209 1.28589 9.25481 1.28589C9.7612 1.28589 10.2626 1.38563 10.7305 1.57942C11.1983 1.77321 11.6234 2.05725 11.9815 2.41533C12.3396 2.77341 12.6236 3.19851 12.8174 3.66636C13.0112 4.13421 13.111 4.63564 13.111 5.14204V6.6845H13.8822ZM9.25481 2.82835C8.64118 2.82835 8.05268 3.07211 7.61878 3.50601C7.18488 3.93992 6.94111 4.52841 6.94111 5.14204V6.6845H11.5685V5.14204C11.5685 4.52841 11.3247 3.93992 10.8908 3.50601C10.4569 3.07211 9.86843 2.82835 9.25481 2.82835Z"
        fill="#727272"
      />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[18.51px] h-[18.51px] cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      <path
        d="M8.99651 4.70083C9.32164 4.66319 9.64868 4.64439 9.97598 4.64453C13.573 4.64453 16.4543 6.88341 17.6883 10.0431C17.3895 10.8117 16.986 11.5353 16.489 12.1933M5.74963 5.81603C4.17632 6.77621 2.95778 8.26392 2.26367 10.0431C3.49764 13.2029 6.37896 15.4418 9.97598 15.4418C11.4661 15.4496 12.9292 15.0438 14.2023 14.2695M8.34097 8.40814C8.1261 8.623 7.95566 8.87808 7.83938 9.15882C7.7231 9.43955 7.66325 9.74044 7.66325 10.0443C7.66325 10.3482 7.7231 10.6491 7.83938 10.9298C7.95566 11.2105 8.1261 11.4656 8.34097 11.6805C8.55583 11.8953 8.81091 12.0658 9.09165 12.1821C9.37238 12.2983 9.67327 12.3582 9.97713 12.3582C10.281 12.3582 10.5819 12.2983 10.8626 12.1821C11.1434 12.0658 11.3984 11.8953 11.6133 11.6805"
        stroke="#595959"
        strokeWidth="1.54246"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.80566 3.87329L16.1454 16.213"
        stroke="#595959"
        strokeWidth="1.54246"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-[45px] w-full max-w-[445px] mx-auto"
    >
      <div className="flex flex-col items-center gap-[5px] w-full">
        <h1 className="text-black text-center md:text-[32px] text-[14px] max-sm:text-[28px]">
          Log In
        </h1>
        <p className="text-[#727272] text-center text-[12px] md:text-xl max-sm:text-lg">
          Fill in the spaces to Continue
        </p>
      </div>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-[35px] w-full">
          <div className="flex flex-col gap-[23px] w-full">
            <div className="flex flex-col gap-[24.679px] w-full">
              <InputField
                label="Email"
                icon={<EmailIcon />}
                type="email"
                placeholder="e.g. darylobinna129@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Password"
                icon={<PasswordIcon />}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endIcon={<EyeOffIcon />}
              />
            </div>
            <div className="text-right text-[15px] bg-[linear-gradient(180deg,#512B9E_0%,#44126A_100%)] bg-clip-text text-transparent cursor-pointer">
              Don't have an account?
            </div>
          </div>
          <button
            type="submit"
            className="h-[58px] w-full bg-[linear-gradient(180deg,#512B9E_0%,#44126A_100%)] text-[#FEFEFE] text-[15px] font-medium rounded-[4.627px]"
          >
            Sign In
          </button>
        </div>
        <div className="flex flex-col items-center gap-[51px] w-full">
          <SocialLogin isSignIn={true} />
        </div>
      </div>
      <div className="text-center text-[15px] bg-[linear-gradient(180deg,#512B9E_0%,#44126A_100%)] bg-clip-text text-transparent cursor-pointer mt-5">
        Forgot your password?
      </div>
    </form>
  );
};

export default LoginForm;






