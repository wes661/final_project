import React from "react";
import { Link } from "react-router-dom";
import "../css/overview.css";
import placeholder from '../pictures/placeholder.jpeg';

class Overview extends React.Component {
    state={
        day:""
    }
    handleDaySelect = ()=>{
        let date = document.getElementById('select').value;
        this.setState({
            day: date
        })
    }

    componentDidMount() {
    // ------    put on page load js here ------ //
    }
    render() {
        return (
    // -------- Start HTML here -------- //
    
<div className="wrapper">
    <div className="container-fluid ovrViewHeader">
        <div className="page-header">
            <h1>
            Overview
            </h1>
        </div>
    </div>
    {/* Profile start */}
    <div className="container-fluid">
        <img className="profilePic" src={placeholder} alt="profile" />
        <div className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Welcome Harold!</h1>  
            <h1 className="text-center">Allergies: Peanuts, Chocolate, Fun</h1>
            <h1 className="text-center">Medical Alerts: Diabetic</h1> 
            <h1 className="text-center">View Profile</h1>   
        </div>
    </div>
    {/* Profile End */}
    {/* Appointment Div Start */}
    <div className="container-fluid">   
        <select name="subjects" id="select" className="form-control" onChange={this.handleDaySelect}>
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
            <hr/>
        </h1>
        <div className="table-users">
   <div className="header">Appointments</div>
   <br/>

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
      <tr className={(this.state.day === 'monday') ? "" : "hidden"}>
         <td>Monday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
      <tr className={(this.state.day === 'tuesday') ? "" : "hidden"}>
         <td>Tuesday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
      <tr className={(this.state.day === 'wednesday') ? "" : "hidden"}>
         <td>Wednesday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
      <tr className={(this.state.day === 'thursday') ? "" : "hidden"}>
         <td>Thursday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
        <tr className={(this.state.day === 'friday') ? "" : "hidden"}>
         <td>Friday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
    <tr className={(this.state.day === 'saturday') ? "" : "hidden"}>
         <td>Saturday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
        <tr className={(this.state.day === 'sunday') ? "" : "hidden"}>
         <td>Sunday</td>
          <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it</td>
      </tr>
      </tbody>
   </table>
</div>
    </div>
    {/* Appointment Div End */}
    {/* Medication Div Start */}
   <div className="container-fluid">
    <div className="medication">
        <hr/>
        <div className="header">Medications</div>
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
      <tr className={(this.state.day === 'monday') ? "" : "hidden"}>
         <td>Monday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
      <tr className={(this.state.day === 'tuesday') ? "" : "hidden"}>
         <td>Tuesday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
      <tr className={(this.state.day === 'wednesday') ? "" : "hidden"}>
         <td>Wednesday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
      <tr className={(this.state.day === 'thursday') ? "" : "hidden"}>
         <td>Thursday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
        <tr className={(this.state.day === 'friday') ? "" : "hidden"}>
         <td>Friday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
    <tr className={(this.state.day === 'saturday') ? "" : "hidden"}>
         <td>Saturday</td>
         <td>This is where the appointment is </td>
         <td>This is the time </td>
         <td>This is additional Comments about it </td>
      </tr>
        <tr className={(this.state.day === 'sunday') ? "" : "hidden"}>
         <td>Sunday</td>
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
    )}
};

export default Overview;