import React, { useState } from 'react';

export default function Accommodations() {
    const [accommodation, setAccommodation] = useState('Accomodations');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSelect = (event, category) => {
      event.preventDefault();
      setAccommodation(category);
      setShowDropdown(false);
    };
  
    return (
        <div className="relative inline-block text-left w-full">
          <div className="flex border border-gray-300 shadow-sm px-4 py-2 bg-white rounded-md items-center">
            <svg className="bi bi-house-door-fill text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
            <input
              type="text"
              placeholder="Accommodations"
              value={accommodation}
              readOnly
              className="focus:outline-none w-full"
              onClick={() => setShowDropdown(!showDropdown)}
            />
        </div>
        {showDropdown && (
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
        )}
        
      </div>
    );
  }
  