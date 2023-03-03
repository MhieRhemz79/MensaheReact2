import React from 'react'
import './css/guide-section.css';

const guide = () => {
  return (
    <div>

        {/* <!-- guide section start --> */}
        <section id="guide-section">
            {/* <!-- guide title --> */}
            <div className="guide-container">
                <h2 className="guide-title">guide</h2>
            </div>

            {/* <!-- who and what guide --> */}
            <div className="who-and-what-guide-container">
                {/* <!-- who guide --> */}
                <div className="who-guide-container">
                    <h3 className="who-text-question">to whom should I direct my message?</h3>
                    <button type="button" className="who-generate-text-answer-button">suggest</button>
                    <p className="who-text-answer-output">answer</p>
                </div>

                {/* <!-- what guide --> */}
                <div className="what-guide-container">
                    <h3 className="what-text-question">what should i write about?</h3>
                    <button type="button" className="what-generate-text-answer-button">suggest</button>
                    <p className="what-text-answer-output">answer</p>
                </div>
            </div>

            {/* <!-- demos --> */}
            <div className="demos-container">
                <h2 className="demos-title">demos</h2>

                {/* <!-- demos buttons --> */}
                <div className="demos-buttons-list-container">
                    <ul className="demos-list">
                        <li className="demos-list-buttons">
                            <button 
                                type="button" 
                                className="demos-buttons shake" 
                                onclick="window.open('https://cutt.ly/letterforyou')">
                                letter
                            </button>
                        </li>
    
                        <li className="demos-list-buttons">
                            <button 
                                type="button"
                                className="demos-buttons shake-crazy" onclick="window.open('https://cutt.ly/cheesy-ito-lol')">
                                romantic
                            </button>
                        </li>
    
                        <li className="demos-list-buttons">
                            <button 
                                type="button"
                                className="demos-buttons shake-slow" onclick="window.open('https://cutt.ly/hey-there')">
                                short message
                            </button>
                        </li>
    
                        <li className="demos-list-buttons">
                            <button 
                                type="button"
                                className="demos-buttons shake-little" onclick="window.open('https://cutt.ly/omen-valorant')">
                                crush
                            </button>
                        </li>
    
                        <li className="demos-list-buttons">
                            <button 
                                type="button"
                                className="demos-buttons shake-opacity" onclick="window.open('https://cutt.ly/poem-about-time')">
                                poem
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- guide section end --> */}


    </div>
  )
}

export default guide