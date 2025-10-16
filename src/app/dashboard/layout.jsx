import DashHeader from "@/components/DashHeader";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <DashHeader />
      <div className="p-4">
        {children}
      </div>
    </>
  )
}