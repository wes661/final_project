import React from "react";
import "../css/medications.css";
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
                  <h3 className = "panel-title">Current Scripts</h3>
                  <button type="button" className = "btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">New Script</button>
                </div>
                
                {/* <!-- Modal --> */}
                <div id="myModal" className = "modal fade" role="dialog">
                  <div className = "modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className = "modal-content">
                      <div className = "modal-header">
                        <h4 className ="modal-title">Add Script</h4>
                      </div>
                      <div className = "modal-body">
                        <form>
                          <div className = "form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" className = "form-control formGroupExampleInput" id="" placeholder="Example input"></input>
                          </div>
                          <div className = "form-group">
                            <label for="formGroupExampleInput2">Shape</label>
                            <input type="text" className = "form-control formGroupExampleInput2" id="" placeholder="Another input"></input>
                          </div>
                          <div className = "form-group">
                            <label for="formGroupExampleInput2">Quantity</label>
                            <input type="text" className = "form-control formGroupExampleInput2" id="" placeholder="Another input"></input>
                          </div>
                          <div className = "form-group">
                            <label for="formGroupExampleInput2">Frequancy  </label>
                            <input type="text" className = "form-control formGroupExampleInput2" id="" placeholder="Another input"></input>
                          </div>
                          <input type="submit" className="addBtn" />
                        </form>
                      </div>
                      <div className = "modal-footer">
                        <button type="button" className = "btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <div>
                  <table className="table">
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

  
                <table className="table table-sm-responsive dev-table">
                  <thead>
                    <tr>
                      
                      <th>Pill</th>
                      <th>Quantity</th>
                      <th>Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>rx 1</td>
                      <td>2</td>
                      <td>morning</td>
                    </tr>
                    <tr>
                      
                      <td>rx 2</td>
                      <td>1</td>
                      <td>boblahblah</td>
                    </tr>
                    <tr>
                      
                      <td>rx 3</td>
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
                    
                    <table className="table table-sm-responsive task-table" id="">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Script</th>
                          <th>MMYYYY</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>rx 1</td>
                          <td>061999</td>
                          
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>rx 2</td>
                          <td>061999</td>
                          
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>rx 3</td>
                          <td>061999</td>
                          
                        </tr>
                    
                      </tbody>
                    </table>
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
