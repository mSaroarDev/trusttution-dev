"use client";
import DashHeader from "@/components/DashHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {

  const [width, setWidth] = useState(230);
  const toggleSidebar = () => {
    setWidth(width === 230 ? 80 : 230);
  }

  return (
    <div className="w-full h-screen bg-[#EDF9F9]">
      <Sidebar 
        width={width} 
        toggleSidebar={toggleSidebar}
      />
      <DashHeader 
        width={width} 
        toggleSidebar={toggleSidebar}
      />
      <div 
        className="p-4" 
        style={{ marginLeft: width, transition: 'margin-left 0.3s' }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;