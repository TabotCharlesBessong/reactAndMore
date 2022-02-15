import React from 'react';

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import  Navbar  from './components/Navbar/Navbar';
import './App.css';
import Header from './container/Header/Header';
import AboutUs from './container/About/AboutUs';

const App = () => (
  <div>
  {/* <h1>Hello world</h1> */}
    <Navbar />
    {/* <Header /> */}
    <Header/>
    <AboutUs />
    
  </div>
);

export default App;

    {/* <Header /> */}
    {/* <AboutUs /> */}
    {/* <SpecialMenu /> */}
    {/* <Chef /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    {/* <Footer /> */}