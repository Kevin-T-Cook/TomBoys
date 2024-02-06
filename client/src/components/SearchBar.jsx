import React from 'react'
import Calendar from './Calendar';
import GuestSelector from './GuestSelector';

export default function SearchBar() {
  return (
    <div>
      <div>
        <label htmlFor="accommodations">Accommodations</label>
        <select name="accommodations" id="accommodations">
          <option value="Cabins">Cabins</option>
          <option value="Campsites">Campsites</option>
          <option value="Motel">Motel</option>
        </select>
      </div>
      <div>
        <label htmlFor="calendar">Add Dates</label>
        <Calendar/>
      </div>
      <div>
        <label htmlFor="guests">Add Guests</label>
        <GuestSelector/>
      </div>
      <button>SEARCH</button>
    </div>
  );
}
