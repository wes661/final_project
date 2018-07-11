import React from "react";
import "../css/medication.css";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { addMed } from "../actions/authactions";
import { getShape } from "../components/Shapes";
import ScriptButton from "../components/ScriptButton"

class Medications extends React.Component {


  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  checkUserMeds(user) {
    const medications = user.meds.map(med => {
      return {
        name: med.name,
        days: med.days,
        quantity: med.quantity,
        frequency: med.frequency,
        shape: med.shape,
        color: med.color
      }
    });

    console.log(medications);
    const panel = this.createPanels(medications);
    return panel;
  }

  createPanels(medications) {
    let medPanel = medications.map(med => {
      return (
        <tr className="listOscripts">
          <td className="scriptNom">
            {med.name}
            <button
              type="button"
              className="close"
              data-dismiss="listOscripts">&times;
            </button>
          </td>
          <td className="center-text">{getShape(med)}</td>
          <td className="center-text">{`${med.frequency} times a day`}</td>
        </tr>
      )
    });
    return medPanel
  }


  MedBox(medications) {
    medications.map(med => {
    });
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <ScriptButton />
        <table>
          <tbody>
            {this.checkUserMeds(user)}
          </tbody>
        </table>
      </div>
    )
  }
}

Medications.propTypes = {
  addMed: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMed }
)(Medications);