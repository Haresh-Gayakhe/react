import { useState } from "react";
import "./App.css";

function App() {
  const[counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter+1)
    }
  };

  const decreaseValue = () => {
    if(counter !== 0) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decreaseValue}>Decrese value</button>
    </>
  );
}

export default App;
