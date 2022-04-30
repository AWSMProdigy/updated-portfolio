import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import React, { useState } from "react";



function App() {
  const [mobile, setMobile] = useState("closed")

  const showMobile = () =>{
    if(mobile === "open"){
        setMobile("closed")
    }else{
      setMobile("open");
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
          <i className="fa fa-solid fa-bars" onClick={showMobile} />
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
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
