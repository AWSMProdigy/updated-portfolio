import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from "react";

function App() {
  const [menu, setmenu] = useState("false");
  const [mobMenu, setMobMenu] = useState("mob-false");
  
  const showmenu = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    if(menu === "true"){
        setmenu("false");
        setMobMenu("mob-false");
        mobBtn.classList.remove('open');

    }else{
        setmenu("true");
        setMobMenu("mob-true");
        mobBtn.classList.add('open');
    }
  }
  return (
    <div className="App">
      <nav>
        <div className="left"></div>
        <div className="name">
        </div>
        <div className="right">
          <ul className={"nav-links " + menu}>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
          <div className='mob-btn' onClick={showmenu}>
            <div className="mob-btn__burger"></div>
          </div>
        </div>
        </nav>
        <div className={"nav-links-mobile " + mobMenu} onClick={showmenu}>
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
