import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const today = new Date().getDate();
  const thisMonth = new Date().getMonth();

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  }

  const days = [];

  for (let day = 1; day <= daysInMonth; day++) {
    if (currentDate.getMonth() === thisMonth) {

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
    } else if (currentDate.getMonth() < thisMonth) {
      days.push(
        <div key={day} className="day past">
          {day}
        </div>
      );
    } else if (currentDate.getMonth() > thisMonth) {
      days.push(
        <div key={day} className="day future">
          {day}
        </div>
      )
    }
  }

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <div className="calendar">
        <div className="navigation">
          <button onClick={prevMonth}>&lt;</button>
          <h2>
            {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <p>
          {currentDate.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        <div className="days-grid">{days}</div>
      </div>
    </div>
  );
};

export default Calendar;
