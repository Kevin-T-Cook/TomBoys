import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className='flex flex-col items-center pt-44'>
      <div className='relative w-screen overflow-hidden'>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white z-10 px md:px-8'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4 text-center'>AN AMERICAN CLASSIC</h1>
            <p className='text-xl md:text-3xl text-center mb-8'>Made with 100% Beef</p>
            <Link to={"/order"}>
              <button className='bg-red-600 text-white text-2xl font-bold py-2 px-4 rounded-full hover:bg-red-800 hover:text-white'>
                ORDER NOW
              </button>
            </Link>
        </div>
        <img src="src/assets/burger.avif" alt="burger and fries on wooden platter" className="w-full h-auto max-h-[75vh] object-cover" />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-4 mt-8 px-8 mb-8 w-full'> 
        <div className='menu group w-full md:w-1/3 relative mb-4 md:mb-0'>
          <Link to="/menu#breakfast" className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-white text-3xl font-bold transition-opacity duration-500 hover:opacity-100">BREAKFAST</span>
          </Link>
          <img src="src/assets/egg breakfast.webp" alt="breakfast platter" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 rounded-lg" />
        </div>
        <div className='menu group w-full md:w-1/3 relative mb-4 md:mb-0'>
          <Link to="/menu#lunch" className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-white text-3xl font-bold transition-opacity duration-500 hover:opacity-100">LUNCH</span>
          </Link>
          <img src="src/assets/dinnerTB.jpeg" alt="chicken wrap" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 rounded-lg" />
        </div>
        <div className='menu group w-full md:w-1/3 relative mb-4 md:mb-0'>
          <Link to="/menu#dinner" className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-white text-3xl font-bold transition-opacity duration-500 hover:opacity-100">DINNER</span>
          </Link>
          <img src="src/assets/lunchTB.jpeg" alt="chili burger and fries" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
