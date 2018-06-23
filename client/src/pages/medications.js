import React from "react";
import "../css/medication.css";
import { Link } from "react-router-dom";

class Medications extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    <div className="wrapper">
        <div className="container-fluid stickyHeader">
            <div className="page-header">
                <h1 className="minitron">
                  Medication
                </h1>
                <p>
                  <Link to="/homepage"> Homepage </Link>
                </p> 
            </div>
        </div>
        

   
    <table className="table">
        <thead className="topBand">
          <tr>
            <th>Pill</th>
            <th>Times taken</th>
            <button type="button" className="btn btn-light btn-sm addBtn" data-toggle="modal" data-target="#exampleModal">
              Add
            </button> 
            {/* <td><span class="badge badge-pill badge-primary">Add</span></td> */}
           
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            <td>Xanax</td>
            <td>Evening</td>
            <td><span className="badge badge-pill badge-primary">Done</span></td>
          </tr>
          <tr>
            {/* <th scope="row">2</th> */}
            <td>Percocet</td>
            <td>Morning and Evening</td>
            <td><span className="badge badge-pill badge-primary">Done</span></td>
          </tr>
        </tbody>
    </table>

    
    {/* //  Button trigger modal 
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button> */}

    {/* Modal  */}
    <div className="modal exampleModal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div>
    <ul className="list-group">
        <li className="list-group-item active">Past Scripts</li>
        <li className="list-group-item">Viccodin</li>
        <li className="list-group-item">Methaqualone</li>
    </ul>
    </div> 
    </div>
    // ------ End HTML here -------------- //
    )}
};

export default Medications;