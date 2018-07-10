import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../css/about.css";
import download from "../pictures/download.jpg";
class About extends React.Component {
    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        return (
    // -------- Start HTML here -------- //
    <div className="wrapper">
        <div className="container-fluid">
            <div className="card">
            <img className="download" src={download} alt="download" />
          
            <div className="card-body">
                <h4 className="card-title">Mission</h4>
                <p className="card-text">
                Our goal was to create user friendly app to make going to the doctors easier. With simple, easy to use layout users of all ages will be able to navigate the app. Everything the user would need to keep track of their medications will be in one place: their pocket. The app is also intended to help users remember appointments.
                </p>
                <br></br>
                <h4 className="card-title">Members</h4>
                <p className="card-text">
                Who did what?
                <ul className="group">
                    <li><span className="nom">Joey Bridges</span> Back-end: React calendar</li>
                    <li><span className="nom">Angeleena Corrente</span>Front-end: UI/UX, mock up</li>
                    <li><span className="nom">Wes Hanson</span>Lead Back-end: Medical API, version control, file structure, React</li>
                    <li><span className="nom">Patrick Marrin</span> Back-end: Authentication</li>
                    <li><span className="nom">Corey Richard</span>Lead Front-end: UI/UX, mobile responsiveness</li>
                </ul>
                </p>
                {/* <a href="#!" clasName="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

        </div>
    </div>
    // ------ End HTML here -------------- //
        );
    }
}

About.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(About);
