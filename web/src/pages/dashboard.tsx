import { Menu } from "@/components/pages/dashboard/layout/menu";
import { Sidebar } from "@/components/pages/dashboard/layout/sidebar";
import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <div className="container p-0 border h-screen overflow-hidden">
      <div className="block relative">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-6 items-start relative">
              <Sidebar />
              <div className="overflow-y-auto col-span-5 h-[calc(100vh_-_40px)] border-l w-full">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
