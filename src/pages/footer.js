import React from 'react'
import '../css/footer.css';

const footer = () => {
  return (
    <div>
        {/* <!-- footer start --> */}
        <footer class="footer">
            <div class="footer-container">
                <p class="footer-text">
                    copyright @ 2022 to 2023 - made with 💌 by 
                        <span 
                        class="footer-mensahe-team-ph-text">
                            <a 
                            class="footer-email-address"
                            href="mailto:hellomensaheph@skiff.com">
                            mensahe team ph
                            </a>
                        </span> 
                    👋</p>
            </div>
        </footer>
        {/* <!-- footer end --> */}
    </div>
  )
}

export default footer