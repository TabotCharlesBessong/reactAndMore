import './App.css';
import CakeContainer from './components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CookiesContainer from './components/CookiesContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store} >

      <div className="App">
        {/* <HooksCakeContainer/> */}
        <CakeContainer/>
        <IceCreamContainer/>
        <CookiesContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>

  );
}

export default App;
