"use client";
import { HiChevronLeft } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import UserDropdown from "./UserDropdown";
import { useAuth } from "@/hooks/useAuth";
import { FaRegBell } from "react-icons/fa";
import { Badge } from "@heroui/react";

const DashHeader = ({ width, toggleSidebar }) => {

  const { user } = useAuth();

  return (
    <div
      style={{ marginLeft: width, transition: 'margin 0.3s', }}
      className={`bg-white fixed top-3 rounded-lg left-3 right-3 z-30 h-16 flex items-center ${width === 230 ? "justify-between" : "justify-between"} px-4 py-2 pl-0`}
    >
      <div className="flex items-center gap-2 px-4">
        {width === 90 &&
          <button
            onClick={toggleSidebar}
            className="min-w-6 h-6 grid place-content-center rounded-full border-2 border-brand/50 cursor-pointer"
          >
            <HiChevronLeft size={20} className="rotate-180" />
          </button>}

        <div>
          <p className="-mb-1">Welcome Back,</p>
          <h3 className="text-2xl font-semibold">{user?.firstName} {user?.lastName}</h3>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-2">
          <IoWalletOutline size={25} />
          <span className="mt-1">$276</span>
        </div>
        <Badge color="danger" content="5" shape="circle">
          <button className="p-2 bg-white rounded-full grid place-items-center">
            <FaRegBell size={20} className="cursor-pointer" />
          </button>
        </Badge>
        <UserDropdown />
      </div>
    </div>
  );
};

export default DashHeader;