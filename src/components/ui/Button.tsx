import React, { type JSX } from "react";

interface button {
  children: string;
  type: string;
  className: string;
}

export default function Button({ children, type, className }: button) {
  let style;
  if (type === "signUp")
    style =
      "font-semibold cursor-pointer text-stone-100 bg-orange-500 px-5 py-3 rounded-full focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 mx-5 transition duration-300 hover:bg-orange-400 hover:ring-1 hover:ring-orange-500 hover:ring-offset-1";
  if (type === "signIn")
    style =
      "cursor-pointer px-5 py-3 border border-orange-500 rounded-full text-orange-500 font-semibold focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 hover:ring-1 hover:ring-orange-500  focus:text-orange-300 hover:ring-offset-1 hover:text-orange-300 transition duration-300";
  return <button className={`${style} ${className}`}>{children}</button>;
}
