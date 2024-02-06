import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Calendar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = () => setIsOpen(!isOpen); 

  // Custom input component (you can use an actual input or any element you prefer)
  const CustomInput = ({ value, onClick }) => (
    <button className="custom-input" onClick={onClick}>
      {value || 'Add Dates'}
    </button>
  );

  return (
    <div>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        withPortal
        open={isOpen}
        onCalendarClose={() => setIsOpen(false)}
        onCalendarOpen={() => setIsOpen(true)}
        customInput={<CustomInput />}
        shouldCloseOnSelect={false} 
      />
    </div>
  );
}
