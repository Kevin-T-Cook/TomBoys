import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link
          to="/"
          >
          <h1 className="whitespace-nowrap text-xl sm:text-2xl lg:text-3xl font-bold mr-4 sm:mr-8">
            Annett's Mono Village
          </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/accommodations"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Accomodations
              </Link>
              <Link
                to="/boat-rental"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Boat Rental
              </Link>
              <Link
                to="/storage"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Storage
              </Link>
              <Link
                to="/about"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/news"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                News
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Contact
              </Link>
              <Link to="/login" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                Log in
              </Link>
              <Link to="/signup" className="font-semibold bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link
              to="/accommodations"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              Accomodations
            </Link>
            <Link
              to="/boat-rental"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              Boat Rental
            </Link>
            <Link
              to="/storage"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              Storage
            </Link>
            <Link
              to="/about"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/news"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              News
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
            >
              Contact
            </Link>
            <Link to="/login" className="font-semibold text-lg">
              Log in
            </Link>
            <Link to="/signup" className="font-semibold text-lg">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
