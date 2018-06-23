import React from "react";
import { Link } from "react-router-dom";
import CalendarLayout from '../components/CalendarLayout/CalendarLayout';
import AppModal from '../components/CalendarLayout/Modal';
import "../css/appointments.css";

class Appointments extends React.Component {
    constructor(props) {
        super();
        this.state = {
            date: new Date(),
            open: false,
            events: [
                {
                    id: 1,
                    date: 2,
                    year: 2018,
                    month: 2,
                    title: "Holy"
                }
            ]
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onDateChange = date => this.setState({ date });


    componentDidMount() {
        // ------    put on page load js here ------ //
    }
    render() {
        return (
            // -------- Start HTML here -------- //
            <div>
                <h1>appointment page</h1>
                <p>
                    Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
              ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
              quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
              imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
              diam, sit amet facilisis lectus blandit at.
    </p>
                <CalendarLayout date={this.state.date} onOpenModal={this.onOpenModal} onDateChange={this.onDateChange} />
                <AppModal open={this.state.open} onCloseModal={this.onCloseModal} />

                <p>
                    <Link to="/homepage"> homepage </Link>
                </p>
            </div>
            // ------ End HTML here -------------- //
        )
    }
};

export default Appointments;