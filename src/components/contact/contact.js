import React, { Component } from "react";
import axios from "axios";
import { Grid, Cell} from "react-mdl";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

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

            
            <form
              className="contact-form"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </Cell>
      </Grid>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
