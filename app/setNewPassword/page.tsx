"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components";
import Image from "next/image";

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

const PasswordResetForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: PasswordFormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Password reset successful!");
    } catch (error) {
      console.error("Error resetting password:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Reconnect the AI mag!c
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-[400px]">
            <header>
              <h1 className="md:text-[32px] text-[18px] text-[#131212] text-center font-medium">
                Set new password
              </h1>
              <p className=" text-[10px]  md:text-lg text-center">
                <span className="text-[#727272]">Must be at least 8 characters</span>
              </p>
            </header>
            <div className="w-full">
              <div className="mb-4">
                <PasswordInput
                  label="Password"
                  id="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4">
                <PasswordInput
                  label="Confirm Password"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="cursor-pointer w-full bg-[#512B9E] hover:bg-[#44126A] md:h-[58px] md:mt-[40px]">
                {isSubmitting ? "Resetting..." : "Reset password"}
              </Button>
            </div>

            <Link href="/login" className="text-center text-[15px] cursor-pointer text-[#512B9E] hover:underline">
              Back to Log In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetForm
