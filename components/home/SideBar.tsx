"use client";

import React from "react";
import { NavItemProps } from "./types";

interface SidebarProps {
  isOpen?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <button className="flex gap-4 items-center px-3.5 py-2.5 rounded-md text-stone-300 w-full text-left">
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text-base">{label}</span>
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true }) => {
  const dashboardIcon = `<svg id="si:dashboard-fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon" style="width: 24px; height: 24px"> <path d="M5.6 2C4.91044 2 4.24912 2.27393 3.76152 2.76152C3.27393 3.24912 3 3.91044 3 4.6V9.4C3 9.74144 3.06725 10.0795 3.19791 10.395C3.32858 10.7104 3.52009 10.997 3.76152 11.2385C4.24912 11.7261 4.91044 12 5.6 12H8.4C9.08956 12 9.75088 11.7261 10.2385 11.2385C10.7261 10.7509 11 10.0896 11 9.4V4.6C11 3.91044 10.7261 3.24912 10.2385 2.76152C9.75088 2.27393 9.08956 2 8.4 2H5.6ZM5.6 14C4.91044 14 4.24912 14.2739 3.76152 14.7615C3.27393 15.2491 3 15.9104 3 16.6V19.4C3 20.0896 3.27393 20.7509 3.76152 21.2385C4.24912 21.7261 4.91044 22 5.6 22H8.4C9.08956 22 9.75088 21.7261 10.2385 21.2385C10.7261 20.7509 11 20.0896 11 19.4V16.6C11 15.9104 10.7261 15.2491 10.2385 14.7615C9.75088 14.2739 9.08956 14 8.4 14H5.6ZM15.6 2C14.9104 2 14.2491 2.27393 13.7615 2.76152C13.2739 3.24912 13 3.91044 13 4.6V7.4C13 8.08956 13.2739 8.75088 13.7615 9.23848C14.2491 9.72607 14.9104 10 15.6 10H18.4C18.7414 10 19.0795 9.93275 19.395 9.80209C19.7104 9.67142 19.997 9.47991 20.2385 9.23848C20.4799 8.99705 20.6714 8.71042 20.8021 8.39498C20.9327 8.07953 21 7.74144 21 7.4V4.6C21 4.25856 20.9327 3.92047 20.8021 3.60502C20.6714 3.28958 20.4799 3.00295 20.2385 2.76152C19.997 2.52009 19.7104 2.32858 19.395 2.19791C19.0795 2.06725 18.7414 2 18.4 2H15.6ZM15.6 12C14.9104 12 14.2491 12.2739 13.7615 12.7615C13.2739 13.2491 13 13.9104 13 14.6V19.4C13 20.0896 13.2739 20.7509 13.7615 21.2385C14.2491 21.7261 14.9104 22 15.6 22H18.4C18.7414 22 19.0795 21.9327 19.395 21.8021C19.7104 21.6714 19.997 21.4799 20.2385 21.2385C20.4799 20.997 20.6714 20.7104 20.8021 20.395C20.9327 20.0795 21 19.7414 21 19.4V14.6C21 14.2586 20.9327 13.9205 20.8021 13.605C20.6714 13.2896 20.4799 13.003 20.2385 12.7615C19.997 12.5201 19.7104 12.3286 19.395 12.1979C19.0795 12.0673 18.7414 12 18.4 12H15.6Z" fill="#6A1183"></path> </svg>`;

  const searchIcon = `<svg id="mingcute:search-line" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon" style="width: 24px; height: 24px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2ZM4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5Z" fill="#FF2D55"></path> </svg>`;

  const settingsIcon = `<svg id="tdesign:setting-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon" style="width: 24px; height: 24px"> <path d="M9.18045 1H14.8205L15.4675 4.237C16.0031 4.47706 16.5125 4.77197 16.9875 5.117L20.1165 4.058L22.9365 8.942L20.4555 11.122C20.5154 11.7058 20.5154 12.2942 20.4555 12.878L22.9355 15.058L20.1165 19.942L16.9875 18.884C16.5125 19.2287 16.0031 19.5233 15.4675 19.763L14.8195 23H9.18045L8.53345 19.763C7.99776 19.5229 7.48837 19.228 7.01345 18.883L3.88445 19.942L1.06445 15.058L3.54545 12.878C3.48554 12.2942 3.48554 11.7058 3.54545 11.122L1.06545 8.942L3.88545 4.058L7.01345 5.116C7.48842 4.77131 7.9978 4.47674 8.53345 4.237L9.18045 1ZM10.8205 3L10.2785 5.705L9.75345 5.898C9.05769 6.15488 8.41102 6.52895 7.84145 7.004L7.41145 7.363L4.79645 6.478L3.61645 8.522L5.68845 10.343L5.59345 10.894C5.46901 11.6261 5.46901 12.3739 5.59345 13.106L5.68845 13.656L3.61545 15.478L4.79545 17.522L7.41145 16.637L7.84145 16.996C8.41102 17.4711 9.05769 17.8451 9.75345 18.102L10.2785 18.295L10.8205 21H13.1805L13.7225 18.295L14.2475 18.102C14.9432 17.8451 15.5899 17.4711 16.1595 16.996L16.5895 16.637L19.2055 17.522L20.3855 15.478L18.3135 13.657L18.4075 13.106C18.5319 12.3739 18.5319 11.6261 18.4075 10.894L18.3135 10.344L20.3855 8.522L19.2055 6.478L16.5895 7.363L16.1595 7.004C15.5899 6.52895 14.9432 6.15488 14.2475 5.898L13.7225 5.705L13.1805 3H10.8205ZM12.0005 9C11.2048 9 10.4417 9.31607 9.87913 9.87868C9.31652 10.4413 9.00045 11.2044 9.00045 12C9.00045 12.7956 9.31652 13.5587 9.87913 14.1213C10.4417 14.6839 11.2048 15 12.0005 15C12.7961 15 13.5592 14.6839 14.1218 14.1213C14.6844 13.5587 15.0005 12.7956 15.0005 12C15.0005 11.2044 14.6844 10.4413 14.1218 9.87868C13.5592 9.31607 12.7961 9 12.0005 9ZM7.00045 12C7.00045 10.6739 7.52724 9.40215 8.46492 8.46447C9.4026 7.52678 10.6744 7 12.0005 7C13.3265 7 14.5983 7.52678 15.536 8.46447C16.4737 9.40215 17.0005 10.6739 17.0005 12C17.0005 13.3261 16.4737 14.5979 15.536 15.5355C14.5983 16.4732 13.3265 17 12.0005 17C10.6744 17 9.4026 16.4732 8.46492 15.5355C7.52724 14.5979 7.00045 13.3261 7.00045 12Z" fill="#34C759"></path> </svg>`;

  const logoutIcon = `<svg id="fe:logout" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon" style="width: 24px; height: 24px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 5C21 3.9 20.1 3 19 3H11V5H19V19H11V21H19C20.1 21 21 20.1 21 19V5ZM6.824 11L9.36 8.464L7.946 7.05L2.996 12L7.946 16.95L9.36 15.536L6.824 13H13.41V11H6.824Z" fill="#FF3B30"></path> </svg>`;

  return (
    <nav
      className={`flex flex-col pt-4 bg-neutral-900 left-[nav] w-[321px] max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0 max-sm:z-50 max-sm:w-[250px] max-sm:shadow-xl max-sm:transition-transform max-sm:duration-300 ${isOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} max-sm:p-5`}
    >
      <div className="flex gap-2.5 items-center mb-14">
        <div className="flex justify-center items-center w-11 h-11">
          <div className="bg-[#512B9E] self-stretch md:min-h-[40px] min-h-[22px] md:text-2xl text-center text-sm text-white font-normal tracking-[0.3px] w-10  h-10 my-auto px-2 md:px-2.5 py-1 rounded-[9px] font-[silkscreen]">
            M
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">MASIS</h1>
      </div>
      <div className="flex flex-col gap-2.5">
        <NavItem icon={dashboardIcon} label="Home" />
        <NavItem icon={searchIcon} label="Search" />
        <NavItem icon={settingsIcon} label="Settings" />
      </div>
      <div className="px-3.5 py-2.5 mt-auto">
        <button className="flex gap-4 items-center text-stone-300">
          <div dangerouslySetInnerHTML={{ __html: logoutIcon }} />
          <span className="text-base">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
