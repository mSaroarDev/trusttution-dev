"use client";

import { useAuth } from "@/hooks/useAuth";
import { studentSidebarLinks, tutorSidebarLinks } from "@/utils/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement } from "react";
import { CgSpinner } from "react-icons/cg";

const SidebarLinks = ({ width }) => {
  const { isTutor, isStudent } = useAuth();
  const pathname = usePathname();

  const sidebarLinks = isTutor ? tutorSidebarLinks : isStudent ? studentSidebarLinks : [];

  return (
    <div className="h-full">
      {width === 230 &&  <div className="text-xs mt-10 px-7 uppercase">User Menu</div>}
      {sidebarLinks.length === 0 ? (
        <div className="w-full h-32 flex items-center justify-center">
          <CgSpinner className="animate-spin text-brand" size={20} />
        </div> 
      ) : (
        <div className={width === 230 ? "mt-5" : "mt-10"}>
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-medium flex items-center mb-2 gap-3 px-6 py-2 transition-colors ${pathname !== link.href && "hover:text-brand"} ${width === 90 ? 'justify-center' : ''} ${pathname.startsWith(link.href) ? 'text-brand' : ''} rounded-sm`}
            >
              <span className="flex-shrink-0">
                {createElement(link.icon, { size: 22 })}
              </span>
              {width === 230 && <span className="text-[15px] font-medium">{link.name}</span>}
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default SidebarLinks;