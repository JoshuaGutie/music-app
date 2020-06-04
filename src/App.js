import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      // value: event.target.value,
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit (event)  {
    // don't reload the page
    event.preventDefault();
    this.setState({
      username: '',
      password: ''
    });
    
  };

  // handleClick = () => {
  //   this.setState({
  //     username: !this.state.username,
  //     password: !this.state.password
  //   })
  // }

  render() {
    return (
      <div className="App">
        
        <form>
          <TextField
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <TextField
            placeholder="Password"
            name = "password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

        <Button variant="contained" color="primary" onClick ={this.handleSubmit}>
          Primary
        </Button>
      </div>
    );
  }
}

export default App;
