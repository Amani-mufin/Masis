"use client"

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormValues } from "@/lib/validations/auth";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { SocialLogin } from "./SocialLogin";
import Image from "next/image";

// Consider importing SVGs as React components for better performance and ease of use.
import ProfileIcon from "@/components/assets/icons/profile.png";
import EmailIcon from "@/components/assets/icons/email.png";
import PasswordIcon from "@/components/assets/icons/password.png";
import EyeOffIcon from "@/components/assets/icons/eye-off.png";
// import ConfirmEyeOffIcon from "@/components/assets/icons/confirm-eye-off.svg";

export const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form submitted:", data);
    // Typically send data to your API here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[445px] h-[100vh] mx-auto">
        <div className="flex flex-col items-center gap-[45px] w-full">
          <div className="flex flex-col items-center gap-[5px] w-[320px] max-sm:w-full">
            <h1 className="text-[#131212] text-center text-[32px] font-medium max-sm:text-[28px]">
              Create Account
            </h1>
            <p className="text-[#727272] text-[18px] font-medium max-sm:text-lg font-[roboto]">
              Fill in the spaces to create an account
            </p>
          </div>
          <div className="flex flex-col items-start gap-12 w-full">
            <div className="flex flex-col items-start gap-[35px] w-full">
              <FormField
                name="fullName"
                label="Full name"
                placeholder="e.g. Daryl Obinna"
                icon={<Image src={ProfileIcon} alt="Profile Icon" width={24} height={24} />}
              />

              <FormField
                name="email"
                label="Email"
                placeholder="e.g. darylobinna129@gmail.com"
                icon={<Image src={EmailIcon} alt="Email Icon" width={24} height={24} />}
                type="email"
              />

              <PasswordField
                name="password"
                label="Password"
                icon={<Image src={PasswordIcon} alt="Password Icon" width={24} height={24} />}
                eyeIcon={<Image src={EyeOffIcon} alt="Eye Off Icon" width={24} height={24} />}
              />

              <PasswordField
                name="confirmPassword"
                label="Confirm Password"
                icon={<Image src={PasswordIcon} alt="Confirm Password Icon" width={24} height={24} />}
                eyeIcon={<Image src={EyeOffIcon} alt="Confirm Eye Off Icon" width={24} height={24} />}
              />
            </div>

            <div className="self-stretch text-right text-[15px] font-normal">
              <a href="#" className="hover:underline">
                Have an account?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="h-[58px] font-[roboto] w-full bg-[#512B9E] gap-[7.712px] self-stretch text-[#FEFEFE] text-[18px] font-medium cursor-pointer px-[11.568px] py-[13.882px] rounded-[4.627px] hover:bg-[#2a2a2a] transition-colors"
          >
            Sign Up
          </button>

          <SocialLogin />
        </div>
      </form>
    </FormProvider>
  );
};
