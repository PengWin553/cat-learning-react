import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Categories from './Categories.jsx';
import Products from './Products.jsx';
import NavigationBar from './Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar-container">
          <NavigationBar />
        </div>

        <div className="content-container">
          <Switch>

            {/* homePage */}
            <Route exact path='/home'>
              <Home />
            </Route>

            {/* categoriesPage */}
            <Route path='/categories'>
              <Categories />
            </Route>

            {/* productsPage */}
             <Route path='/products'>
              <Products />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
