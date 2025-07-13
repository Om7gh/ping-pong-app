import { FriendList, Message } from "@/components/ui";
import { useState } from "react";

export interface UserData {
  id: number;
  username: string;
}

const userData = [
  { id: 1, username: "omar" },
  { id: 3, username: "ilyass" },
  { id: 2, username: "mustafa" },
  { id: 4, username: "ayoub" },
];

export default function chat() {
  const [data] = useState<UserData[]>(userData);
  return (
    <div className="w-5/6 m-auto bg-midnight/50 h-full">
      <div className="grid grid-cols-4 w-full h-full p-3 gap-3 ">
        <FriendList data={data} />
        <Message />
      </div>
    </div>
  );
}
