import React from 'react'
import './css/introduction-section.css'
import { Link } from 'react-router-dom'

const introduction = () => {
  return (
    <div>

      {/* <!-- introduction section start --> */}
        <section className="introduction-section">
            {/* <!-- svg illustration --> */}
            <img src="https://res.cloudinary.com/mensahe/image/upload/v1672130803/letter-illustration.svg" alt="mensahe-illustration" loading="lazy" class="mensahe-illustration" />

            {/* <!-- introduction about mensahe --> */}
            <div className="introduction-text-container">
                <h1 className="headline">write from the heart, send with a touch of technology</h1>
                <p className="subheadline">send your message in creative and personalized ways with mensahe</p>
                <button type="button" 
                        className="cta-button"
                        onclick="window.open('https://cutt.ly/mensahe-form')">
                        <Link to="/sign_in" className="nav-item-text">Sign In</Link>
                </button>
            </div>
        </section>
        {/* <!-- introduction section end --> */}

    </div>
  )
}

export default introduction