import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import classnames from "classnames";
import { connect } from "react-redux";
import { addAppointment } from "../../actions/authactions";

class Form extends React.Component {
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
      date: "Sat Jul 07 2018 00:00:00 GMT-0700",
      where: this.state.where,
      doctor: this.state.doctor,
      time: this.state.time,
      copay: this.state.copay,
      comments: this.state.comments
    };
    this.props.addAppointment(newAppointment, this.props.history);
    this.props.onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <p className="label-time">Appointment Date:</p>
          <input
            className="input-size"
            type="text"
            name="date"
            // value={this.props.date}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          <p className="label-time">Appointment Location:</p>
          <input
            className="input-size"
            type="text"
            name="where"
            value={this.state.where}
            // value={appointment.id ? appointment.where : ''}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          <p className="label-time"> Physician Name:</p>
          <input
            className="input-size"
            type="text"
            name="doctor"
            value={this.state.doctor}
            // value={appointment.id ? appointment.doctor : ''}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          <p className="label-time">Appointment Time:</p>
          <input
            className="input-size"
            type="text"
            name="time"
            value={this.state.time}
            // value={appointment.id ? appointment.time : ''}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          <p className="label-time">Do you have a copay?</p>
          <input
            className="input-size"
            type="text"
            name="copay"
            value={this.state.copay}
            // value={appointment.id ? appointment.copay : ''}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <label>
          <p className="text-area"> Additional Comments:</p>
          <textarea
            className="text-area-style"
            name="comments"
            value={this.state.comments}
            // value={appointment.id ? appointment.comments : ''}
            onChange={this.onChange}
          />
        </label>
        <br />
        <br />
        <br />
        <input className="text-area-button" type="submit" value="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
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
)(withRouter(Form));
