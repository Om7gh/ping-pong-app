import { useReducer } from "react";
import { AboutData } from "../../utils/About";
import { AboutUs, Why, Join } from "@/assets";
interface AboutItem {
  title: string;
  content: string;
}

interface State {
  data: AboutItem[];
  i: number;
}

type Action =
  | { type: "data/inc" }
  | { type: "data/dec" }
  | { type: "data/set"; payload: number };

const initialState: State = {
  data: AboutData,
  i: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "data/inc":
      return {
        ...state,
        i: (state.i + 1) % state.data.length,
      };
    case "data/dec":
      return {
        ...state,
        i: (state.i - 1 + state.data.length) % state.data.length,
      };
    case "data/set":
      return {
        ...state,
        i: action.payload,
      };
    default:
      throw new Error("Invalid action type");
  }
}

export default function About() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, i } = state;

  return (
    <section id="about" className="my-24 relative">
      <div className="relative text-center my-24">
        <span className="absolute left-0 right-0  mx-auto text-8xl text-slate-300 opacity-5 font-bold">
          About
        </span>
        <h2 className="text-4xl font-bold relative z-10 text-slate-400">
          About PingPop
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 max-w-6xl mx-auto">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-teal-500">
            {data[i].title}
          </h3>
          <p className="text-slate-200 tracking-wider leading-relaxed text-md line-height">
            {data[i].content}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => dispatch({ type: "data/dec" })}
              className="px-4 py-2 bg-slate-300 rounded hover:bg-slate-400 transition disabled:bg-slate-300 disabled:text-slate-200 cursor-pointer"
              disabled={i === 0}>
              Previous
            </button>
            <button
              onClick={() => dispatch({ type: "data/inc" })}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition disabled:bg-slate-300 disabled:text-slate-200 cursor-pointer"
              disabled={i === data.length - 1}>
              Next
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* Placeholder for an image or illustration */}
          <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <img
              src={i === 0 ? Why : i === 1 ? AboutUs : i === 2 ? Join : ""}
              alt={
                i === 0
                  ? "Why PingPong"
                  : i === 1
                  ? "About Us"
                  : i === 2
                  ? "Join Community"
                  : "PingPong image"
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => dispatch({ type: "data/set", payload: index })}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-teal-500" : "bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
