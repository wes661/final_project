import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../css/profile.css";
import background from "../pictures/profilebackground.png";
import placeholder from "../pictures/placeholder.jpeg";

class EditProfile extends React.Component {
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

                <form className="form-inline">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                    <input type="text" className="form-control" id="address" placeholder="address" />
                    <input type="text" className="form-control" id="Allergies" placeholder="Allergies" />
                    <input type="text" className="form-control" id="MedicalAlerts" placeholder="Medical Alerts, IE: Diabetes" />    
                    <input type="text" className="form-control" id="ContactName" placeholder="Emergency Contact Name" />
                    <input type="text" className="form-control" id="ContactPhone" placeholder="Emergency Contact Phone" /> 
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>
      // ------ End HTML here -------------- //
    );
  }
}

EditProfile .propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(EditProfile );
