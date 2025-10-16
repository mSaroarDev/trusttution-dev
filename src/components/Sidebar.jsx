import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import logoShort from "@/assets/images/logo-short.svg";
import { HiChevronLeft } from "react-icons/hi";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ toggleSidebar, width = 250 }) => {
  return (
    <div
      style={{ width, transition: 'width 0.3s' }}
      className="fixed top-0 bottom-0 left-0 z-40 bg-[#1f2c3b] text-[#dfdfdf]"
    >
      <div className="px-3 flex items-center justify-between">
        <div className="w-[150px] h-[100px] relative">
          <Image
            src={width === 250 ? logo : logoShort}
            fill
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>

        <button onClick={toggleSidebar} className="min-w-8 h-8 grid place-content-center rounded border-2 border-[#727272] -mr-5 -mt-14 bg-[#292929] cursor-pointer">
          {width === 250 ? <HiChevronLeft size={20} /> : <HiChevronLeft size={20} className="rotate-180" />}
        </button>
      </div>

      <SidebarLinks width={width} />
    </div>
  );
};

export default Sidebar;