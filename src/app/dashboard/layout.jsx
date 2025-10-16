import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardRootLayout({ children }) {
  return (
    <>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </>
  )
}