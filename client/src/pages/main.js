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
      <div className="container">
        <div className="col-md-6">
          <div className="logbox">
            <form className="signup" method="post" action="/signup">
              <h1>create an account</h1>
              <input name="user[name]" type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" className="input pass"/>
              <input name="user[password]" type="password" placeholder="Choose a password" required="required" className="input pass"/>
              <input name="user[password2]" type="password" placeholder="Confirm password" required="required" className="input pass"/>
              <input name="user[email]" type="email" placeholder="Email address" className="input pass"/>
              <input type="submit" value="Sign up!" className="inputButton"/>
              <div className="text-center">
                  already have an account? <a href="" className="login_id">login</a>
              </div>
            </form>
          </div>
      </div>
    {/* <!--col-md-6--> */}
    
   <div className="col-md-6">
    <div className="logbox">
        <form className="signup" method="post" action="/signup">
          <h1>account login</h1>
          <input name="user[email]" type="email" placeholder="enter your email" className="input pass"/>
          <input name="user[password]" type="password" placeholder="enter your password" required="required" className="input pass"/>
          <input type="submit" value="Sign in!" className="inputButton"/>
          <div className="text-center">
            <a href="" >create an account</a> - <a href="" >forgot password</a>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
    
    // ------ End HTML here -------------- //
    )}
};

export default Main;