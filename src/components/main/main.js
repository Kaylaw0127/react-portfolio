import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import Resume from "../resume/resume";

const Main = () => (
  
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    
);

export default Main;