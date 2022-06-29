import React from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

export default function NavBar({name, filter}) {
  return (
    <div className='nav-bar'>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/counter">Counter</Link>
        </div>
        <div>
            <Link to="/about">About</Link>
        </div>
        <div>
            <Link to="/contact">Contact</Link>
        </div>
        <Filter name={name} filter={filter}/>
    </div>
  )
}
