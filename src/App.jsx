import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
import Input from './Input/Input.jsx';
import Stopwatch from './Stopwatch/Stopwatch.jsx';
import Textarea from './Textarea/Textarea.tsx';



function App() {
  function handleInput(e) {
    console.log(e);
  }
  
  return (
    <>
      {/* <Stopwatch /> */}
      <Textarea
        showPlaceholder={false}
        textPlaceholder='Greetings Julio Esteban'
        readOnly={false}
        error={false}
        value={handleInput}
      />
      {/* <Input />
      <ChangeBackgroundColor /> */}
    </>
  )
}

export default App
