// defaultProps = default values from props in case they are not
//                passed from the parent component
//                name: "Guest"

import Student from './Student/Student.jsx'

function App() {
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="SquidWard" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />           
      <Student  />         
    </>
  )
}

export default App
