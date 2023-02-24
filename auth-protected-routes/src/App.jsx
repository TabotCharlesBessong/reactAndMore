
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Header } from "./components"
import UseRoutes from "./utils/UseRoutes"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>

      </Routes>
      <UseRoutes/>
    </Router>
  )
}

export default App
