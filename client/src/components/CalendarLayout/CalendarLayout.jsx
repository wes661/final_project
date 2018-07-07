import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


export default class CalendarLayout extends React.Component {

    render() {
        return (
            <Calendar
                onChange={this.props.onDateChange}
                value={this.props.date}
                onClickDay={this.props.onOpenModal}
            />
        );
    }
}



