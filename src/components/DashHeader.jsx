import { HiChevronLeft } from "react-icons/hi";
import UserDropdown from "./UserDropdown";
import { IoWalletOutline } from "react-icons/io5";

const DashHeader = ({ width, toggleSidebar }) => {
  return (
    <div
      style={{ marginLeft: width, transition: 'margin 0.3s',  }}
      className={`fixed top-0 left-0 right-0 z-30 h-16 flex items-center ${width === 230 ? "justify-end" : "justify-between"} px-6 pl-0 shadow-md bg-white `}
    >
      {width === 80 && <button onClick={toggleSidebar} className="min-w-8 h-8 grid place-content-center rounded border-2 border-brand/50 -mr-5 bg-brand-light cursor-pointer">
        <HiChevronLeft size={20} className="rotate-180" />
      </button>}

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-2 mr-3">
          <IoWalletOutline size={25} />
          <span className="mt-1">$276</span>
        </div>
        <UserDropdown />
      </div>
    </div>
  );
};

export default DashHeader;