import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";





function App() {

  useEffect(() => {
    fetch("http://localhost:3001/api", 
      {
          mode: 'no-cors',
      }
    )
    .then(res => res.json())
    .then(res => console.log(res));
  }, []);

  return(
    // <BrowserRouter>
    <>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project/:title" element={<Project/>}/>
      </Routes>
      <footer>
        <h1>Made with <i className="fa fa-heart pulse"></i> by Kyle Sousa</h1>
      </footer>
    </>
    // </BrowserRouter>
  )
}

export default App;