import React from "react";
import { Route } from "react-router-dom";
import AddContact from "./components/AddContact";
// import { ToastContainer } from "react-toastify";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";
import './App.css'

const App = () => {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Navbar />
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route exact path="/add"  >
        <AddContact/>
      </Route>
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
