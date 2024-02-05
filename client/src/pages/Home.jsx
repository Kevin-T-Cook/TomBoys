import React from 'react'
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Annett's Mono Village</h1>
      </div>
      <div>
        <div>
          <h1>Let Your Adventure Begin Here.</h1>
        </div>
        <div>
          <h3>
            Book your family vacation in our scenic Eastern Sierra resort.
          </h3>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
