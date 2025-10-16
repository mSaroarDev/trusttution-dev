"use client";
import DashHeader from "@/components/DashHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {

  const [width, setWidth] = useState(250);
  const toggleSidebar = () => {
    setWidth(width === 250 ? 80 : 250);
  }

  return (
    <>
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
        style={{ marginLeft: width, marginTop: 64, transition: 'margin-left 0.3s' }}
      >
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;