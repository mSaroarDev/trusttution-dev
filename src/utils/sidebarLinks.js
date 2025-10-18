import { HiOutlineUsers } from "react-icons/hi";
import { LuTicketCheck, LuUserSearch } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiProjectorScreenChart, PiUserSwitchBold } from "react-icons/pi";
import { SiFampay } from "react-icons/si";
import { TbLayout, TbWallet } from "react-icons/tb";

export const tutorSidebarLinks = [
  {id: 1, name: 'Overview', href: '/dashboard/overview', icon: TbLayout},
  {id: 2, name: 'Lessons', href: '/dashboard/courses', icon: MdOutlineMenuBook},
  {id: 3, name: 'Students', href: '/dashboard/students', icon: HiOutlineUsers},
  {id: 4, name: 'Appointments', href: '/dashboard/earnings', icon: LuTicketCheck},
  {id: 4, name: 'Earnings', href: '/dashboard/earnings', icon: TbWallet},
];

export const studentSidebarLinks = [
  {id: 1, name: 'Dashboard', href: '/dashboard/overview', icon: TbLayout},
  {id: 2, name: 'Browse Tutors', href: '/dashboard/my-courses', icon: LuUserSearch},
  {id: 3, name: 'My Tutors', href: '/dashboard/wishlist', icon: PiUserSwitchBold},
  {id: 4, name: 'My Classes', href: '/dashboard/payments', icon: PiProjectorScreenChart},
  {id: 4, name: 'Payments', href: '/dashboard/payments', icon: SiFampay},
];