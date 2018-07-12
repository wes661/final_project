import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
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
      comments: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const { errors } = this.state;
    // const { appointment } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Date of appointment:
          <div className="form-group">
            <input
              type="text"
              name="date"
              className="form-control form-control-lg"
              // value={this.props.date}
              onChange={this.onChange}
            />
          </div>
        </label>
        <br />
        <br />
        <label>
          Where is your appointment:
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.where
              })}
              name="where"
              value={this.state.where}
              // value={appointment.id ? appointment.where : ''}
              onChange={this.onChange}
            />
            {errors.where && (
              <div className="invalid-feedback">{errors.where}</div>
            )}
          </div>
        </label>
        <br />
        <br />
        <label>
          What is your physicians name:
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.doctor
              })}
              name="doctor"
              value={this.state.doctor}
              onChange={this.onChange}
            />
            {errors.doctor && (
              <div className="invalid-feedback">{errors.doctor}</div>
            )}
          </div>
        </label>
        <br />
        <br />
        <label>
          Do you know the time:
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.time
              })}
              name="time"
              value={this.state.time}
              // value={appointment.id ? appointment.time : ''}
              onChange={this.onChange}
            />
            {errors.time && (
              <div className="invalid-feedback">{errors.time}</div>
            )}
          </div>
        </label>
        <br />
        <br />
        <label>
          Is there a copay:
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="copay"
              value={this.state.copay}
              // value={appointment.id ? appointment.copay : ''}
              onChange={this.onChange}
            />
          </div>
        </label>
        <br />
        <br />
        <label>
          Additional information:
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              name="comments"
              value={this.state.comments}
              // value={appointment.id ? appointment.comments : ''}
              onChange={this.onChange}
            />
          </div>
        </label>
        <br />
        <br />
        <input type="submit" className="inputButton" />
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
