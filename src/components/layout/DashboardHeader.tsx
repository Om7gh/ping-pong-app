import { type JSX } from "react";
import { Profile, SearchBar } from "../ui";

export default function DashboardHeader(): JSX.Element {
  return (
    <header className="col-span-1 md:col-span-2 row-start-1 row-end-2  py-3 px-12 flex justify-between h-25 items-center bg-slate-950/40 border-b-1 border-gray-600">
      <h2 className="text-2xl text-slate-200">Dashboard</h2>
      <div className="flex gap-6 items-center justify-end">
        <SearchBar />
        <Profile />
      </div>
    </header>
  );
}
