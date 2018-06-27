import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../css/homepage.css";

class Homepage extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;

    return (
      // -------- Start HTML here -------- //
      <div className="wrapper">
        <div className="container-fluid">
          <p className="btn btn-info col-12 medBtn">
            <Link to="/medications"> Your Medications </Link>
          </p>
          <p className="btn btn-info col-12 appBtn">
            <Link to="/appointments"> Doctor Appointments </Link>
          </p>
          <p className="btn btn-info col-12 overBtn">
            <Link to="/overview"> Medical Overview </Link>
          </p>
          <p className="btn btn-info col-12 aboutBtn">
            <Link to="/about"> Our Mission </Link>
          </p>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Homepage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Homepage);
