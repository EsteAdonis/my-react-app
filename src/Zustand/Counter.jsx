// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions.


import { useCounterStore } from './storeCounterZustand';

export const Counter = () => {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);

  return (
    <div>
      <button onClick={decrement} aria-label="decrement">-</button>
      <span style={{ margin: '0 8px' }}>{count}</span>
      <button onClick={increment} aria-label="increment">+</button>
    </div>
  );
};
