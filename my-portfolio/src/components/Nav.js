import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(){
    const [menu, setmenu] = useState("false");
    const [mobMenu, setMobMenu] = useState("mob-false");
    const location = useLocation();


    const hidden = {
        visibility: 'hidden'
    }

    const display = {
        visibility: 'visible'
    }

    function showNav() {
    if(location.pathname === "/Project"){
        return hidden;
    }else{
        return display;
    }
   }
    
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
        <>
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
        <div className="right" style={showNav()}>
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
      <div className={"nav-links-mobile " + mobMenu} style={showNav()} onClick={showmenu}>
        <a href="#Intro" id="introLink"><h1>Introduction</h1></a>
        <a href="#About" id="aboutLink"><h1>About</h1></a>
        <a href="#Projects" id="projectLink"><h1>Projects</h1></a>
        <a href="#Skills" id="skillsLink"><h1>Skills</h1></a>
        <a href="#Contact" id="contactLink"><h1>Contact</h1></a>
      </div>
      </>
    )
}

export default Nav;