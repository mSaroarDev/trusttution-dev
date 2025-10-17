import { HiChevronLeft } from "react-icons/hi";
import { PiGraduationCapFill } from "react-icons/pi";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ toggleSidebar, width = 230 }) => {
  return (
    <div
      style={{ width, transition: 'width 0.3s' }}
      className="fixed top-0 bottom-0 left-0 z-40 bg-white text-[#454545] px-3 py-5"
    >
      <div className="px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PiGraduationCapFill size={30} className="text-brand" />
          {width === 230 && <span className="font-bold text-lg">TrustTution</span>}
        </div>

        {width === 230 && <button onClick={toggleSidebar} className="min-w-8 h-8 grid place-content-center rounded border-2 border-brand/50 -mr-5 bg-brand-light cursor-pointer">
          <HiChevronLeft size={20} />
        </button>}
      </div>

      <SidebarLinks width={width} />
    </div>
  );
};

export default Sidebar;