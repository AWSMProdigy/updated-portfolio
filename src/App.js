import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";




function App() {
  const navRef = useRef(null);
  return(
    // <BrowserRouter>
    <>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Home resultRef={navRef}/>} />
          <Route path="/Project/:title" element={<Project ref={navRef}/>}/>
      </Routes>
      <footer>
        <h1>Made with <i className="fa fa-heart pulse"></i> by Kyle Sousa</h1>
      </footer>
    </>
    // </BrowserRouter>
  )
}

export default App;
