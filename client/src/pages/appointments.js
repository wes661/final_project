import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUserData } from "../actions/authactions";
import CalendarLayout from "../components/CalendarLayout/CalendarLayout";
import AppModal from "../components/CalendarLayout/Modal";
import "../css/appointments.css";


class Appointments extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
      open: false
    };
  }
  onOpenModal = date => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onDateChange = date => {
    // const currentAppointment = this.props.user.appointments.filter(appointment => appointment.date === date); console.log(currentAppointment);
    this.setState({ date });
  };

  componentDidMount() {
    this.props.getUserData();
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;

    const appointmentList = user.appointments.map(appointment => (
      <ul>
        <li>Date: {appointment.date}</li>
        <li>Where: {appointment.where}</li>
        <li>With: {appointment.doctor}</li>
        <li>At: {appointment.time}</li>
        <li>Copay: {appointment.copay}</li>
        <li>Notes: {appointment.comments}</li>
        <hr/>
      </ul>
    ));
    return (
      // -------- Start HTML here -------- //
      <div className="calendar">
        <CalendarLayout
          date={this.state.date}
          onOpenModal={this.onOpenModal}
          onDateChange={this.onDateChange}
        />
        <AppModal
          open={this.state.open}
          date={this.state.date}
          onCloseModal={this.onCloseModal}
        />

        <div className=" col-12 card-header">
          <center>Upcoming Appointments</center>
        </div>
        <div className="container-fluid">
          <div className="card border-secondary">
            <div className="card-body text-secondary">
              {appointmentList}
              {/* <p className="card-text scroll-box">
               
              </p> */}
            </div>
          </div>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Appointments.propTypes = {
  getUserData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserData }
)(Appointments);
