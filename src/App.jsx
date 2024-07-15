// props = read-only properties that are shared between componenets.
//         A parent componenet can send data to a child component.
//         <Component key=value />

import Student from './Student.jsx'
import './index.css'

function App() {

  return (
    <>
      <Student name="Peng Win" age={21} isStudent={true} />
      <Student name="Akuma" age={26} isStudent={false} />
      <Student name="Kobayashi" age={25} isStudent={false} />

      {/* this has all the defaultProps values */}
      <Student />

      {/* this has only two of the defaultProps values, since it is already set a name  */}
      <Student name="Cat"/>
    </>
  )
}

export default App
