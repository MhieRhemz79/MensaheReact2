import React from 'react'
// import Image1 from '../media/mensahe-logo.svg'
import '../css/navigation-bar.css'
const navbar = () => {
  return (
    <div>
        <header className="header">
            <nav className="nav">
                
                <div className="logo-container">
                    {/* <img src={Image1}  alt="mensage logo" className="mensahe-logo" /> */}
                    <img src="https://res.cloudinary.com/mensahe/image/upload/v1672103510/mensahe-logo.svg"  alt="mensage logo" loading="lazy" className="mensahe-logo" />

                </div>

                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#how-it-works-section" 
                            title="learn how mensahe works"
                            class="nav-item-text">
                            how it works
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#guide-section" 
                            title="view our guide"
                            class="nav-item-text">
                            guide
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about-section" 
                            title="learn more about our company"
                            class="nav-item-text">
                            about
                        </a>
                    </li>
                   
                    <li className="nav-item">
                        <a href="#sign-section" 
                            title="learn more about our company"
                            class="nav-item-text">
                            signin
                        </a>
                    </li>
                </ul>

                <button type="button"
                        className="cta-button"
                        onclick="window.open('https://cutt.ly/mensahe-form')">
                        start free
                </button>
            </nav>
        </header>
    </div>
  )
}

export default navbar