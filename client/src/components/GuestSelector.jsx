import React, { useState } from "react"

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
        <button onClick={() => setShowDropdown(!showDropdown)} className="w-full border border-gray-300 shadow-sm px-4 py-2 rounded-md text-left">
        Add guests {summaryText}
      </button>
      {showDropdown && (
    <div>
      <div>
        <label htmlFor="adults">Adults</label>
        <button onClick={() => decrement(setAdults, adults)}>-</button>
        <input type="text" readOnly value={adults} />
        <button onClick={() => increment(setAdults, adults)}>+</button>
      </div>
      <div>
        <label htmlFor="adults">Children</label>
        <button onClick={() => decrement(setChildren, children)}>-</button>
        <input type="text" readOnly value={children} />
        <button onClick={() => increment(setChildren, children)}>+</button>
      </div>
      <div>
        <label htmlFor="adults">Any Pets?</label>
        <button onClick={() => decrement(setPets, pets)}>-</button>
        <input type="text" readOnly value={pets} />
        <button onClick={() => increment(setPets, pets)}>+</button>
      </div>
    </div>
    )}
    </div>
  )
}
