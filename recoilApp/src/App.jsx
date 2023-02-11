import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TodoList } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
