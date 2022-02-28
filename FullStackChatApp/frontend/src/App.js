import './App.css';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey = 'xxw8udgwaycc'
const client = StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} >
        <ChanelListContainer 

        />
        <ChanelContainer />
      </Chat>
    </div>
  );
}

export default App;
