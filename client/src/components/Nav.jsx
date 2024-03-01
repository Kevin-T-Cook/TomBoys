import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
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
    </div>
  );
}
