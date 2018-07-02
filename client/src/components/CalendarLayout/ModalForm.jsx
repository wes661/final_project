import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import classnames from "classnames";
import { connect } from "react-redux";
import { addAppointment } from "../../actions/authactions";

class AppointmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      where: "",
      doctor: "",
      time: "",
      copay: "",
      comments: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    // console.log(value);
  };

  onSubmit = e => {
    e.preventDefault();
    const newAppointment = {
      // date: this.state.date,
      date: "2018-06-06 00:00:00.000",
      where: this.state.where,
      doctor: this.state.doctor,
      time: this.state.time,
      copay: this.state.copay,
      comments: this.state.comments
    };
    this.props.addAppointment(newAppointment, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Date of appointment:
          <input
            type="text"
            name="date"
            value={this.props.date}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          Where is your appointment:
          <input
            type="text"
            name="where"
            value={this.state.where}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          What is your physicians name:
          <input
            type="text"
            name="doctor"
            value={this.state.doctor}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          Do you know the time:
          <input
            type="text"
            name="time"
            value={this.state.time}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          Is there a copay:
          <input
            type="text"
            name="copay"
            value={this.state.copay}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          Additional information:
          <textarea
            name="comments"
            value={this.state.comments}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" className="inputButton" />
      </form>
    );
  }
}

AppointmentForm.propTypes = {
  addAppointment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addAppointment }
)(withRouter(AppointmentForm));
