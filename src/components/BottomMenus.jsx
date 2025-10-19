import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement } from "react";
import { LuSettings } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

const BottomMenus = ({
  width = 230,
}) => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <Link
          href={"/dashboard/settings"}
          className={`flex items-center mb-0 gap-3 px-6 py-2 transition-colors ${pathname !== "/dashboard/settings" && "hover:text-brand"} ${width === 90 ? 'justify-center' : ''} ${pathname.startsWith("/dashboard/settings") ? 'text-brand' : ''} rounded-sm`}
        >
          <span className="flex-shrink-0">
            <LuSettings size={22} />
          </span>
          {width === 230 && <span className="text-[15px] font-medium">Settings</span>}
        </Link>

        <button
          className={`cursor-pointer flex items-center mb-2 gap-3 px-6 py-2 transition-colors ${pathname !== "/dashboard/settings" && "hover:text-brand"} ${width === 90 ? 'justify-center' : ''} ${pathname.startsWith("/dashboard/settings") ? 'text-brand' : ''} rounded-sm`}
        >
          <span className="flex-shrink-0 text-red-500 hover:text-red-600">
            <TbLogout2 size={22} />
          </span>
          {width === 230 && <span className="text-[15px] font-medium text-red-500 hover:text-red-600">Logout</span>}
        </button>
      </div>
    </>
  );
};

export default BottomMenus;