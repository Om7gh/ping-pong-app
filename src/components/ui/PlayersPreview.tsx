type PlayersTypes = {
  username: string;
  avatar: string;
  id: number | string;
  onClick: () => void;
};

export default function PlayersPreview({ players, onClick }: PlayersTypes) {
  return (
    <ul className="flex gap-2 border border-teal-500 px-4 py-2 rounded-xl bg-slate-800">
      {players?.map((player) => (
        <li key={player.id} onClick={(e) => onClick(e)}>
          <img
            src={player.avatar}
            alt="avatar"
            id={player.id}
            className="w-12 rounded-full"
          />
        </li>
      ))}
    </ul>
  );
}
