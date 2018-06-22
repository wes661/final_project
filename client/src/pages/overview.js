import React from "react";
import { Link } from "react-router-dom";
import "../css/overview.css";

class Overview extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    
    <div className="wrapper">
        <div className="container-fluid ovrVeiwHeader">
            <div className="page-header">
                <h1>
                Overveiw
                </h1>
            </div>
        </div>
    </div>
    <div>
        <p>
            <Link to="/homepage"> homepage </Link>
        </p> 
    </div>
    <div class="container">
        <div class="row">
            <div class="col-2">
                 {/* Content  */}
            </div>
            <div class="col-2">
                {/* Content */}
            </div>
                    <div class="col-8">
                {/* Content */}
            </div>
        </div>
    </div>
    // ------ End HTML here -------------- //
    )}
};

export default Overview;