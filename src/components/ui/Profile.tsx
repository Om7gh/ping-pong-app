import { Avatar } from "@/assets";
import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Profile(): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <div
        className="h-12 w-12 rounded-full grid place-items-center bg-gradient-to-r from-orange-400 to-orange-600 cursor-pointer hover:from-orange-500 hover:to-orange-800 transition-all duration-300 p-0.5"
        onClick={() => setActive(!active)}>
        <div className="relative">
          <img
            src={Avatar}
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover border-2 border-white"
          />
          <div className="absolute -bottom-1 -right-1 bg-orange-400 rounded-full p-1">
            {active ? (
              <ChevronUpIcon className="h-3 w-3 text-white" />
            ) : (
              <ChevronDownIcon className="h-3 w-3 text-white" />
            )}
          </div>
        </div>
      </div>

      {active && (
        <div className="absolute top-16 right-0 w-48 bg-white rounded-lg shadow-xl overflow-hidden animate-dropdown origin-top-right">
          <div className="px-4 py-3 bg-gradient-to-r from-teal-400 to-slate-500">
            <p className="text-white font-medium truncate">Omar Ghazi</p>
          </div>
          <ul className="divide-y divide-gray-100">
            <li className="hover:bg-gray-50 transition-colors">
              <Link
                to="profile"
                className="block px-4 py-3 text-sm text-gray-700">
                My Profile
              </Link>
            </li>
            <li className="hover:bg-gray-50 transition-colors">
              <Link
                to="settings"
                className="block px-4 py-3 text-sm text-gray-700">
                Settings
              </Link>
            </li>
            <li className="hover:bg-gray-50 transition-colors">
              <Link
                to="/auth/signin"
                className="block px-4 py-3 text-sm text-red-500 hover:text-red-600">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
