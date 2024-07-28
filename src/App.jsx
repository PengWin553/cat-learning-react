// on button click, the h1 element's value must change to a new value (from default to new, from new to default); the color of the button must change (from default to new, from new to default)
import { useState } from "react";
import "./App.css";
const App = () => {
  const [text, setText] = useState('sdf');
  const [buttonStyle, setButtonStyle] = useState('btn-click');

  const ChangeText = () => {
    setText(text === 'sdf' ? 'Pengwin' : 'sdf');
  }

  const ChangeButtonStyle = () => {
    setButtonStyle(buttonStyle === 'btn-click' ? 'btn-click-active' : 'btn-click');
  }
   
  return ( 
      <div className="parent">
          <h1>{text}</h1>
          <div className={buttonStyle} onClick={() => {ChangeText(), ChangeButtonStyle()}}>
              Click
          </div>
      </div>
  );
}
 
export default App;
