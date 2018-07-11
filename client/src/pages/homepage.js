import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUserData } from "../actions/authactions";
import "../css/homepage.css";
import screen1 from "../pictures/test.png";


class Homepage extends React.Component {
  componentDidMount() {
    this.props.getUserData();
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
  }
  render() {
      return (
        // -------- Start HTML here -------- //
        <div className="wrapper">
          <div className="container-fluid">
            <Link to="/medications"> <p className="btn btn-info col-12 medBtn">Your Medications </p></Link>
            <Link to="/appointments"> <p className="btn btn-info col-12 appBtn">Doctor Appointments </p></Link>
            <Link to="/overview">  <p className="btn btn-info col-12 overBtn">Medical Overview  </p></Link>
          </div>
        </div>
        // ------ End HTML here -------------- //
      );
    } 
}

Homepage.propTypes = {
  getUserData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserData }
)(Homepage);
