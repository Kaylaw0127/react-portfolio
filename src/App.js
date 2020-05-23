import React, { Component } from "react";
import './App.css';
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <About />
          <Contact />
          <Portfolio />
        
      </div>
      
    )
}
}

export default App;
