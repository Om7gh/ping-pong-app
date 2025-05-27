import type { JSX } from "react";
import Button from "./Button";
import Balls from "./Balls";
import LandingHeader from "../layout/LandingHeader";

export default function LandingHero(): JSX.Element {
  return (
    <>
      <LandingHeader />
      <main className="h-[75vh] max-w-[1200px] mt-7 relative">
        <Balls />
        <section className="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="text-center">
            <h1 className="text-slate-100 text-7xl mb-5 font-semibold tracking-wider">
              Serve, Smash, Dominate!
            </h1>
            <h2 className="mb-5 text-slate-400 font-bold text-xl tracking-widest font-[Montserrat] line-height">
              Play the most addictive ping pong game online. Challenge friends,
              unlock power-ups, and rule the leaderboards!
            </h2>
            <div className="cta-btn tracking-widest">
              <Button type="signUp" className="w-60 text-xl">
                Play Free
              </Button>
              <Button type="signIn" className="w-60 text-xl">
                Watch Trailer
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
