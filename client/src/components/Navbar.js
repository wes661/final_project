import React, { Component } from "react";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authactions";
import "../css/nav.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
 titleFromLink(string) {
   switch (string) {
     case "/appointments":
       return "Appointments"
     case "/profile":
       return "Profile"
     case "/editProfile":
       return "Edit Profile"
     case "/about":
       return "Our Mission"
     case "/homepage":
       return "Home Page"
     case "/medications":
       return "Medications"
     case "/overview":
       return "Medical Overview"
     case "/main":
       return "Login"
     case "/signup":
       return "Register"
     default: 
      return "RX Tracker"
   }
 }
  render() {
    const { isAuthenticated} = this.props.auth;
    const {pathname} = this.props.location;
    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link home" to="/homepage">
            Home Page
            </Link>
          <div href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
            <Link className="nav-link logout" to="/">
              Logout
            </Link>
          </div>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link login" to="/">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <h3 className="pageTitle" style={{ color: "white" }}>{this.titleFromLink(pathname)}</h3>
          <div className="topnav">
            <div className="topnav-right">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
            
          {/* </div> */}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);



