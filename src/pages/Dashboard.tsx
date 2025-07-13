import { DashboardHeader, LeftSideDashboard } from "@/components/layout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function isMobileScreen() {
      const mobileWidth = 763;
      setIsMobile(window.innerWidth < mobileWidth);
    }
    isMobileScreen();

    window.addEventListener("resize", isMobileScreen);
    return () => window.removeEventListener("resize", isMobileScreen);
  }, []);

  return (
    <div
      className={`grid ${
        !isMobile ? "grid-cols-[15rem_1fr]" : "grid-cols-[7rem_1fr]"
      } grid-rows-[auto_1fr] min-h-screen p-5`}>
      <div className="px-6">
        <DashboardHeader />
      </div>
      <main className="row-start-2 row-end-3 col-start-2 col-end-3 p-6 overflow-y-scroll my-10">
        <Outlet />
      </main>
      <LeftSideDashboard isMobile={isMobile} />
    </div>
  );
}
