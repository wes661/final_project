import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
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

  onDateChange = date => this.setState({ date });

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
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
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

Appointments.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Appointments);
