import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button
              onClick={() => setColor("green")}
              className="rounded-full px-2 py-1 text-white"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("red")}
              className="rounded-full px-2 py-1 text-white"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-full px-2 py-1 text-white"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("purple")}
              className="rounded-full px-2 py-1 text-white"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
