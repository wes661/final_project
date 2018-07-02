import React from "react";
import "../css/medication.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
// import 'bootstrap';

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
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>
                          <div className = "modal-body">
                            <div className = "form-group">
                              <input type="text" className = "form-control formGroupExampleInput" id="" placeholder="Name"></input>
                              <input type="text" className = "form-control formGroupExampleInput" id="" placeholder="Freq"></input>
                              <input type="text" className = "form-control formGroupExampleInput" id="" placeholder="Quant"></input>
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
                                
                                {/* <div className="input-group freq">
                                  <div className="input-group-prepend">
                                  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Freq</button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="#">
                                        doesnt like radio option
                                        <div className="input-group">
                                          <div className="input-group-prepend">
                                            <div className="input-group-text">
                                              <input type="radio" aria-label="Radio button for following text input"></input>
                                            </div>
                                          </div>
                                          <input type="text" className="form-control" aria-label="Text input with radio button">Morning</input>
                                        </div>

                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div className="input-group quant">
                                  <div className="input-group-prepend">
                                  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quant</button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        
                                      </a>
                                    </div>
                                  </div>
                                </div> */}

                              </div>
                            </div>
                            
                          </div>
                          <div className = "modal-footer">
                            <button type="button" className = "btn btn-default" data-dismiss="modal">Submit</button>
                          </div>
                        </div>
                    </div> 
                </div>

                <br></br>
                <table className="table-responsive scripts">
                  <tbody>
                    <tr className="listOscripts">                      
                      <td className="scriptNom">Vicodin <button type="button" className="close" data-dismiss="listOscripts">&times;</button></td>
                      <td>2</td>
                      <td>Morning/Evening</td>                     
                    </tr>
                    
                    <tr className="listOscripts">                      
                      <td className="scriptNom">Oxycodon <button type="button" className="close" data-dismiss="listOscripts">&times;</button></td>
                      <td>1</td>
                      <td>Afternoon</td>
                    </tr>

                    <tr className="listOscripts">                      
                      <td className="scriptNom">Xanax<button type="button" className="close" data-dismiss="listOscripts">&times;</button></td>
                      <td>1</td>
                      <td>Night</td>
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
                      <scroll-page className="scrollPg" id="page-1">
                        <ul>
                          <li>Meperidine</li>
                          <li>06/1999</li>
                        </ul>
                      </scroll-page>
                      <scroll-page className="scrollPg" id="page-2">
                        <ul>
                          <li>Klonopin</li>
                          <li>06/1999</li>
                        </ul>              
                      </scroll-page>
                      <scroll-page className="scrollPg" id="page-3">
                        <ul>
                          <li>Adderall</li>
                          <li>06/1999</li>
                       </ul>
                      </scroll-page>
                    </scroll-container>

                  </div>
                </div>
              </div>
            </div>  
          </div>          
        </div>
      // </div>
        
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
