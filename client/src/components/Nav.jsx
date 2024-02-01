import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav>
            <div>
                <Link>
                Accomodations
                </Link>
            </div>
            <div>
                <Link>
                Boat Rental
                </Link>
            </div>
            <div>
                <Link>
                Storage
                </Link>
            </div>
            <div>
                <Link>
                About
                </Link>
            </div>
            <div>
                <Link>
                News
                </Link>
            </div>
            <div>
                <Link>
                Contact
                </Link>
            </div>
      </nav>
    </div>
  )
}
