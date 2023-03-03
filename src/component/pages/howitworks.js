import React from 'react';
import './css/how-it-works-section.css';
// import Navbar from '../pages/navbar';

const howitworks = () => {

  

  return (
    <div>
        
        {/* <!-- how it works section start --> */}
        <section id="how-it-works-section">
          
            {/* <!-- benefits of mensahe --> */}
            <div className="benefits-container">
                <h2 className="benefits-question-text">what benefits does our product and service offer?</h2>
                {/* <!-- product benefits --> */}
                <ul className="benefits-product-list">
                    <li className="benefits-product-list-text">
                        <strong>💭 remembrance: </strong>
                        it can serve as a reminder or tribute to a person or event. they can be saved and revisited at any time, providing a lasting record of memories and thoughts.
                    </li>

                    <li className="benefits-product-list-text">
                        <strong>🚀 convenience: </strong>
                        it can be accessed from any device with an internet connection, so you don't have to worry about losing the letter or being unable to access it when you need it.
                    </li>

                    <li className="benefits-product-list-text">
                        <strong>📁 versatility: </strong>
                        it can include multimedia elements such as images, videos, other files, and links, which can make them more interactive and engaging than physical letters or physical messages.
                    </li>

                    <li className="benefits-product-list-text">
                        <strong>💾 easy to store: </strong>
                        it can be easily stored and organized on a computer or other digital device, making it easy to refer back to them at a later date.
                    </li>

                    <li className="benefits-product-list-text">
                        <strong>🌿 sustainability: </strong>
                        it is environmentally friendly because they do not require paper, ink, or transportation. this helps to reduce the carbon footprint associated with traditional mail.
                    </li>

                    <li className="benefits-product-list-text">
                        <strong>💰 cost: </strong>
                        sending a personalized website message is usually free or very low cost, compared to the cost of stamp and envelopes for traditional mail.
                    </li>
                </ul>

                {/* <!-- service benefits --> */}
                <ol className="benefits-service-list">
                    <li className="benefits-service-list-text">
                        we understand that budget can be a major consideration. that's why we're pleased to offer our service at no cost to you at this time. rest assured, our pricing will remain affordable and cost-effective as we continue to meet your personal needs in the future.
                    </li>

                    <li className="benefits-service-list-text">
                        at our company, customer satisfaction is our top priority. that's why we are dedicated to providing a great level of service and guarantee that your personalized website message will be remarkable with our service. we have a team of customer service representatives who are always available to assist with any questions or concerns you may have.
                    </li>

                    <li className="benefits-service-list-text">
                        we understand that everyone has different needs and preferences, which is why we offer a range of customized features to suit your specific personal needs.
                    </li>

                    <li className="benefits-service-list-text">
                        our service is designed with convenience in mind. it is easy to use and allows you to send a message to the intended recipient with just a single click. we believe that this feature makes our service a great choice for people who need to communicate efficiently.
                    </li>
                </ol>
            </div>

            {/* <!-- customer stories --> */}
            <div className="customer-stories-container">
                <p className="customer-stories-text"><em><strong>customer stories</strong>   ||   "i saw the website and it looks great!"  ||   "i really like the customizable letter! will surely recommend using it to friends!"</em> </p>
            </div>

        </section>
        {/* <!-- how it works section end --> */}


    </div>
  )
}

export default howitworks