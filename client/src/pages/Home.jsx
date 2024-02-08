import React from 'react'
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-6xl font-bold text-center mt-24">
            Adventure Starts Here.
          </h1>
        </div>
        <div>
          <h3 className='text-2xl font-bold text-center mt-10'>
            Book your family vacation in the Eastern Sierras.
          </h3>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
