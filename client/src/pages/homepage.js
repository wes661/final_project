import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import placeholder from '../pictures/placeholder.jpeg';


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
        <div className="jumbotron jumbotron-fluid justify-content-center">
            <p className="profileName">Welcome Harold!</p>
            <img className="profilePic" src={placeholder} alt="profile"/>
        </div>
        <p className="btn btn-info col-12 medBtn">
            <Link to="/medications"> medications </Link>
        </p>
        <p className="btn btn-info col-12 appBtn">
            <Link to="/appointments"> appointments </Link>
        </p>  
        <p className="btn btn-info col-12 overBtn">
            <Link to="/overview"> overview </Link>
        </p>
    </div>
</div>
    // ------ End HTML here -------------- //
    )}
};

export default Homepage;