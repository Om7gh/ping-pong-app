import { Logo } from "@/assets";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineCog, HiOutlineHome } from "react-icons/hi";
import { HiMiniChatBubbleLeft } from "react-icons/hi2";
import { PiPingPongFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function LeftSideDashboard() {
  const menuItems = [
    { name: "Home", path: "home", icon: <HiOutlineHome /> },
    { name: "Settings", path: "settings", icon: <HiOutlineCog /> },
    { name: "Games", path: "games", icon: <PiPingPongFill /> },
    { name: "Chat", path: "chat", icon: <HiMiniChatBubbleLeft /> },
    { name: "Friends", path: "friends", icon: <FaUserFriends /> },
  ];

  return (
    <aside className=" bg-slate-950 p-6  col-start-1 row-start-2 row-end-3 border-r-2 border-gray-600">
      <div className="mb-8 flex justify-center">
        <img src={Logo} alt="logo" className="h-20 w-auto" />
      </div>

      <nav className="w-full">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition-all duration-200 font-medium flex gap-5
                  ${
                    isActive
                      ? "bg-gradient-to-l from-orange-300 to-teal-500 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`
                }>
                <span className="text-orange-500 text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
