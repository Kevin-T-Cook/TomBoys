import React, { useState } from 'react';

export default function Accommodations() {
    const [accommodation, setAccommodation] = useState('');
  
    const handleSelect = (event, category) => {
      event.preventDefault();
      setAccommodation(category);
    };
  
    return (
      <div className="relative inline-block text-left w-full">
        <div>
          <input
            type="text"
            placeholder="Accommodations"
            value={accommodation}
            readOnly
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          />
        </div>
    
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => handleSelect(e, 'Cabins')}>
              Cabins
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => handleSelect(e, 'Campsites')}>
              Campsites
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => handleSelect(e, 'Motel')}>
              Motel
            </button>
          </div>
        </div>
      </div>
    );
  }
  