import React, { useState } from "react";

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  id,
  placeholder = "****************",
  onChange,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-[7.712px] w-full">
      <div className="flex items-center gap-[8.484px]">
        <div>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18.51px] h-[18.51px]"
          >
            <path
              d="M9.25481 13.1109C8.84572 13.1109 8.45339 12.9484 8.16412 12.6592C7.87485 12.3699 7.71234 11.9776 7.71234 11.5685C7.71234 10.7124 8.39874 10.026 9.25481 10.026C9.66389 10.026 10.0562 10.1885 10.3455 10.4778C10.6348 10.7671 10.7973 11.1594 10.7973 11.5685C10.7973 11.9776 10.6348 12.3699 10.3455 12.6592C10.0562 12.9484 9.66389 13.1109 9.25481 13.1109ZM13.8822 15.4246V7.71232H4.62742V15.4246H13.8822ZM13.8822 6.16985C14.2913 6.16985 14.6836 6.33236 14.9729 6.62163C15.2621 6.9109 15.4246 7.30323 15.4246 7.71232V15.4246C15.4246 15.8337 15.2621 16.226 14.9729 16.5153C14.6836 16.8046 14.2913 16.9671 13.8822 16.9671H4.62742C4.21834 16.9671 3.826 16.8046 3.53674 16.5153C3.24747 16.226 3.08496 15.8337 3.08496 15.4246V7.71232C3.08496 6.85625 3.77136 6.16985 4.62742 6.16985H5.39865V4.62739C5.39865 3.60468 5.80492 2.62385 6.52809 1.90068C7.25126 1.17751 8.23209 0.77124 9.25481 0.77124C9.7612 0.77124 10.2626 0.870983 10.7305 1.06477C11.1983 1.25856 11.6234 1.5426 11.9815 1.90068C12.3396 2.25876 12.6236 2.68386 12.8174 3.15171C13.0112 3.61956 13.111 4.121 13.111 4.62739V6.16985H13.8822ZM9.25481 2.3137C8.64118 2.3137 8.05268 2.55746 7.61878 2.99137C7.18488 3.42527 6.94111 4.01376 6.94111 4.62739V6.16985H11.5685V4.62739C11.5685 4.01376 11.3247 3.42527 10.8908 2.99137C10.4569 2.55746 9.86843 2.3137 9.25481 2.3137Z"
              fill="#727272"
            />
          </svg>
        </div>
        <label htmlFor={id} className="text-[#727272] text-[15px]">
          {label}
        </label>
      </div>
      <div className="flex h-[59px] items-center justify-between bg-white shadow-[-23.137px_104.116px_30.078px_0px_rgba(153,153,153,0.00),-14.653px_66.326px_26.993px_0px_rgba(153,153,153,0.01),-8.484px_37.019px_23.137px_0px_rgba(153,153,153,0.05),-3.856px_16.967px_16.967px_0px_rgba(153,153,153,0.09),-0.771px_3.856px_9.255px_0px_rgba(153,153,153,0.10)] px-3 py-3.5">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          className="w-full bg-transparent border-none outline-none text-[#131212] text-[15px]"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px]"
          >
            <path
              d="M8.76869 4.33307C9.08487 4.29646 9.4029 4.27818 9.72119 4.27832C13.2192 4.27832 16.0212 6.45557 17.2212 9.52832C16.9307 10.2757 16.5382 10.9794 16.0549 11.6193M5.61119 5.41757C4.08119 6.35132 2.89619 7.79807 2.22119 9.52832C3.42119 12.6011 6.22319 14.7783 9.72119 14.7783C11.1703 14.786 12.5931 14.3913 13.8312 13.6383M8.13119 7.93832C7.92224 8.14727 7.75649 8.39533 7.64341 8.66834C7.53033 8.94134 7.47213 9.23395 7.47213 9.52945C7.47213 9.82494 7.53033 10.1176 7.64341 10.3906C7.75649 10.6636 7.92224 10.9116 8.13119 11.1206C8.34014 11.3295 8.5882 11.4953 8.86121 11.6084C9.13421 11.7214 9.42682 11.7796 9.72232 11.7796C10.0178 11.7796 10.3104 11.7214 10.5834 11.6084C10.8564 11.4953 11.1045 11.3295 11.3134 11.1206"
              stroke="#595959"
              strokeWidth="1.54246"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.72119 3.52832L15.7212 15.5283"
              stroke="#595959"
              strokeWidth="1.54246"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;