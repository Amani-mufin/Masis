import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
  endIcon?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  endIcon,
  type = "text",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[7.712px] w-full">
      <div className="flex items-center gap-[8.484px]">
        <div>{icon}</div>
        <div className="text-[#727272] text-[15px]">{label}</div>
      </div>
      <div className="flex h-[59px] items-center justify-between w-full bg-white shadow-[-23.137px_104.116px_30.078px_0px_rgba(153,153,153,0.00),-14.653px_66.326px_26.993px_0px_rgba(153,153,153,0.01),-8.484px_37.019px_23.137px_0px_rgba(153,153,153,0.05),-3.856px_16.967px_16.967px_0px_rgba(153,153,153,0.09),-0.771px_3.856px_9.255px_0px_rgba(153,153,153,0.10)] px-[11.568px] py-[13.882px]">
        <input
          type={type}
          className="w-full text-[#727272] text-[15px] bg-transparent border-[nonepx] outline-none"
          {...props}
        />
        {endIcon && <div>{endIcon}</div>}
      </div>
    </div>
  );
};

export default InputField;