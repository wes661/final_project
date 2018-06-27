import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/overview.css";
import placeholder from "../pictures/placeholder.jpeg";

class Overview extends React.Component {
  state = {
    day: ""
  };
  handleDaySelect = () => {
    let date = document.getElementById("select").value;
    this.setState({
      day: date
    });
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const medList = user.meds.map(med => <td>{med.name}</td>);

    return (
      // -------- Start HTML here -------- //

      <div className="wrapper">
        {/* Profile start */}
        <div className="container-fluid">
          <img className="profilePic" src={placeholder} alt="profile" />
          <div className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Welcome Harold!</h1>
            <h1 className="text-center">Allergies: Peanuts, Chocolate, Fun</h1>
            <h1 className="text-center">Medical Alerts: Diabetic</h1>
            <h1 className="text-center"><Link to="/profile"> View Profile </Link></h1>
          </div>
        </div>
        {/* Profile End */}
        {/* Appointment Div Start */}
        <div className="container-fluid">
          <select
            name="subjects"
            id="select"
            className="form-control"
            onChange={this.handleDaySelect}
          >
            <option>Select Day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>
        <div className="appointments">
          <h1 className="appointmentHeader">
            <hr />
          </h1>
          <div className="table-users">
            <div className="header">Appointments</div>
            <br />

            <table cellSpacing="0">
              <thead>
                <tr className="hidden">
                  <th>Day</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th width="230">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr className={this.state.day === "monday" ? "" : "hidden"}>
                  <td className="day">Monday</td>
                  <td className="center">
                    <p>Location: 1234 W. Medical Drive </p>
                    <p>Appt Time: 2:30 PM</p>
                    <p>Reminders: You wont be able to drive home due to anethesia </p>
                  </td>
                </tr>
                <tr className={this.state.day === "tuesday" ? "" : "hidden"}>
                  <td className="day">Tuesday</td>
                  <td className="center"><p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
                <tr className={this.state.day === "wednesday" ? "" : "hidden"}>
                  <td className="day">Wednesday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
                <tr className={this.state.day === "thursday" ? "" : "hidden"}>
                  <td className="day">Thursday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
                <tr className={this.state.day === "friday" ? "" : "hidden"}>
                  <td className="day">Friday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
                <tr className={this.state.day === "saturday" ? "" : "hidden"}>
                  <td className="day">Saturday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
                <tr className={this.state.day === "sunday" ? "" : "hidden"}>
                  <td className="day">Sunday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
                    <p>This is the time </p>
                    <p>This is additional Comments about it </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Appointment Div End */}
        {/* Medication Div Start */}
        <div className="container-fluid">
          <div className="medication">
            <hr />
            <div className="header">Medications</div>
            <table cellSpacing="0">
              <thead>
                <tr className="hidden">
                  <th>Day</th>
                  <th />
                  <th>Generic</th>
                  <th width="230">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr className={this.state.day === "monday" ? "" : "hidden"}>
                  <td className="day">Monday</td>
                 
                  <td className="center"> 
                  <p>Morning</p>
                  <div className = "pillBox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                      <path fill="brown" fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                      <path fill="pink" fill-rule="evenodd" stroke="#9B9B9B" d="M10 1l8.66 5v10L10 21l-8.66-5V6z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                    </svg>
                  </div>
                  </td>
                  <td className="center"> 
                  <p>Midday</p>
                    <div className = "pillBox">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                          <path fill="brown" fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                          <path fill="pink" fill-rule="evenodd" stroke="#9B9B9B" d="M10 1l8.66 5v10L10 21l-8.66-5V6z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                          <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                        </svg>
                    </div>
                  </td>
                  <td className="center"> 
                  <p>Evening</p>
                    <div className="pillBox">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                      <path fill="yellow" fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                      <path fill="purple" fill-rule="evenodd" stroke="#9B9B9B" d="M10 1l8.66 5v10L10 21l-8.66-5V6z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                      <circle cx="16" cy="51" r="10" fill="red" fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className={this.state.day === "tuesday" ? "" : "hidden"}>
                  <td className="day">Tuesday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
                <tr className={this.state.day === "wednesday" ? "" : "hidden"}>
                  <td className="day">Wednesday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
                <tr className={this.state.day === "thursday" ? "" : "hidden"}>
                  <td className="day">hursday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
                <tr className={this.state.day === "friday" ? "" : "hidden"}>
                  <td className="day">Friday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
                <tr className={this.state.day === "saturday" ? "" : "hidden"}>
                  <td className="day">Saturday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
                <tr className={this.state.day === "sunday" ? "" : "hidden"}>
                  <td className="day">Sunday</td>
                  <td>This is where the appointment is </td>
                  <td>This is the time </td>
                  <td>This is additional Comments about it </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Medication Div End */}
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Overview.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Overview);
