import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUserData } from "../actions/authactions";
import "../css/profile.css";
import background from "../pictures/profilebackground.png";
import placeholder from "../pictures/placeholder.jpeg";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getUserData();
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;

    return (
      // -------- Start HTML here -------- //
      <div className="wrapper">
        <img className="background" src={background} alt="wallpaper" />
        <img className="profilePic2" src={placeholder} alt="profile" />
        <h1 className="userName"> Welcome Harold </h1>
        <p className="profileEdit">
          <Link to="/editProfile"> Edit Profile </Link>
        </p>
        <p className="back">
          <Link to="/overview"> Back to Overview </Link>
        </p>
        <div className="container-fluid">
          <div className="card">
            <ul className="list-group">
              <li className="list-group-item">Name: Harold ShutterStock</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Address: 1234 Murder Lane</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                Allergies: Chocolate, Peanuts, Fun
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Medical Alerts: Diabetic</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                Emergency Contact: Younger Harold
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                Emergency Contact Phone: 555-555-5555
              </li>
            </ul>
          </div>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Profile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserData }
)(Profile);
