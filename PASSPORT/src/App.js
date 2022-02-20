import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Navbar/>
      {/* <Home/> */}
      <Post/>
    </div>
  );
}

export default App;
