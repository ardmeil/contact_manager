import React from 'react'
import {Link} from 'react-router-dom'
function Header(props) {
  const  name=props.name
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="https://ardmeil.github.io/contact_manager/" className="navbar-brand">
                        {name}
                    </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                               <i className="fas fa-home"></i>  Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                                <i className="fas fa-plus"></i> Add Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                               <i className="fas fa-question"></i> About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
