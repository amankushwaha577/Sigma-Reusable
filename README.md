# Sigma-
/* Base styling for the datepicker */
.react-datepicker {
  font-family: Arial, sans-serif;
  font-size: 14px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1050; /* Ensures it's on top of other elements */
}

/* Header styling */
.react-datepicker__header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
}

/* Selected day styling */
.react-datepicker__day--selected {
  background-color: #007bff;
  color: white;
  border-radius: 50%;
}

/* Hover effect on days */
.react-datepicker__day:hover {
  background-color: #e9ecef;
  border-radius: 50%;
}

/* Today's date styling */
.react-datepicker__day--today {
  font-weight: bold;
  color: #007bff;
}

/* Navigation buttons */
.react-datepicker__navigation {
  top: 10px;
  line-height: 1.5;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
}

.react-datepicker__navigation--previous {
  border-right: 6px solid #6c757d;
  margin-left: 10px;
}

.react-datepicker__navigation--next {
  border-left: 6px solid #6c757d;
  margin-right: 10px;
}

/* Time picker styling */
.react-datepicker__time-container {
  border-left: 1px solid #ddd;
}

.react-datepicker__time-box {
  background: white;
  border: none;
}

.react-datepicker__time-list-item {
  padding: 6px 10px;
  cursor: pointer;
}

.react-datepicker__time-list-item:hover {
  background-color: #e9ecef;
}

.react-datepicker__time-list-item--selected {
  background-color: #007bff;
  color: white;
}

/* Input field adjustments */
.react-datepicker__input-container input {
  width: 100%;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Adjust for smaller screens */
@media (max-width: 576px) {
  .react-datepicker {
    width: 100%;
  }

  .react-datepicker__header {
    padding: 10px;
  }
}
