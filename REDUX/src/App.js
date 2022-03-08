import './App.css';
import CakeContainer from './components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CookiesContainer from './components/CookiesContainer';

function App() {
  return (
    <Provider store={store} >

      <div className="App">
        {/* <HooksCakeContainer/> */}
        <CakeContainer/>
        <IceCreamContainer/>
        <CookiesContainer/>
      </div>
    </Provider>

  );
}

export default App;
