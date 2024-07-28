// the h1 element's text must change to your name when you first click it; if you click it again, it reverts back to its default value
import { useState } from "react";
import "./App.css";
const App = () => {
  const [text, setText] = useState('sdf');

  const ChangeText = () => {
    setText(text === 'sdf' ? 'PengWin' : 'sdf');
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