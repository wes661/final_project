import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../actions/authactions";
import "../css/overview.css";
import placeholder from "../pictures/placeholder.jpeg";
import background from "../pictures/profilebackground.png";

import oval from "../pictures/circle.svg";

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
    this.props.getUserData();
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
  }

  PopulateShapes = (medications) => {
    // console.log(medications);
    let shapes = medications.map(meds => {
      switch (meds.shape) {
        case "5-sided":
          return (
            <svg width="22" height="20" viewBox="0 0 22 20">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z" />
            </svg>
          )
        case "6-sided":
          return (
            <svg width="20" height="22" viewBox="0 0 20 22">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M10 1l8.66 5v10L10 21l-8.66-5V6z" />
            </svg>
          )
        case "7-sided":
          return (
            <svg width="22" height="21" viewBox="0 0 22 21">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l7.818 3.765 1.931 8.46-5.41 6.785H6.66l-5.41-6.785 1.93-8.46z" />
            </svg>
          )
        case "8-sided":
          return (
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M11 1l7.071 2.929L21 11l-2.929 7.071L11 21l-7.071-2.929L1 11l2.929-7.071z" />
            </svg>
          )
        case "circle":
          return (
            <svg xwidth="22" height="22" viewBox="0 0 22 22">
              <circle cx="16" cy="51" r="10" fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" transform="translate(-5 -40)" />
            </svg>
          )
        case "diamond":
          return (
            <svg width="34" height="16" viewBox="0 0 34 16">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M17.219.54a.5.5 0 0 0-.384-.003L.811 7.073a.5.5 0 0 0-.011.92l16.023 7.005a.5.5 0 0 0 .407-.003l15.428-7.004a.5.5 0 0 0-.011-.916L17.219.54z" />
            </svg>
          )
        case "oblong":
          return (
            <svg width="28" height="14" viewBox="0 0 28 14">
              <rect width="27" height="13" x="2.5" y="87.5" fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" rx="6.5" transform="translate(-2 -87)" />
            </svg>
          )
        case "oval":
          return (
            <svg width="31" height="17" viewBox="0 0 31 17">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M15.298 16.147c5.523 0 14.625-1.624 14.625-7.147S20.82 1.284 15.298 1.284.673 3.477.673 9s9.102 7.147 14.625 7.147z" />
            </svg>
          )
        case "rectangle":
          return (
            <svg width="31" height="17" viewBox="0 0 31 17">
              <rect width="30" height="16" x=".5" y="215.5" fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" rx="3" transform="translate(0 -215)" />
            </svg>
          )
        case "square":
          return (
            <svg width="22" height="19" viewBox="0 0 22 19">
              <rect width="21" height="18" x="5.5" y="171.5" fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" rx="3" transform="translate(-5 -171)" />
            </svg>
          )
        case "triangle":
          return (
            <svg width="23" height="17" viewBox="0 0 23 17">
              <path fill={meds.color} fill-rule="evenodd" stroke="#9B9B9B" d="M11.5 0L22 16H1z" />
            </svg>
          )
      }
    })
    return shapes;
  }

  checkUserMeds(user) {
    const medications = user.meds.map(med => {
      return {
        name: med.name,
        color: med.color,
        shape: med.shape,
        days: med.days
      }
    });
    let shapes = this.PopulateShapes(medications);
    return shapes;
  }

  render() {
    const { user } = this.props.auth;

    const medList = user.meds.map(med => <td>{med.name}</td>);


    return (
      // -------- Start HTML here -------- //

      <div className="wrapper">
        {/* Profile start */}
        <img className="background" src={background} alt="wallpaper" />
        <img className="profilePic" src={placeholder} alt="profile" />
        <h1 className="userName"> Welcome Harold </h1>
        <p className="profileEdit">
          <Link to="/Profile"> View Profile </Link>
        </p>
        <p className="back2">
          <Link to="/homepage"> Back to Home </Link>
        </p>
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
            <option value="monday" >Monday</option>
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
                    <p>
                      {user.appointments[0] && user.appointments[0].doctor}{" "}
                    </p>
                    <p>Appt Time: 2:30 PM</p>
                    <p>
                      Reminders: You wont be able to drive home due to anethesia{" "}
                    </p>
                  </td>
                </tr>
                <tr className={this.state.day === "tuesday" ? "" : "hidden"}>
                  <td className="day">Tuesday</td>
                  <td className="center">
                    <p>This is where the appointment is</p>
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
                    <div className="pillBox">
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
                    </div>
                  </td>
                  <td className="center">
                    <p>Midday</p>
                    <div className="pillBox">
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
                    </div>
                  </td>
                  <td className="center">
                    <p>Evening</p>
                    <div className="pillBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                      >
                        <path
                          fill="yellow"
                          fill-rule="evenodd"
                          stroke="#9B9B9B"
                          d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                      >
                        <path
                          fill="purple"
                          fill-rule="evenodd"
                          stroke="#9B9B9B"
                          d="M10 1l8.66 5v10L10 21l-8.66-5V6z"
                        />
                      </svg>
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
  getUserData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserData }
)(Overview);
