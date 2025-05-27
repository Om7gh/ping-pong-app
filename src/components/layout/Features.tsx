import type { JSX } from "react";

export default function Features(): JSX.Element {
  return (
    <section id="about" className="my-24 relative">
      <div className="relative text-center my-24">
        <span className="absolute left-0 right-0  mx-auto text-8xl text-slate-300 opacity-5 font-bold">
          Features
        </span>
        <h2 className="text-4xl font-bold relative z-10 text-slate-400">
          PingPop Features
        </h2>
      </div>
    </section>
  );
}
