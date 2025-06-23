import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

async function getPlayers() {
  const res = await fetch("http://localhost:3001/players");
  const data = await res.json();
  return data;
}

function useFetchAllPlayers() {
  const {
    data: players,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });

  useEffect(() => {
    if (isError) toast.error(error.message);
  });

  return { players, isPending, isError };
}

export default useFetchAllPlayers;
