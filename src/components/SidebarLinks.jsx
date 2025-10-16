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
  console.log(sidebarLinks);

    return (
        <>
          <div>
            {sidebarLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 hover:bg-[#1f2431] transition-colors border-l-3 ${width === 80 ? 'justify-center' : ''} ${pathname === link.href ? 'text-[#64a7ff] border-[#64a7ff]' : 'border-l-3 border-transparent'}`}
              >
                {link.icon && createElement(require('react-icons/md')[link.icon], { size: 20 })}
                {width === 250 && <span className="mt-1">{link.name}</span>}
              </Link>
            ))}
          </div>
        </>
    );
};

export default SidebarLinks;