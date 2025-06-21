import Box from "@/components/layout/Box";
import IncommingTournament from "@/components/ui/IncommingTournament";

import PlayersPreview from "@/components/ui/PlayersPreview";
import ProfileOverview from "@/components/ui/ProfileOverview";
import Titles from "@/components/ui/Titles";
import { useQuery } from "@tanstack/react-query";
import { useState, type FormEventHandler } from "react";

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

  if (isPending) return <p>loading...</p>;
  if (isError) return <p>error here</p>;

  function handleClick(e) {
    setClickedPlayer(e.target.id);
  }
  const currentPlayer = players.filter((prev) => prev.id === clickedPlayer);
  return (
    <div className="w-4/5 m-auto flex flex-col gap-15">
      <Titles title="Games :"></Titles>
      <Box>
        <div className=" col-span-1">
          <PlayersPreview players={players} onClick={handleClick} />
        </div>
        <div className="row-span-2">
          <ProfileOverview data={currentPlayer} />
        </div>
        <div className="">
          <IncommingTournament />
        </div>
      </Box>
    </div>
  );
}
