import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mobile, setMobile] = useState("closed");
  
  const showMobile = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    if(mobile === "open"){
        setMobile("closed")
        mobBtn.classList.remove('open');

    }else{
        setMobile("open");
        mobBtn.classList.add('open');
    }
  }
  return (
    <div className="App">
      <nav>
        <div className="left"></div>
        <div className="name">
          <h1>Kyle Sousa</h1>
        </div>
        <div className="right">
          <div className='mob-btn' onClick={showMobile}>
            <div className="mob-btn__burger"></div>
          </div>
          <ul className="nav-links">
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
        </div>
        </nav>
        <div className={"nav-links-mobile " + mobile} onClick={showMobile}>
          <a href="#About"><h1>About</h1></a>
          <a href="#Projects"><h1>Projects</h1></a>
          <a href="#Contact"><h1>Contact</h1></a>
        </div>
      <body>
        <div className="About">

        </div>
        <div className="Projects">

        </div>
        <div className="Skills">

        </div>
        <div className="Contact">

        </div>
      </body>
    </div>
  );
}

export default App;
