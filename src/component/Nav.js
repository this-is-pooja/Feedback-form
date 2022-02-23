import React from 'react'
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className='nav-div'>
      <Link to="/">
        <button className='btn'>Form</button>
      </Link>
      <Link to="/data">
        <button className='btn'>Table</button>
      </Link>
    </div>
  )
}

export default Layout