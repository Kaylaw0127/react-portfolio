import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import Resume from "../resume/resume";

const Main = () => (
  <Router>
      <Switch>
    <Route exact path="/" component={About} />
    <Route path="/projects" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
  </Router>
);

export default Main;