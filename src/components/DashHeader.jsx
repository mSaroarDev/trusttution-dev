import UserDropdown from "./UserDropdown";
import { IoWalletOutline } from "react-icons/io5";

const DashHeader = ({ width }) => {
  return (
    <div
      style={{ marginLeft: width }}
      className="fixed top-0 left-0 right-0 z-30 h-16 flex items-center justify-end px-6 shadow-md"
    >
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