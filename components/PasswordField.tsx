"use client"

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface PasswordFieldProps {
  name: string;
  label: string;
  icon: React.ReactNode;
  eyeIcon: React.ReactNode;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  label,
  icon,
  eyeIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-start gap-[7.712px] w-full">
      <div className="flex items-start gap-[8.484px]">
        <div>{icon}</div>
        <div className="text-[#727272] text-[15px] font-light">{label}</div>
      </div>
      <div className="flex h-[59px] items-center justify-between w-full shadow-[-23.137px_104.116px_30.078px_0_rgba(153,153,153,0.00),-14.653px_66.326px_26.993px_0_rgba(153,153,153,0.01),-8.484px_37.019px_23.137px_0_rgba(153,153,153,0.05),-3.856px_16.967px_16.967px_0_rgba(153,153,153,0.09),-0.771px_3.856px_9.255px_0_rgba(153,153,153,0.10)] box-border bg-white px-[11.568px] py-[13.882px]">
        <input
          type={showPassword ? "text" : "password"}
          className="text-[#727272] text-[15px] font-normal w-full bg-transparent border-none outline-none"
          placeholder="Enter your password"
          {...register(name)}
        />
        <div onClick={togglePasswordVisibility} className="cursor-pointer">
          {eyeIcon}
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default PasswordField;
