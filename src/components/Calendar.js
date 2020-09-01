import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//임시
const Calendar = ({day, onChoose}) => {

    return (
    <div>
        <Calendar type="date" value={day} onClick={() => onChoose(day)} onChange={e => this.handleDay('day', e.target.value)}/>
    </div>
    );
};

// YYYY-MM-DD

export default Calendar;