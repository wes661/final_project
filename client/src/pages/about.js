import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../css/about.css";
import download from "../pictures/download.jpg";
import corey from "../pictures/corey.jpeg"
import joey from "../pictures/joey.jpeg"
import wes from "../pictures/wes.jpeg"
import patrick from "../pictures/patrick.jpg"
import geina from "../pictures/geina.jpeg"

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
                        RX Tracker is a user friendly app which aims to make going to the doctors easier. <br /><hr />Our app uses a simple clean layout. Just log in, and press the button of what you would like to track. Everything you would need to keep track of your appointments or  medications will be in one place: your pocket. 
                    </p>    
                <br></br>
                <h4 className="card-title">Meet the Team</h4>
                            <div className="container-fluid scrollDiv">
                                <div className="row">
                                    <div className="col-sm-6 text-center mb-4">
                                        <img className="rounded-circle img-fluid d-block mx-auto aboutImg" src={wes} alt="" />
                                        <h3>Wesley Hanson</h3>
                                        <br />
                                        <p>Wesley provided backend management for the project, creating the MongoDB structure and Authentication as well as handling all the back end API routes for user data </p>
                                        <hr />
                                    </div>
                                    <div className="col-sm-6 text-center mb-4">
                                        <img className="rounded-circle img-fluid d-block mx-auto aboutImg" src={joey} alt="" />
                                        <h3>Joey Bridges</h3>
                                        <br />
                                        <p>Joey Designed and implimented the React calendar to keep track of user appointments.</p>
                                        <hr/>
                                    </div>
                                    <div className="col-sm-6 text-center mb-4">
                                        <img className="rounded-circle img-fluid d-block mx-auto aboutImg" src={patrick} alt="" />
                                        <h3>Patrick Marrin</h3>
                                        <br />
                                        <p>Worked with dynamically generating SVG shape and color based on pill selection and pushing it to the overview page for rendering</p>
                                        <hr />
                                    </div>
                                    <div className="col-sm-6 text-center mb-4">
                                    <img className="rounded-circle img-fluid d-block mx-auto aboutImg" src={corey} alt="" />
                                        <h3>Corey Richard</h3>
                                        <br />
                                        <p>Provided UI/UX project direction, mobile responsiveness and desktop layout. </p>
                                        <hr />
                                    </div>
                                    <div className="col-sm-6 text-center mb-4">
                                    <img className="rounded-circle img-fluid d-block mx-auto aboutImg" src={geina} alt="" />
                                        <h3>Angeleena Corrente</h3>
                                        <br />
                                        <p>Provided project design and worked with integrating SVG into the Medication page</p>
                                   
                                    </div>
                            </div>
             </div>
            
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
