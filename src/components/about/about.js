import React, { Component } from "react";
import { Grid, Cell, List, ListItem } from "react-mdl";
import picture from "./profile-pic.jpg";


class About extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("contemporary_china.png")`,
          backgroundRepeat: "repeat",
          width: "100%",
          height: "100%",
          color: "white",
        }}
      >
        <Grid className="about-grid">
          <Cell col={10}>
            <div className="grid">
            <h1 className="header">About Me</h1>
              <img className="profileImg" src={picture} alt="ProfilePic" />
              <List>
                <ListItem style={{
                        lineHeight: "2",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif"
                      }}>>
                I am a full stack web developer with a background in business
                management and human resources.
                </ListItem>
                <ListItem style={{
                        lineHeight: "2",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif"
                      }}>>
                I am highly knowledgable with both client and server side
                languages, responsive frameworks, and best code practices. I am
                experienced with HTML, CSS, JavaScript, jQuery, API 's, Node.js,
                React.js, MongoDB, and MySQL.
                </ListItem>
                <ListItem style={{
                        lineHeight: "2",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif"
                        }}>>
                As a graduate from the UC Davis Coding Bootcamp, I have
                developed numerous skills, as well as, strengthened existing
                abilities. I am dedicated to perfecting my craft while working
                along side seasoned developers.
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
