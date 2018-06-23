import React from "react";
// import { Link } from "react-router-dom";
import "../css/login.css";


class Main extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    <div className="wrapper">
    <div className="col-6">
    <div className="logbox">
      <form className="signup" method="post" action="/signup">
        <h1>Account login</h1>
        <input name="user[email]" type="email" placeholder="enter your email" className="input pass" />
        <input name="user[password]" type="password" placeholder="enter your password" required="required" className="input pass" />
        <input type="submit" value="Sign in" className="inputButton" />
        <div className="text-center" >
          <a href="# " className=" ">create an account</a> - <a href="# " className=" ">forgot password</a>
        </div>  
      </form>
    </div>
  </div>
  </div>
    // ------ End HTML here -------------- //
    )}
};

export default Main;