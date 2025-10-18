import { Montserrat } from "next/font/google";
import DashboardLayout from "../layouts/DashboardLayout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export default function DashboardRootLayout({ children }) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </div>
  )
}