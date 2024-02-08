import React from 'react'
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-6xl font-bold text-center mt-24">
            Let Your Adventure Begin Here.
          </h1>
        </div>
        <div>
          <h3 className='text-2xl font-bold text-center mt-10'>
            Book your family vacation in our scenic Eastern Sierra resort.
          </h3>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
