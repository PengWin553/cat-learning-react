import Home from './Home.jsx';
import NavigationBar from './Navbar.jsx';

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <NavigationBar />
      </div>
      <div className="home-container">
        <Home />
      </div>
    </div>
  )
}

export default App;
