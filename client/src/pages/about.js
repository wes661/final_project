import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../css/homepage.css";

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
            <p>This is the About page</p>

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
