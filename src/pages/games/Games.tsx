import IncommingTournament from "@/components/ui/IncommingTournament";
import PlayersPreview from "@/components/ui/PlayersPreview";
import ProfileOverview from "@/components/ui/ProfileOverview";
import Titles from "@/components/ui/Titles";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function getPlayers() {
  const res = await fetch("http://localhost:3001/players");
  const data = await res.json();
  return data;
}

export default function Games() {
  const [clickedPlayer, setClickedPlayer] = useState<string | number>("");
  const {
    data: players,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });

  if (isPending)
    return <div className="text-center py-10">Loading players...</div>;
  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading players
      </div>
    );

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    setClickedPlayer(target.id);
  }

  const currentPlayer = players.filter(
    ({ id }: { id: number }) => id === clickedPlayer
  );

  return (
    <div className="w-3/5 mx-auto py-8">
      <Titles title="Games" />

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="flex-1 space-y-6">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 shadow-lg px-4 py-2">
            <PlayersPreview players={players} onClick={handleClick} />
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700 shadow-lg p-6">
            <IncommingTournament />
          </div>
        </div>

        {currentPlayer.length > 0 && (
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 shadow-lg px-6 py-4 sticky top-6 w-96">
              <ProfileOverview data={currentPlayer} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
