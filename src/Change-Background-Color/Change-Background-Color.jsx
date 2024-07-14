import React, { useState } from 'react';


function ChangeBackgroundColor() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}  

  const [color, setColor] = useState("blue");

  const click = color => {
    setColor(color);
  }

  return (
    <>
      <div className="app">
        <button type="button" onClick = {() => click("yellow")}  style={styles}>Change Color</button>
      </div>
      <div>How to change background color</div>
    </>      
  )

}

export default ChangeBackgroundColor;