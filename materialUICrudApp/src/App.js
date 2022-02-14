import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
 
function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
