import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import {BrowserRouter as Router , Routes , Route ,Navigate  } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [user,setUser] = useState(false)
  return (
    <div className="App">
      <Router>
   
        <Navbar/>
        <Routes>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route  path='/post/:id'>
            <Post/>
          </Route>
          <Route  path='/login' element={ user ? <Navigate to='/'/> : <Login/>  } />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
