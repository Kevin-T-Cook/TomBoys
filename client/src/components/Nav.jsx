import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center p-4">
      <Link to="/">
        <img
          src="src/assets/TomBoys-removebg-preview.png"
          alt="Tomboys Logo"
          className="h-24 md:h-36" 
        />
      </Link>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
      <div className={`flex flex-col md:flex-row gap-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <Link to="/menu" className="text-gray-800 hover:text-gray-700">MENU</Link>
        <Link to="/locations" className="text-gray-800 hover:text-gray-700">LOCATIONS</Link>
        <Link to="/about" className="text-gray-800 hover:text-gray-700">ABOUT</Link>
        <Link to="/contactUs" className="text-gray-800 hover:text-gray-700">CONTACT US</Link>
        <div className="orderButton">
          <Link to="/order">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
