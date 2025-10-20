import { HiChevronLeft } from "react-icons/hi";
import { PiGraduationCapFill } from "react-icons/pi";
import BottomMenus from "./BottomMenus";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ toggleSidebar, width = 230 }) => {
  return (
    <div
      style={{ width, transition: 'width 0.3s' }}
      className="fixed top-0 bottom-0 left-0 z-4"
    >
      <div className="bg-white h-full p-2 flex flex-col justify-between">
        <div>
          <div className="px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PiGraduationCapFill size={30} className="text-brand" />
              {width === 230 && <span className="font-bold text-base text-black">TrustTution</span>}
            </div>

            {width === 230 && <button onClick={toggleSidebar} className="min-w-6 h-6 flex items-center justify-center rounded-full border-2 border-brand/50 -mr-3 cursor-pointer">
              <HiChevronLeft size={20} className="mt-0.5" />
            </button>}
          </div>

          <SidebarLinks width={width} />
        </div>

        <div className="pb-4">
          {width === 230 && <div className="text-xs mt-10 mb-2 px-7 uppercase">Settings</div>}

          <BottomMenus width={width} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;