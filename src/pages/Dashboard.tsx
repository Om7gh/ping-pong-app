import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="">
      <h1>dashboard</h1>
      <Outlet />
    </div>
  );
}
