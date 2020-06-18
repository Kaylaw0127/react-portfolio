import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import Main from "./components/main/main";
import Resume from "./components/resume/Kayla_Ward_Resume_Web.pdf";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="navbar-color"
          title={
            <Link style={{ color: "white" }} to="/">
              Kayla Ward
            </Link>
          }
        >
          <Navigation>
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="">
          <Navigation>
            <a href={Resume} target="_blank">
              Resume <i className="fa fa-file-text"></i>
            </a>
            <a href="https://www.linkedin.com/in/kaylaw0127/" target="_blank" rel="noopener noreferrer">
              LinkedIn <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/Kaylaw0127" target="_blank" rel="noopener noreferrer">
              Github <i className="fa fa-github"></i>
            </a>
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
