import React from "react";
import "../css/medications.css";
import { Link } from "react-router-dom";

class Medications extends React.Component {
    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    <div className="wrapper">
        <h1>Medication page</h1>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
        </p>
        <p>
            <Link to="/homepage"> homepage </Link>
        </p> 

   
    <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Pill</th>
            <th>Times taken</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Xanax</td>
            <td>Evening</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Percocet</td>
            <td>Morning and Evening</td>
          </tr>
        </tbody>
    </table>
    //  Button trigger modal 
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>

    // Modal 
    <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
    /* <div>
    <ul className="list-group">
        <li className="list-group-item active">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
    </ul>
    </div> 
    </div>
    // ------ End HTML here -------------- //
    )}
};

export default Medications;