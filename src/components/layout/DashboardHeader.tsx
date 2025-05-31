import { Logo } from "@/assets";
import { type JSX } from "react";
import { NavLink } from "react-router-dom";

export default function DashboardHeader(): JSX.Element {
  const menu = ["Home", "Settings", "Games", "Chat", "Friends"];
  return (
    <header>
      <nav>
        <Logo />
        <ul>
          {menu &&
            menu.map((el, index) => (
              <li key={index}>
                <NavLink to={el}>{el}</NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

