import './styles/App.css'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <div className="score-board">
        <h1 className='title'>Score Board</h1>
        
        <div className="container">
          <Card name="Team A"/>

          <div className="score-board-container">
            <Card name="Quarter"/>
          </div>

          <Card name="Team B"/>
        </div>
      </div>
    </>
  )
}

export default App