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
      <div className="text-xs mt-10 px-1 text-white">User Menu</div>
      {sidebarLinks.length === 0 ? (
        <div className="w-full h-32 flex items-center justify-center">
          <CgSpinner className="animate-spin text-white" size={20} />
        </div> 
      ) : (
        <div className="mt-2">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex items-center mb-1 gap-3 px-6 py-2.5 transition-colors ${pathname !== link.href && "hover:bg-[#4970ff] hover:text-white"} ${width === 90 ? 'justify-center' : ''} ${pathname === link.href ? 'bg-white text-brand' : 'text-white'} rounded-sm`}
            >
              <span className="flex-shrink-0">
                {createElement(link.icon, { size: 20 })}
              </span>
              {width === 230 && <span className="text-[14px]">{link.name}</span>}
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default SidebarLinks;