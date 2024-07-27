// change the color of the button to violet once you press it

import { useState } from "react";
import "./index.css";
const App = () => {
  const [color, setColor] = useState('');

  const ChangeColor = () => {
    setColor('violet');
  }

    return ( 
      <>
        <div className="parent">
            <h1>Change the color of the button to violet once you press it</h1>

            <div className="btn-click btn-one" onClick={ChangeColor} style={{background : color}}>
              First Way
            </div>

        </div>
      </>
       
    );
}
 
export default App;
