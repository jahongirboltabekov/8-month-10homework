import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="container">
                <h1><Link to={"/home"}>Home</Link></h1>
                <h1><Link to={"/login"}>Login</Link></h1>
                <h1><Link to={"/admin"}>Admin</Link></h1>        
            </div>
        </nav>
    </div>
  )
}

export default Navbar