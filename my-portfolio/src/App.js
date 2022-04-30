import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from "react";

function App() {
  const [mobile, setMobile] = useState("closed");
  
  const showMobile = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    const navLinks = document.querySelector('.nav-links')
    if(mobile === "open"){
        setMobile("closed")
        navLinks.classList.remove("true")
        mobBtn.classList.remove('open');

    }else{
        setMobile("open");
        navLinks.classList.add("true")
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
          <ul className="nav-links">
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
          <div className='mob-btn' onClick={showMobile}>
            <div className="mob-btn__burger"></div>
          </div>
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
