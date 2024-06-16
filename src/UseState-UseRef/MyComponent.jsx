import React, { useEffect, useRef } from 'react';

function MyComponent() {

  const inputRef1 = useRef(null);
 

  useEffect(() => {
    console.log('Component Render');
    console.log(inputRef1);
  });

  function handleClick() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input ref={inputRef1}/>
    </div>      
  )
}

export default MyComponent