import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Nav(){
    const [menu, setmenu] = useState("false");
    const [mobMenu, setMobMenu] = useState("mob-false");
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);


    const hidden = {
        visibility: 'hidden'
    }

    const display = {
        visibility: 'visible'
    }

    function showNav() {
    if(location.pathname.includes("/Project")){
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
            <HashLink smooth to="#Intro">Introduction</HashLink>
            <HashLink smooth to="#About">About</HashLink>
            <HashLink smooth to="#Skills">Skills</HashLink>
            <HashLink smooth to="#Projects">Projects</HashLink>
            <HashLink smooth to="#Contact">Contact</HashLink>
          </ul>
          <div className='mob-btn' onClick={showmenu}>
            <div className="mob-btn__burger"></div>
        </div>
        </div>
      </nav>
      <div className={"nav-links-mobile " + mobMenu} style={showNav()} onClick={showmenu}>
        <HashLink smooth to="#Intro">Introduction</HashLink>
        <HashLink smooth to="#About">About</HashLink>
        <HashLink smooth to="#Skills">Skills</HashLink>
        <HashLink smooth to="#Projects">Projects</HashLink>
        <HashLink smooth to="#Contact">Contact</HashLink>
      </div>
      </>
    )
}

export default Nav;