import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardRootLayout({ children }) {
  return (
    <div>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </div>
  )
}