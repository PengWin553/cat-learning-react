import Student from './Student.jsx'
import './index.css'

function App() {

  return (
    <>
      <Student name="Peng Win" age={21} isStudent={true} />
      <Student name="Akuma" age={26} isStudent={false} />
      <Student name="Kobayashi" age={25} isStudent={false} />
    </>
  )
}

export default App
