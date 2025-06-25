import IsPlayingGame from "../ui/IsPlayingGame";
import MyGamesHistory from "../ui/MyGamesHistory";
import MyScore from "../ui/MyScore";
import PlayerChart from "../ui/PlayerChart";
import PlayerStatistics from "../ui/PlayerStatictics";
import TopPlayers from "../ui/TopPlayers";

export default function HomeDashboard() {
  return (
    <div className="h-full p-5 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlayerChart />
        <PlayerStatistics />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MyGamesHistory />
        <TopPlayers />
        <MyScore />
      </div>
    </div>
  );
}
