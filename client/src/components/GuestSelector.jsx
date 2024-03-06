import React, { useState } from "react";

export default function GuestSelector() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const guestsAdded = adults || children || pets;

  const increment = (setter, currentValue) => setter(currentValue + 1);
  const decrement = (setter, currentValue) => {
    if (currentValue > 0) {
      setter(currentValue - 1);
    }
  };

  const summaryText = [
    adults ? `${adults} Adult${adults !== 1 ? 's' : ''}` : '',
    children ? `${children} Child${children !== 1 ? 'ren' : ''}` : '',
    pets ? `${pets} Pet${pets !== 1 ? 's' : ''}` : ''
  ].filter(Boolean).join(', ');

  return (
    <div className="relative w-full mr-4 ml-2">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`w-full border border-gray-300 shadow-sm px-4 py-4 rounded-md text-left flex justify-between items-center bg-white ${guestsAdded ? 'text-lg' : 'text-lg'}`}
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20" 
            height="20" 
            fill="currentColor"
            className={`mr-2 bi bi-people-fill ${guestsAdded ? 'text-gray-500 text-xs' : 'text-gray-500'}`}
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
          {!guestsAdded && <span>Add guests</span>}
        </div>
        {guestsAdded && <span>{summaryText}</span>}
      </button>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <div className="flex flex-col p-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">ADULTS</span>
              <div className="flex items-center">
                <button
                  onClick={() => decrement(setAdults, adults)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={adults}
                  className="mx-2 text-center w-12 border-t border-b border-gray-300"
                />
                <button
                  onClick={() => increment(setAdults, adults)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">CHILDREN</span>
              <div className="flex items-center">
                <button
                  onClick={() => decrement(setChildren, children)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={children}
                  className="mx-2 text-center w-12 border-t border-b border-gray-300"
                />
                <button
                  onClick={() => increment(setChildren, children)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">ANY PETS?</span>
              <div className="flex items-center">
                <button
                  onClick={() => decrement(setPets, pets)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={pets}
                  className="mx-2 text-center w-12 border-t border-b border-gray-300"
                />
                <button
                  onClick={() => increment(setPets, pets)}
                  className="rounded-full border h-8 w-8 flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
