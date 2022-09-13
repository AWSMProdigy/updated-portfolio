import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import React, { useState } from "react";
import { Link } from "react-router-dom";



function App() {
  const [menu, setmenu] = useState("false");
  const [mobMenu, setMobMenu] = useState("mob-false");

  const showmenu = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    let menuItem = document.querySelector('.nav-links');
    const mobMenuItem = document.querySelector('.nav-links-mobile');

    // Close menu
    if(menu === "true"){
        setmenu("false");
        setMobMenu("mob-false");
        mobBtn.classList.remove('open');

    // Open up menu
    }else{
        setmenu("true");
        setMobMenu("mob-true");
        mobBtn.classList.add('open');
        let originalValues = ["Introduction", "About", "Projects", "Skills", "Contact"]
    }
  }

  return(
    <BrowserRouter>
    <nav>
        <div className="left">
          <Link to={"/"}>
            <div className='nameNav'>
              <h3>Kyle Sousa</h3>
              <h5>Full-Stack Web Developer</h5>
            </div>
          </Link>
        </div>
        <div className="name">
        </div>
        <div className="right">
          <ul className={"nav-links"}>
            <a href="#Intro">Introduction</a>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
          <div className='mob-btn' onClick={showmenu}>
            <div className="mob-btn__burger"></div>
          </div>
        </div>
      </nav>
      <div className={"nav-links-mobile " + mobMenu} onClick={showmenu}>
        <a href="#Intro" id="introLink"><h1>Introduction</h1></a>
        <a href="#About" id="aboutLink"><h1>About</h1></a>
        <a href="#Projects" id="projectLink"><h1>Projects</h1></a>
        <a href="#Skills" id="skillsLink"><h1>Skills</h1></a>
        <a href="#Contact" id="contactLink"><h1>Contact</h1></a>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
