import React from "react";
import logo from "../logo.svg";
import "../css/App.css";
import { Link } from "react-router-dom";

class Main extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            <Link to="/homepage"> homepage </Link>
        </p>  
    </div>
    // ------ End HTML here -------------- //
    )}
};

export default Main;