import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import picture from './profile-pic.jpg';

class About extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
            <Grid className="landing-grid">
              <Cell col={12}>
              <img src= {picture} alt="ProfilePic" />

                <p class="paragraph"> I am a full stack web developer with a background in business management and human resources. I am highly knowledgable with both client and server side languages, responsive frameworks, and best code practices. I am experienced with HTML, CSS, JavaScript, jQuery, API's, and Node.js. As a graduate from the UC Davis Coding Bootcamp,  I have developed numerous skills, as well as strengthened existing abilities. I am dedicated to perfecting my craft while working along side seasoned developers.
                </p>

            </Cell>
        </Grid>
      </div>
        )
    }
}

export default About;