// the h1 element's text must change on the click of the button
import { useState } from "react";
import "./App.css";
const App = () => {
  const [text, setText] = useState('sdf');

  const  ChangeText= () => {
    setText('PengWin');
  }
   
  return ( 
      <div className="parent">
          <h1>{text}</h1>
          <div className="btn-click" onClick={ChangeText}>
              Click
          </div>
      </div>
  );
}
 
export default App;