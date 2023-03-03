import React from 'react'
import '../css/about-section.css';
const about = () => {
  return (
    <div>

        {/* <!-- about section start --> */}
        <section id="about-section">
            {/* <!-- about title --> */}
            <div className="about-container">
                <h2 className="about-title">about</h2>
            </div>

            {/* <!-- mission --> */}
            <div className="mission-container">
                <h3 className="mission-title">🌟 mission</h3>
                <p className="mission-paragraph-text">
                    at mensahe, we are dedicated to crafting innovative and expressive communication solutions that are enhanced by technology. our mission is to revolutionize the way people communicate and connect, fostering a welcoming environment for all. whether you are a business seeking to improve your internal or external communication strategies, or an individual looking to express yourself in a unique and creative way, mensahe is here to help.
                </p>
            </div>

            {/* <!-- culture --> */}
            <div cclassNamelass="culture-container">
                <h3 className="culture-title">🌎 culture</h3>
                <p className="culture-paragraph-text">
                    we pride ourselves on fostering a culture of inclusivity and understanding. our team members are non-judgmental, empathetic, and open-minded, allowing us to approach challenges with a fresh perspective. we value logic and creativity, ensuring that we make sound decisions and come up with innovative solutions for our customers. we are dedicated to creating a welcoming and supportive environment for everyone on our team.
                </p>
            </div>

            {/* <!-- contact --> */}
            <div className="contact-container">
                <h3 className="contact-title">🤝 contact</h3>
                <p className="contact-paragraph-text">
                    we value your feedback and are always eager to hear from you. whether you have suggestions, questions, or just want to connect, don't hesitate to reach out to us. we are always here to listen and help in any way we can.
                </p>
                <button 
                    type="button"
                    className="contact-button" 
                    onclick="window.open('https://cutt.ly/links-mensahe')">
                    get in touch
                </button>
            </div>
        </section>


    </div>
  )
}

export default about