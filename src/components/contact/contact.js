import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
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
        <Grid className="contact-grid">
          <Cell col={10}>
          <div className="grid">
            <h1 className="header">Contact</h1>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone"/>
                    (530) 329-3059
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope-o"/>
                    kaylaw0127@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
