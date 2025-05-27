import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="./logo.png" alt="ping pong logo" className="w-28" />
    </Link>
  );
}
