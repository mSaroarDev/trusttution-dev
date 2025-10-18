import { HiChevronLeft } from "react-icons/hi";
import { PiGraduationCapFill } from "react-icons/pi";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ toggleSidebar, width = 230 }) => {
  return (
    <div
      style={{ width, transition: 'width 0.3s' }}
      className="fixed top-0 bottom-0 left-0 z-4 p-3"
    >
      <div className="bg-brand h-full p-2 rounded-xl">
        <div className="px-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PiGraduationCapFill size={30} className="text-white" />
            {width === 230 && <span className="font-bold text-base text-white">TrustTution</span>}
          </div>

          {width === 230 && <button onClick={toggleSidebar} className="min-w-6 h-6 grid place-content-center rounded-full border-2 border-brand/50 -mr-3 bg-brand-light cursor-pointer">
            <HiChevronLeft size={20} />
          </button>}
        </div>

        <SidebarLinks width={width} />
      </div>
    </div>
  );
};

export default Sidebar;