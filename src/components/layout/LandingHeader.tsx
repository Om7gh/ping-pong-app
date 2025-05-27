import { type JSX } from "react";
import LandingNavbar from "../ui/LandingNavbar";
import { Logo } from "@ui";
import LandingNavBtn from "../ui/LandingNavBtn";

export default function LandingHeader(): JSX.Element {
  return (
    <header className="bg-midnight rounded-full shadow-slate-600 shadow-sm">
      <nav className="flex items-center justify-between px-4 py-2">
        <Logo />
        <LandingNavbar />
        <LandingNavBtn />
      </nav>
    </header>
  );
}
