import React from "react";
import "../css/medication.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Medications extends React.Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render(){
    const { isAuthenticated, user } = this.props.auth;

    const medList = user.meds.map(med => <li>{med.name}</li>);

    return (
      // -------- Start HTML here -------- //
      <div className = "wrapper">
       
        <ul>{medList}</ul>
        
        <div className = "container-fluid">
          {/* <h1>Click the filter icon <small>(<i className="glyphicon glyphicon-filter"></i>)</small></h1> */}
            <div className = "row">
            <div className = "col current">
              <div className = "panel panel-primary">
                <div className = "panel-heading">
                  <button type="button" className = "btn btn-info btn-sm modalBtn" data-toggle="modal" data-target="#myModal">New Script</button>
                   <br></br>
                  <h3 className = "panel-title">Current Scripts</h3>
                 
                  {/* <button type="button" className = "btn btn-info btn-sm modalBtn" data-toggle="modal" data-target="#myModal">New Script</button> */}
                </div>
                
                {/* <!-- Modal --> */}
                <div id="myModal" className = "modal fade " role="dialog">
                  <div className = "modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className = "modal-content">
                      <div className = "modal-header">
                        <h4 className ="panel-title">Add Script</h4>
                      </div>
                      <div className = "modal-body">
                        <div className = "form-group">
                          <input type="text" className = "form-control formGroupExampleInput" id="" placeholder="Name"></input>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shape</button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                >
                                  <path
                                    fill="brown"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="22"
                                  viewBox="0 0 20 22"
                                >
                                  <path
                                    fill="pink"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M10 1l8.66 5v10L10 21l-8.66-5V6z"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                >
                                  <circle
                                    cx="16"
                                    cy="51"
                                    r="10"
                                    fill="red"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    transform="translate(-5 -40)"
                                  />
                                </svg>
                              </a>
                
                             
                          </div>

                          <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  <input type="radio" aria-label="Radio button for following text input"> Morning</input>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <input type="radio" aria-label="Radio button for following text input">Noon</input>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <input type="radio" aria-label="Radio button for following text input">Evening</input>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <input type="radio" aria-label="Radio button for following text input">Night</input>
                                </a>
                                
                              </div>
                            </div>                         
                              <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
                          <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
                      </div>
                      <div className = "modal-footer">
                        <button type="button" className = "btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <div>
                  <table className="table table-sm-responsive">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-warning">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                      </tr>
                      <tr>
                        <th scopeName="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                  <br></br>
                <table className="table table-sm-responsive dev-table">
              
                  <tbody>
                    <tr>
                      
                      <td className="scriptNom">rx 1</td>
                      <td>2</td>
                      <td>morning</td>
                    </tr>
                    <tr>
                      
                      <td className="scriptNom">rx 2</td>
                      <td>1</td>
                      <td>boblahblah</td>
                    </tr>
                    <tr>
                      
                      <td className="scriptNom">rx 3</td>
                      <td>1</td>
                      <td>penceyreject</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* fix scrolling */}
          <div data-spy="scroll" data-target="#task-table" data-offset="0" className="scrollspy-example">
              
              <div className="col past">
                  <div className="panel panel-success">
                    <div className="panel-heading">
                      <h3 className="panel-title">Past Scripts</h3>
                    </div>
          
                    <scroll-container>
                      <scroll-page id="page-1">
                        <tr>
                          <td>rx 3</td>
                          <td>06/1999</td>
                        </tr>
                      </scroll-page>
                      <scroll-page id="page-2">
                        <tr>
                          <td>rx 2</td>
                          <td>06/1999</td>
                        </tr>               
                      </scroll-page>
                      <scroll-page id="page-3">
                      <tr>
                          <td>rx 1</td>
                          <td>06/1999</td>
                        </tr>
                      </scroll-page>
                    </scroll-container>

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

Medications.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Medications);
