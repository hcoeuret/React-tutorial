import Student from './Student.jsx'

function App() {
  return(
    <>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Sandy" age="40" isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student name="Larry"/>
    </>
  );
}

export default App
