import { Menu } from "@/components/pages/dashboard/layout/menu"
import { Sidebar } from "@/components/pages/dashboard/layout/sidebar"
import { Outlet } from "react-router-dom"

export const DashboardPage = () => {
  return (
    <div className="container h-screen overflow-hidden border p-0">
      <div className="relative block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="relative grid items-start md:grid-cols-6">
              <Sidebar />
              <div className="col-span-5 h-[calc(100vh_-_40px)] w-full overflow-y-auto border-l">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
