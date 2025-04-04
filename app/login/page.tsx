



import { Logo } from '@/components'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm';
import "../globals.css"

const SignUp = () => {
  return (
    <div className="min-h-screen w-full flex h-[100vh]">


      <div className="flex flex-col justify-center items-center w-full max-h-screen overflow-hidden md:w-1/2 bg-gray-50 py-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[670px] px-8 py-6 bg-white shadow-custom">
          <LoginForm />
        </div>
      </div>


      <div className="relative min-h-screen hidden md:flex md:w-1/2 items-center justify-center">
        <Image
          src="/login.png"
          alt="Sign Up"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-[10px] left-[50%] transform -translate-x-1/2 flex flex-col items-center justify-center text-white">
          <Logo />
          <div className="flex flex-col items-center justify-center absolute gap-[30px] top-[500px] w-[600px]">
            <h2 className="text-[84px] font-bold leading-[92%]">Hello, welcome Back!</h2>
            <p className="text-[22px] font-medium ">Resume your AI journey seamlessly. Log in to access your saved projects, favorite tools, and personalized AI recommendations.</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default SignUp
