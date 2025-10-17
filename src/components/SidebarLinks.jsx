"use client";

import { useAuth } from "@/hooks/useAuth";
import { studentSidebarLinks, tutorSidebarLinks } from "@/utils/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement } from "react";

const SidebarLinks = ({width}) => {
  const {isTutor, isStudent} = useAuth();
 const pathname = usePathname();

  const sidebarLinks = isTutor ? tutorSidebarLinks : isStudent ? studentSidebarLinks : []; 

    return (
        <>
          <div className="mt-5">
            {sidebarLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className={`flex items-center mb-1 gap-3 px-4 py-3 hover:bg-brand/5 hover:text-brand transition-colors ${width === 80 ? 'justify-center' : ''} ${pathname === link.href ? 'bg-brand-light text-brand' : ''} rounded-sm`}
              >
                {link.icon && createElement(require('react-icons/md')[link.icon], { size: 18 })}
                {width === 230 && <span className="text-[14px]">{link.name}</span>}
              </Link>
            ))}
          </div>
        </>
    );
};

export default SidebarLinks;