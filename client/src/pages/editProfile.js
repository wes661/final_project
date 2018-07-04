import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "../actions/authactions";
import "../css/profile.css";
import background from "../pictures/profilebackground.png";
import placeholder from "../pictures/placeholder.jpeg";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      allergies: "",
      medicalAlerts: "",
      emergencyContact: "",
      emergencyNumber: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProfile = {
      name: this.state.name,
      address: this.state.address,
      allergies: this.state.allergies,
      medicalAlerts: this.state.medicalAlerts,
      emergencyContact: this.state.emergencyContact,
      emergencyNumber: this.state.emergencyNumber
    };

    this.props.createProfile(newProfile, this.props.history);
  };

  componentDidMount() {
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
        <div className="container-fluid">
          <form onSubmit={this.onSubmit} className="form-inline">
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.props.name}
              onChange={this.onChange}
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control"
              name="address"
              value={this.props.address}
              onChange={this.onChange}
              placeholder="Address"
            />
            <input
              type="text"
              className="form-control"
              name="allergies"
              value={this.props.allergies}
              onChange={this.onChange}
              placeholder="Allergies"
            />
            <input
              type="text"
              className="form-control"
              name="medicalAlerts"
              value={this.props.medicalAlerts}
              onChange={this.onChange}
              placeholder="Medical Alerts, IE: Diabetes"
            />
            <input
              type="text"
              className="form-control"
              name="emergencyContact"
              value={this.props.emergencyContact}
              onChange={this.onChange}
              placeholder="Emergency Contact Name"
            />
            <input
              type="text"
              className="form-control"
              name="emergencyNumber"
              value={this.props.emergencyNumber}
              onChange={this.onChange}
              placeholder="Emergency Contact Phone"
            />
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(EditProfile));
