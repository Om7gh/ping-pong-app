import type { UserData } from "@/pages/Chat";

export default function FriendList({ data }: UserData[]) {
  return (
    <div className="h-full bg-slate-900/40 p-3 rounded-xl shadow-sm shadow-slate-700/50">
      <ul>{data && data.map((data) => <li>{data.username}</li>)}</ul>
    </div>
  );
}
