import React from 'react'
import Calendar from './Calendar';

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
        <select name="guests" id="guests">
          <option value="adults">Adults</option>
          <option value="children">Children</option>
          <option value="pets">Pets</option>
        </select>
      </div>
    </div>
  );
}
