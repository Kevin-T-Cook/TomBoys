import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Calendar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => setIsOpen(!isOpen); 

  const CustomInput = ({ value, onClick }) => (
    <div onClick={onClick} className="cursor-pointer">
      <div className="flex border border-gray-300 shadow-sm px-4 py-4 bg-white rounded-md items-center mr-2 ml-2">
        <svg className="bi bi-calendar3 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
        </svg>
        <span>{value || 'Add Dates'}</span>
      </div>
    </div>
  );
  return (
    <div className="relative inline-block text-left w-full">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        withPortal 
        open={isOpen}
        onCalendarClose={() => setIsOpen(false)}
        onCalendarOpen={() => setIsOpen(true)} 
        customInput={<CustomInput value={startDate ? startDate.toLocaleDateString() + ' - ' + (endDate ? endDate.toLocaleDateString() : '') : 'Add Dates'} onClick={toggleCalendar} />}
        shouldCloseOnSelect={false}
      />
    </div>
  )
};