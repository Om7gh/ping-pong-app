import { DashboardHeader, LeftSideDashboard } from "@/components/layout";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] min-h-screen">
      <DashboardHeader />
      <main className="row-start-2 row-end-3 col-start-2 col-end-3 p-6">
        <Outlet />
      </main>
      <LeftSideDashboard />
    </div>
  );
}
