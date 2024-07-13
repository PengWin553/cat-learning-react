import './styles/App.css'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <div className="score-board">

        <div className="team">
          <h1 className="team-name">Team A</h1>
          <Card />
        </div>

        <div className="round">
          <h1 className="team-name">Round</h1>
          <Card />
        </div>

        <div className="team">
          <h1 className="team-name">Team B</h1>
          <Card />
        </div>

      </div>
    </>
  )
}

export default App
