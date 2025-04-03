"use client"

import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  icon,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col items-start gap-[7.712px] w-full">
      <div className="flex items-start gap-[8.484px]">
        <div>{icon}</div>
        <div className="text-[#727272] text-[15px] font-light">{label}</div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="text-[#727272] text-[15px] font-normal h-[59px] w-full shadow-[-23.137px_104.116px_30.078px_0_rgba(153,153,153,0.00),-14.653px_66.326px_26.993px_0_rgba(153,153,153,0.01),-8.484px_37.019px_23.137px_0_rgba(153,153,153,0.05),-3.856px_16.967px_16.967px_0_rgba(153,153,153,0.09),-0.771px_3.856px_9.255px_0_rgba(153,153,153,0.10)] box-border bg-white px-[11.568px] py-[13.882px] outline-none"
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormField;
