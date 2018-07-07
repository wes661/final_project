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
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const medList = user.meds.map(med => <li>{med.name}</li>);

    return (
      // -------- Start HTML here -------- //
      <div className="wrapper">
        <ul>{medList}</ul>

        <div className="container-fluid">
          {/* <h1>Click the filter icon <small>(<i className="glyphicon glyphicon-filter"></i>)</small></h1> */}
          <div className="row">
            <div className="col current">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <button
                    type="button"
                    className="btn btn-info btn-sm modalBtn"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    New Script
                  </button>
                  <br />
                  <h3 className="panel-title">Current Scripts</h3>

                  {/* <button type="button" className = "btn btn-info btn-sm modalBtn" data-toggle="modal" data-target="#myModal">New Script</button> */}
                </div>
                {/* <!-- Modal --> */}
                <div id="myModal" className="modal fade " role="dialog">
                  <div className="modal-dialog">
                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="panel-title">Add Script</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control formGroupExampleInput"
                            id=""
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="form-control formGroupExampleInput"
                            id=""
                            placeholder="Quant"
                          />
                        </div>

                        <div className="checkBox form-wrapper">
                          <span className="freq-form-control-wrap">
                            <span className="freq-form-control  freq-checkbox freq-validates-as-required">
                              <span className="freq-list-item first">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="times"
                                    value="morning"
                                  />
                                  <span className="itemLabel">Morning</span>
                                </label>
                              </span>
                              <span className="freq-list-item">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="times"
                                    value="lunch"
                                  />
                                  <span className="itemLabel">Afternoon</span>
                                </label>
                              </span>
                              <span className="freq-list-item">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="times"
                                    value="dinner"
                                  />
                                  <span className="itemLabel">Evening</span>
                                </label>
                              </span>
                              <span className="freq-list-item">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="times"
                                    value="night"
                                  />
                                  <span className="itemLabel">Night</span>
                                </label>
                              </span>
                            </span>
                          </span>
                        </div>
                        <br />
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Shape
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                >
                                  <path
                                    fill="white"
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
                                    fill="white"
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
                                    fill="white"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    transform="translate(-5 -40)"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="21"
                                  viewBox="0 0 22 21"
                                >
                                  <path
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M11 1l7.818 3.765 1.931 8.46-5.41 6.785H6.66l-5.41-6.785 1.93-8.46z"
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
                                  <path
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M11 1l7.071 2.929L21 11l-2.929 7.071L11 21l-7.071-2.929L1 11l2.929-7.071z"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="34"
                                  height="16"
                                  viewBox="0 0 34 16"
                                >
                                  <path
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M17.219.54a.5.5 0 0 0-.384-.003L.811 7.073a.5.5 0 0 0-.011.92l16.023 7.005a.5.5 0 0 0 .407-.003l15.428-7.004a.5.5 0 0 0-.011-.916L17.219.54z"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="14"
                                  viewBox="0 0 28 14"
                                >
                                  <rect
                                    width="27"
                                    height="13"
                                    x="2.5"
                                    y="87.5"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    rx="6.5"
                                    transform="translate(-2 -87)"
                                  />
                                </svg>
                              </a>
                              <a className="dropdown-item" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="17"
                                  viewBox="0 0 31 17"
                                >
                                  <path
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#9B9B9B"
                                    d="M15.298 16.147c5.523 0 14.625-1.624 14.625-7.147S20.82 1.284 15.298 1.284.673 3.477.673 9s9.102 7.147 14.625 7.147z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Color
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item kolor" href="#">
                                White
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Red
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Pink
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Light blue
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Dark blue
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Green
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Yellow
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Brown
                              </a>
                              <a className="dropdown-item kolor" href="#">
                                Orange
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <table className="table-responsive scripts">
                  <tbody>
                    <tr className="listOscripts">
                      <td className="scriptNom">
                        Vicodin{" "}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="listOscripts"
                        >
                          &times;
                        </button>
                      </td>
                      <td>2</td>
                      <td>Morning/Evening</td>
                    </tr>

                    <tr className="listOscripts">
                      <td className="scriptNom">
                        Oxycodon{" "}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="listOscripts"
                        >
                          &times;
                        </button>
                      </td>
                      <td>1</td>
                      <td>Afternoon</td>
                    </tr>

                    <tr className="listOscripts">
                      <td className="scriptNom">
                        Xanax<button
                          type="button"
                          className="close"
                          data-dismiss="listOscripts"
                        >
                          &times;
                        </button>
                      </td>
                      <td>1</td>
                      <td>Night</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* fix scrolling */}
            <div
              data-spy="scroll"
              data-target="#task-table"
              data-offset="0"
              className="scrollspy-example"
            >
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
