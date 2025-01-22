# Sigma-Reusable

/* General Datepicker Style */
.react-datepicker {
  font-family: 'Arial', sans-serif;
  border: 2px solid #c779d0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
}

/* Highlight the selected date */
.react-datepicker__day--selected {
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
  color: white;
  border-radius: 50%;
}

/* Highlight dates on hover */
.react-datepicker__day:hover {
  background-color: #4bc0c8;
  color: white;
  border-radius: 50%;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out, background-color 0.2s;
}

/* Custom Styling for Even Days */
.even-day {
  background-color: #c1ddff;
  color: black;
  border-radius: 50%;
}

/* Custom Styling for Odd Days */
.odd-day {
  background-color: #ffc1c1;
  color: black;
  border-radius: 50%;
}

/* Style the calendar header */
.react-datepicker__current-month {
  font-weight: bold;
  color: #4bc0c8;
  font-size: 16px;
}

/* Style the day names in the calendar */
.react-datepicker__day-names {
  color: #feac5e;
  font-weight: bold;
}

/* Custom styling for the calendar navigation buttons */
.react-datepicker__navigation--previous,
.react-datepicker__navigation--next {
  border-color: #c779d0;
}

.react-datepicker__navigation--previous:hover,
.react-datepicker__navigation--next:hover {
  border-color: #feac5e;
}

/* Add a custom gradient background to the calendar container */
.react-datepicker__month-container {
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
  border-radius: 10px;
  padding: 10px;
}

/* Week rows styling */
.react-datepicker__week {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

/* Highlight the today date */
.react-datepicker__day--today {
  border: 2px solid #feac5e;
  border-radius: 50%;
  color: black;
  font-weight: bold;
}

/* Overall container styling */
.react-datepicker__input-container input {
  width: 100%;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #c779d0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
}

.react-datepicker__input-container input:focus {
  border: 2px solid #4bc0c8;
  box-shadow: 0 0 8px rgba(75, 192, 200, 0.5);
  transition: border-color 0.2s, box-shadow 0.2s;
}
