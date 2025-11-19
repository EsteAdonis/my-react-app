// import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
// import FetchingData from './FetchingData/FetchingData.jsx';
// import Input from './Input/Input.jsx';
// import Stopwatch from './Stopwatch/Stopwatch.jsx';
// import Textarea from './Textarea/Textarea.tsx';
import { Contact } from './components/Contact.jsx';
import { Newsletter } from './components/Newsletter.jsx';
import { Menu } from './components/PassingData/Menu.jsx';
import Counter from './Zustand/Counter.jsx';


function App() {
  // function handleInput(e) {
  //   console.log(e);
  // }
  
  return (
    <>
      <Counter />
			<Contact />
			<Newsletter />
			<Menu />



      {/* <Stopwatch /> */}
      {/* <Textarea
        showPlaceholder={false}
        textPlaceholder='Greetings Julio Esteban'
        readOnly={false}
        error={false}
        value={handleInput}
      /> */}
      {/* <Input />
      <ChangeBackgroundColor /> */}

        {/* <FetchingData /> */}
    </>
  )
}

export default App
