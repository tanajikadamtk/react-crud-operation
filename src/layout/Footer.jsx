import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='footer'>
    <div className="container">
      <div className="row">
      <div className="col-md-4">
        <ul className='list-type-none'>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="">Blog</Link></li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className='list-type-none'>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="">Blog</Link></li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className='list-type-none'>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="">Blog</Link></li>
        </ul>
      </div>
      </div>
      </div>
      </footer>
  )
}

export default Footer