import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";

class Homepage extends React.Component{
    componentDidMount(){
    // ------    put on page load js here ------ //
    }
    render(){
        return (
    // -------- Start HTML here -------- //
    <div className="wrapper">
        <div className="container-fluid homeHeader">
            <div className="page-header">
                <h1>
                   Home Page
                </h1>
            </div>
        </div>
   
    <div className="container-fluid">
        <p className="btn btn-info col-sm-12 medBtn">
            <Link to="/medications"> medications </Link>
        </p>
        <p className="btn btn-info col-sm-12 appBtn">
            <Link to="/appointments"> appointments </Link>
        </p>  
        <p className="btn btn-info col-sm-12 overBtn">
            <Link to="/overview"> overview </Link>
        </p>
    </div>
</div>
    // ------ End HTML here -------------- //
    )}
};

export default Homepage;