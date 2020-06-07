import React, { Component } from "react";
// import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

// class Contact extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           backgroundImage: `url("contemporary_china.png")`,
//           backgroundRepeat: "repeat",
//           width: "100%",
//           height: "100%",
//           color: "white",
//         }}
//       >
    
        {/* <Grid className="contact-grid">
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
        </Grid> */}
      

//         </div>
//     );
//   }
// }


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return(
     <div className="App">
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {
  }
  }
  
  export default Contact;
