import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <img src="src/assets/TomBoys-removebg-preview.png" alt="Tomboys logo, red text blue background" />
      <Link
        to={"/menu"}
      >
        MENU
      </Link>
      <Link
        to={"/locations"}
      >
        LOCATIONS
      </Link>
      <Link
        to={"/about"}
      >
        ABOUT
      </Link>
      <Link
        to={"/contact"}
      >
        CONTACT US
      </Link>
      <Link
        to={"/menu"}
      >
      <button>ORDER NOW</button>
      </Link>
    </div>
  );
}
