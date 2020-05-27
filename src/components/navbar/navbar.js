import React from "react";
import './style.css';
import { Layout, Navigation, Header, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';

function Navbar()  {
    return (
        <div className="demo-big-content">
        <Layout>
            <Header title="Kayla Ward" scroll>
                <Navigation>
                    <Link to="/">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="https://www.linkedin.com/in/kaylaw0127/"> LinkedIn <i className="fa fa-linkedin-square"></i></Link>
                    <Link to="https://github.com/Kaylaw0127">Github <i className="fa fa-github"></i></Link>
                </Navigation>
            </Drawer>
          </Layout>
        </div>
    )}

export default Navbar;