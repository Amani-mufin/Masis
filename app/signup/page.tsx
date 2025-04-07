

import { Logo } from '@/components'
import Image from 'next/image'
import React from 'react'

import { SignUpForm } from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen w-full flex h-[100vh]">
      <div className="relative min-h-screen hidden md:flex md:w-1/2 items-center justify-center">
        <Image
          src="/signup_img.png"
          alt="Sign Up"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-[10px] left-[50%] transform -translate-x-1/2 flex flex-col items-center justify-center text-white">
          <Logo />
          <div className="flex flex-col items-center justify-center absolute top-[600px] w-[500px]">
            <h2 className="text-[84px] font-bold leading-[92%]">Hello, welcome!</h2>
            <p className="text-[22px] font-medium -ml-[80px]">Unlock the power of AI with a free account</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[96%] my-2 md:w-1/2 bg-gray-50 py-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[670px] px-8 py-6 bg-white shadow-lg rounded-lg">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp
