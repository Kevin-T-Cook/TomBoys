import React, { useState } from "react";

export default function GuestSelector() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const increment = (setter, currentValue) => setter(currentValue + 1);
  const decrement = (setter, currentValue) => {
    if (currentValue > 0) {
      setter(currentValue - 1);
    }
  };

  const summaryText = `${adults} Adult${adults !== 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${pets} Pet${pets !== 1 ? 's' : ''}`;

  return (
    <div className="w-full">
      <button onClick={() => setShowDropdown(!showDropdown)} className="w-full border border-gray-300 shadow-sm px-4 py-2 rounded-md text-left flex justify-between items-center">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
          Add guests
        </span> 
        <span>{summaryText}</span>
      </button>
      {showDropdown && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex items-center justify-between p-2">
            <span>Adults</span>
            <div className="flex items-center">
              <button onClick={() => decrement(setAdults, adults)} className="rounded-full border h-6 w-6 flex items-center justify-center">-</button>
              <input type="text" readOnly value={adults} className="mx-2 text-center w-8"/>
              <button onClick={() => increment(setAdults, adults)} className="rounded-full border h-6 w-6 flex items-center justify-center">+</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2">
            <span>Children</span>
            <div className="flex items-center">
              <button onClick={() => decrement(setChildren, children)} className="rounded-full border h-6 w-6 flex items-center justify-center">-</button>
              <input type="text" readOnly value={children} className="mx-2 text-center w-8"/>
              <button onClick={() => increment(setChildren, children)} className="rounded-full border h-6 w-6 flex items-center justify-center">+</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2">
            <span>Pets</span>
            <div className="flex items-center">
              <button onClick={() => decrement(setPets, pets)} className="rounded-full border h-6 w-6 flex items-center justify-center">-</button>
              <input type="text" readOnly value={pets} className="mx-2 text-center w-8"/>
              <button onClick={() => increment(setPets, pets)} className="rounded-full border h-6 w-6 flex items-center justify-center">+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
