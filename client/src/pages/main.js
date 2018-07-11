import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../actions/authactions";
import { Link } from "react-router-dom";
import "../css/login.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }
  }
  render() {
    const { errors } = this.state;

    return (
      // -------- Start HTML here -------- //
      <div className="wrapper">
        <div className="col-6">
          <div className="logbox">
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Account login</h1>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  required="required"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <input type="submit" className="inputButton"/>
              <div className="text-center">
                <Link to="/signup" className="btn btn-sm btn-info mr-2 sign-upBtn">
                  Sign Up
                </Link>
                <Link to="/about"><p className="btn btn-sm btn-info missionBtn"> About</p> </Link>
              </div>
            </form>
          </div>
        </div>
       
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Main.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Main);
