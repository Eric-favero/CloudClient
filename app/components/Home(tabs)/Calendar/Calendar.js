import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as C from './styles';



const CalendarComponent = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <C.CalendarContainer>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </C.CalendarContainer>
  );
};

export default CalendarComponent;
