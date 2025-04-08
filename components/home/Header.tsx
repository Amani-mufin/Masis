"use client";

import React from "react";

const Header: React.FC = () => {
  const notificationIcon = `<svg id="Notification" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification"> <rect width="40" height="40" rx="20" fill="#FDFDFD"></rect> <path d="M17.367 10.25H19.5C19.6989 10.25 19.8897 10.329 20.0303 10.4697C20.171 10.6103 20.25 10.8011 20.25 11C20.25 11.1989 20.171 11.3897 20.0303 11.5303C19.8897 11.671 19.6989 11.75 19.5 11.75H17.4C16.268 11.75 15.463 11.75 14.834 11.802C14.214 11.852 13.829 11.949 13.524 12.104C12.9126 12.4156 12.4156 12.9126 12.104 13.524C11.949 13.829 11.853 14.214 11.802 14.834C11.751 15.464 11.75 16.268 11.75 17.4V22.6C11.75 23.733 11.75 24.537 11.802 25.166C11.852 25.786 11.949 26.171 12.104 26.476C12.4156 27.0874 12.9126 27.5844 13.524 27.896C13.829 28.051 14.214 28.147 14.834 28.198C15.464 28.249 16.268 28.25 17.4 28.25H22.6C23.733 28.25 24.537 28.25 25.166 28.198C25.786 28.148 26.171 28.051 26.476 27.896C27.0874 27.5844 27.5844 27.0874 27.896 26.476C28.051 26.171 28.147 25.786 28.198 25.166C28.249 24.536 28.25 23.732 28.25 22.6V20.5C28.25 20.3011 28.329 20.1103 28.4697 19.9697C28.6103 19.829 28.8011 19.75 29 19.75C29.1989 19.75 29.3897 19.829 29.5303 19.9697C29.671 20.1103 29.75 20.3011 29.75 20.5V22.633C29.75 23.725 29.75 24.591 29.693 25.288C29.635 26.002 29.513 26.605 29.233 27.157C28.7774 28.0505 28.0507 28.7768 27.157 29.232C26.605 29.513 26.002 29.635 25.288 29.693C24.591 29.75 23.725 29.75 22.633 29.75H17.367C16.275 29.75 15.409 29.75 14.712 29.693C13.998 29.635 13.395 29.513 12.844 29.233C11.9501 28.7776 11.2234 28.0509 10.768 27.157C10.487 26.605 10.365 26.002 10.307 25.288C10.25 24.591 10.25 23.725 10.25 22.633V17.367C10.25 16.275 10.25 15.409 10.307 14.712C10.365 13.998 10.487 13.395 10.767 12.844C11.2227 11.95 11.9498 11.2232 12.844 10.768C13.394 10.487 13.998 10.365 14.712 10.307C15.409 10.25 16.275 10.25 17.367 10.25ZM22.75 13.75C22.75 13.2904 22.8405 12.8352 23.0164 12.4106C23.1923 11.986 23.4501 11.6001 23.7751 11.2751C24.1001 10.9501 24.486 10.6923 24.9106 10.5164C25.3352 10.3405 25.7904 10.25 26.25 10.25C26.7096 10.25 27.1648 10.3405 27.5894 10.5164C28.014 10.6923 28.3999 10.9501 28.7249 11.2751C29.0499 11.6001 29.3077 11.986 29.4836 12.4106C29.6595 12.8352 29.75 13.2904 29.75 13.75C29.75 14.6783 29.3813 15.5685 28.7249 16.2249C28.0685 16.8813 27.1783 17.25 26.25 17.25C25.3217 17.25 24.4315 16.8813 23.7751 16.2249C23.1187 15.5685 22.75 14.6783 22.75 13.75Z" fill="#595959"></path> </svg>`;

  return (
    <header className="px-4 py-8 border-b border-solid border-b-stone-300 max-sm:p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-950 max-sm:text-base">
          Welcome Delap!! 
        </h2>
        <div className="hidden max-sm:flex gap-4 items-center">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48abee43d63a61b7d02ba3018b6bc978848f38e" className="w-9 h-9 rounded-full" alt="Profile" />
          <button className="px-3.5 py-2 text-xs text-white rounded-lg bg-purple-800">
            Submit AI
          </button>
        </div>
      </div>
      <p className="mb-5 text-xl text-[#01060A] max-sm:text-base max-sm:text-[12px] ">
        let's explore the AI Universe
      </p>
      <div className="flex absolute gap-7 items-center right-[22px] top-[22px] max-sm:hidden">
        <button className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
          <div dangerouslySetInnerHTML={{ __html: notificationIcon }} />
        </button>
        <div className="flex gap-7 items-center max-sm:flex-col max-sm:gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48abee43d63a61b7d02ba3018b6bc978848f38e"
            className="w-9 h-9 rounded-full"
            alt="Profile"
          />
          <button className="px-3.5 py-2 text-xs text-white rounded-lg max-sm:w-full bg-purple-800">
            Submit AI
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
