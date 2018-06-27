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
      <div className="wrapper">
       
        <ul>{medList}</ul>
        
        <div className="container">
          {/* <h1>Click the filter icon <small>(<i className="glyphicon glyphicon-filter"></i>)</small></h1> */}
            <div className="row">
            <div className="col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Current Scripts</h3>
                  {/* <div className="pull-right">
                    <span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
                      <i className="glyphicon glyphicon-filter"></i>
                    </span>
                  </div> */}
                </div>
                <div className="panel-body">
                  <input type="text" className="form-control dev-table-filter" id="" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
                </div>
                <table className="table table-hover" id="dev-table">
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
            <div className="col-md-6">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Past Scripts</h3>
                  {/* <div className="pull-right">
                    <span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
                      <i className="glyphicon glyphicon-filter"></i>
                    </span>
                  </div> */}
                </div>
                <div className="panel-body">
                  <input type="text" className="form-control" id="task-table-filter" data-action="filter" data-filters="#task-table" placeholder="Filter Tasks" />
                </div>
                <table className="table table-hover" id="task-table">
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
