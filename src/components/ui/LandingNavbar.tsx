import { useState, type JSX } from "react";

export default function LandingNavbar(): JSX.Element {
  const [active, setActive] = useState<number>(0);
  const links = ["Home", "About", "Features"];
  return (
    <ul className="flex gap-7 tracking-wider items-center text-slate-100 font-medium text-xl">
      {links.map((el, index) => (
        <li key={index}>
          <a
            href={`#${el}`}
            onClick={() => setActive(index)}
            className={index === active ? "active" : "link"}>
            {el}
          </a>
        </li>
      ))}
    </ul>
  );
}
