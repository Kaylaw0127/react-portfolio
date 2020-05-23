import React from "react"
import './style.css'
import { Layout, Navigation, Header, Drawer} from 'react-mdl';


function Navbar()  {
    return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Kayla Ward" scroll>
            <Navigation>
                <a href="#">Resume</a>
                <a href="https://www.linkedin.com/in/kaylaw0127/">LinkedIn</a>
                <a href="https://github.com/Kaylaw0127">Github</a>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </Navigation>
        </Drawer>
    </Layout>
    </div>
)}

export default Navbar