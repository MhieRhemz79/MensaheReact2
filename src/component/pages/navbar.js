import React from 'react'
import './css/navigation-bar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <header className="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
            <nav className="nav">
                
                <div className="logo-container">
                    <img src="https://res.cloudinary.com/mensahe/image/upload/v1672103510/mensahe-logo.svg"  alt="mensage logo" loading="lazy" className="mensahe-logo" />
                </div>

                <ul className="nav-list">

                    <li className="nav-item">                        
                         <Link 
                            to="/"
                            title="Home Page" 
                            className="nav-item-text">
                                Home
                        </Link>
                    </li>

                    <li className="nav-item">                                       
                         <Link 
                            to="/howitworks"
                            title="learn how mensahe works" 
                            className="nav-item-text">
                                How it Works
                        </Link>
                    </li>

                    <li className="nav-item">                       
                        <Link 
                            to="/guide"
                            title="view our guide"
                            className="nav-item-text">
                                Guide
                        </Link>
                    </li>

                    <li className="nav-item">                       
                         <Link 
                            to="/about"
                            title="learn more about our company"
                            className="nav-item-text">
                                About
                        </Link>
                    </li>
                   
                    {/* <li className="nav-item">
                        <Link to="/sign_in" className="nav-item-text">Sign In</Link>
                    </li> */}
                </ul>

                <button type="button"
                        className="cta-button"
                        onclick="window.open('https://cutt.ly/mensahe-form')">
                        <Link to="/signup" className="nav-item-text">Sign Up</Link>
                </button>


            </nav>
        </header>
    </div>
  )
}

export default Navbar
