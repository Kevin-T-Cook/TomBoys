import React from 'react'
import Calendar from './Calendar';
import GuestSelector from './GuestSelector';
import Accommodations from './Accommodations';

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center p-6 bg-white shadow rounded-lg">
      <Accommodations />
      <Calendar />
      <GuestSelector />
      <button className="bg-blue-800 text-white text-lg font-bold px-8 py-4 rounded hover:bg-blue-600">
        SEARCH
      </button>
    </div>
  );
}