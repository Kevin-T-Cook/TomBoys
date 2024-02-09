import React from 'react'
import Calendar from './Calendar';
import GuestSelector from './GuestSelector';
import Accommodations from './Accommodations';

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-12">
     <div className="w-1/2 flex justify-around items-center p-4 bg-white shadow rounded-lg">
        <Accommodations />
        <Calendar />
        <GuestSelector />
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">SEARCH</button>
      </div>
    </div>
  );
}
