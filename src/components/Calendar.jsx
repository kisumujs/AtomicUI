import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const today = new Date().getDate();

  const days = [];

  for (let day = 1; day <= daysInMonth; day++) {
    if (today === day) {
      days.push(
        <div key={day} className="day today">
          {day}
        </div>
      );
      continue;
    } else if (day < today) {
      days.push(
        <div key={day} className="day past">
          {day}
        </div>
      );
      continue
    } else if (day > today) {
      days.push(
        <div key={day} className="day future">
          {day}
        </div>
      );
      continue
    }
  }

  return (
    <div className="calendar">
      <span></span>
      <h2>
        {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </h2>
      <p>
        {currentDate.toLocaleDateString("en-US", { weekday: "long" })}
      </p>
      <div className="days-grid">{days}</div>
    </div>
  );
};

export default Calendar;
