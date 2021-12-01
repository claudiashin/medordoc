import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarAPI = ({ dateInfo, setDateInfo, onChange }) => {
  return (
    <div>
      <Calendar
        value={dateInfo.selectedDate}
        oncChange={(e) => {
          setDateInfo(onChange);
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default CalendarAPI;
