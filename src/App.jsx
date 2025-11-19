// import ChangeBackgroundColor from './Change-Background-Color/Change-Background-Color.jsx';
// import FetchingData from './FetchingData/FetchingData.jsx';
// import Input from './Input/Input.jsx';
// import Stopwatch from './Stopwatch/Stopwatch.jsx';
// import Textarea from './Textarea/Textarea.tsx';
import { CardWrapper } from './components/CardWrapper.jsx';
import { Contact } from './components/Contact.jsx';
import { Newsletter } from './components/Newsletter.jsx';
import { Menu } from './components/PassingData/Menu.jsx';
import { Counter } from './Zustand/Counter.jsx';


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
			<CardWrapper title="User Profile">
				<p>Amy Adams</p>
				<p>Vanessa Kirby</p>
				<button>Add more actress</button>
			</CardWrapper>



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
