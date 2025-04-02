import { Logo } from '@/components'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className="flex h-screen">
        <div className='relative w-1/2'>
          <Image
            src="/signup_img.png"
            alt="Sign Up"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute top-[10px] left-[50%]">
            <Logo/>
            <div className='flex flex-col'>
            <h2>Hello, welcome!</h2>
            </div>
          </div>
        </div>

        {/* Right half - Sign up form */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-white px-12">
          <div className="text-2xl font-semibold mb-2">Create Account</div>
          <div className="text-gray-600 mb-8">Fill in the spaces to create an account</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp