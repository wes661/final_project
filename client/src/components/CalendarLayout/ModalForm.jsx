import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { addAppointment } from "../../actions/authactions";
import "../../css/modal.css";



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
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
      date: this.state.date,
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
    return (
      <form onSubmit={this.onSubmit}>
        <br />
        <br />
        <label>
          <p>Date of appointment:</p>
        </label>
        <div className="form-group">
          <input
            name="date"
            className="form-control form-control-lg"
            value={this.props.date}
            onChange={this.onChange}
          />
        </div>

        <br />
        <br />
        <label>
          <p>Where is your appointment:</p>
        </label>
        <div className="form-group">
          <input
            type="text"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.where
            })}
            name="where"
            placeholder="e.g. Tucson, AZ"
            value={this.state.where}
            onChange={this.onChange}
          />
          {errors.where && (
            <div className="invalid-feedback">{errors.where}</div>
          )}
        </div>

        <br />
        <br />
        <label>
          <p> What is your physicians name:</p>
        </label>
        <div className="form-group">
          <input
            type="text"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.doctor
            })}
            name="doctor"
            placeholder="e.g. Dr. Snyder"
            value={this.state.doctor}
            onChange={this.onChange}
          />
          {errors.doctor && (
            <div className="invalid-feedback">{errors.doctor}</div>
          )}
        </div>
        </label>
        <div className="form-group">
          <input
            type="text"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.doctor
            })}
            name="doctor"
            placeholder="e.g. Dr. Snyder"
            value={this.state.doctor}
            onChange={this.onChange}
          />
          {errors.doctor && (
            <div className="invalid-feedback">{errors.doctor}</div>
          )}
        </div>
        <br />
        <br />

        <label>
          <p> Do you know the time:</p>
        </label>
        <div className="form-group">
          <input
            type="time"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.time
            })}
            name="time"
            value={this.state.time}
            onChange={this.onChange}
          />
          {errors.time && (
            <div className="invalid-feedback">{errors.time}</div>
          )}
        </div>

        <br />
        <br />
        <label>
          <p> Co-pay amount:</p>
        </label>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">$</span>
            <input
              type="text"
              className={classnames("form-group input-group mb-3 form-control form-control-lg", {
                "is-invalid": errors.copay
              })}
              placeholder="e.g. $100.00 (add amount here)"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="copay"
              placeholder="e.g. 100.00"
              value={this.state.copay}
              onChange={this.onChange}
            />
          </div>
          {errors.copay && (
            <div className="invalid-feedback">{errors.copay}</div>
          )}
        </div>
        <br />
        <label>
          <p> Additional information:</p>
          <div className="form-group">
            <textarea
              className=" text-area-style form-control form-control-lg"
              name="comments"
              value={this.state.comments}
              onChange={this.onChange}
            />
          </div>
        </label>
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