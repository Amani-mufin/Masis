"use client"

import { Logo } from '@/components'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm';
import { useState } from 'react';
import "../globals.css"
import InputField from '@/components/InputField';
import Link from 'next/link';

const ChangePassword = () => {


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
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row h-[100vh] overflow-x-hidden">

      <div className="relative min-h-[400px] md:min-h-screen md:w-1/2 order-first md:order-last">
        <Image
          src="/forget_passwordImg.png"
          alt="Log In"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-[10px] left-[50%] transform -translate-x-1/2 flex gap-[190px] flex-col items-center justify-center w-full px-4">
          <Logo />
          <div className="flex flex-col md:gap-[30px] mt-10 md:mt-0 md:absolute md:top-[500px] md:left-[50%] md:transform md:-translate-x-1/2 md:w-[600px] text-white">
            <h2 className="text-[32px] md:text-[84px] font-bold leading-[92%] text-left">
              Hello,
              <span className="block text-left">Reconnect the AI mag!c</span>
            </h2>
            <p className="text-[10px] md:text-[22px] font-medium text-left">
              Lorem ipsum dolor sit amet consectetur. Morbi sit et ut venenatis tortor vel.
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center relative gap-[50px] items-center w-full md:w-1/2 bg-gray-50 mt-2 py-0 md:px-4 sm:px-6">
        <div className='text-[#512B9E] text-[10px] md:text-[16px] text-right absolute self-end right-[5px] md:right-[67px] top-10 cursor-pointer font-medium'><Link href="/signup">Create  Account</Link></div>
        <div className="w-full flex  items-center justify-center  md:h-[924px] my-[20px] px-[44px] py-6 bg-white shadow-custom">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-[45px] w-full max-w-[445px] mx-auto"
          >
            <div className="flex flex-col items-center gap-[5px] w-full mt-5 md:mt-0">
              <h1 className="text-black text-center md:text-[32px] text-[14px] max-sm:text-[17px]">
                Forgot Password
              </h1>
              <p className="text-[#727272] text-center text-[12px] md:text-lg max-sm:text-[10px]">
                Let’s help you reset your password  </p>
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
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full h-[50px] text-white bg-[#512B9E] rounded-[5px]  text-[14px] font-semibold">Continue</button>
            <div className=" px-4 text-[10px] md:text-[14px] font-medium text-[#512B9E]">
              <Link href="/login"> Back to login</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default ChangePassword
