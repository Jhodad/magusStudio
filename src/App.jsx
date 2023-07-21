import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Samples from "./components/Samples";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/samples" element={<Samples />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>


      </Router>
    </div>
  )
}

export default App;

