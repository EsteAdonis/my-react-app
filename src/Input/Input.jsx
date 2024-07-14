import React, {useState} from 'react'

function Input() {
  const [val, setVal] = useState('');

  const click = () => {
    alert(val);
  }

  const change = (e) => {
    setVal(e.target.value);
  }
  return (
    <div className="app">
      <label > Type information: 
        <textarea onChange={change} value={val} />
      </label>
      <button onClick={click}>Click me</button>
    </div>
  )
}

export default Input