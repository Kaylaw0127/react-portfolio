import React, { Component } from "react";
import axios from "axios";
import { Grid, Cell} from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <Grid
        style={{
          backgroundImage: `url("contemporary_china.png")`,
          backgroundRepeat: "repeat",
          width: "100%",
          height: "100%",
          color: "white",
        }}
        className="grid-contact"
      >
        <Cell col={10}>
          <div className="contact-grid">
            <h1 className="header">Contact</h1>

            <div className="contact-list">
              <i className="fa fa-phone fa-fw" />
              (530) 329-3059 |
              <i className="fa fa-envelope-o fa-fw" />
              kaylaw0127@gmail.com
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Contact;
