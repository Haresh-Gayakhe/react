import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name:"Haresh",
    age:26
  }
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl">Tailwind test</h1>
      <Card name={"Lucy"} details={obj} />
      <Card  />
    </>
  );
}

export default App;
