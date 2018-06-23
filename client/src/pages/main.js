import React from "react";
// import { Link } from "react-router-dom";
import "../css/login.css";
import API from "../utils/API";

class Main extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    API.login(this.state.email, this.state.password).then(res => {
      console.log(res.data);
    });
  };
  componentDidMount() {
    // ------    put on page load js here ------ //
  }
  render() {
    return (
      // -------- Start HTML here -------- //
      <div className="wrapper">
        <div className="col-6">
          <div className="logbox">
            <form className="signup">
              <h1>Account login</h1>
              <input
                name="email"
                type="email"
                placeholder="enter your email"
                className="input pass"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                name="password"
                type="password"
                placeholder="enter your password"
                required="required"
                className="input pass"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <input
                type="submit"
                value="Sign in"
                className="inputButton"
                onClick={this.handleFormSubmit}
              />
              <div className="text-center">
                <a href="# " className=" ">
                  create an account
                </a>{" "}
                -{" "}
                <a href="# " className=" ">
                  forgot password
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

export default Main;
