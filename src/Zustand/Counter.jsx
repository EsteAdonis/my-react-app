// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions.

import {useCounterStore} from "../zustand/store.jsx";
import { useEffect } from "react";

const logCount = () => {
  console.log("Count: ", useCounterStore.getState().count);
}

function Counter() {
  const { count, increase, decrease, reset, incrementAsync } = useCounterStore();

  useEffect(() => {
    logCount();
  },[count]) ;


  const increment = () => {
    increase();
    increase();
    increase();
    incrementAsync();
  }

  const decrement = () => {
    decrease(c => c - 3); 
    decrease(c => c - 3);
    decrease(c => c - 3);    
  }

  const resetCounter = () => {
    reset();
  }

  return (
    <div className="counter-container">
      <h2>Using Zustand</h2>
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={resetCounter}>Reset</button>      
      <button className="counter-button" onClick={increment}>Increment</button>      
    </div>
  )
}

export default Counter
