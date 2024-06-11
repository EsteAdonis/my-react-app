// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(()=> {})           // Runs afters every re-render
// 2. useEffect(()=> {}, [])       // Runs only on mount
// 3. useEffect(()=> {}, [value])  // Runs on mount + when value changes

// USES
// #1 Even Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react';

function UseEffect() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener removed");
    }
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  },[width, height]);
    
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  return (<>
    <p>Window width: {width}</p>
    <p>Window Height: {height}</p>
  </>)
}

export default UseEffect