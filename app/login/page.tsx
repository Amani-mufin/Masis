
import { Logo } from '@/components'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm';
import "../globals.css"

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row h-[100vh] overflow-x-hidden">

      <div className="relative min-h-[400px] md:min-h-screen md:w-1/2 order-first md:order-last">
        <Image
          src="/login.png"
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
              <span className="block text-left">welcome Back!</span>
            </h2>
            <p className="text-[10px] md:text-[22px] font-medium text-left">
              Resume your AI journey seamlessly. Log in to access your saved projects, favorite tools, and personalized AI recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-50 mt-2 py-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[670px] px-8 py-6 bg-white shadow-custom">
          <LoginForm />
        </div>
      </div>

    </div>
  );
}

export default Login
