import React from 'react';
import Navbar from '../pages/navbar';
import Introduction from '../pages/introduction';
import Howitworks from '../pages/howitworks';
import Guide from '../pages/guide';
import About from '../pages/about';
import Footer from '../pages/footer';

const home = () => {
  return (
    <div>
      <Navbar />  
      <Introduction />
      <Howitworks />
      <Guide />
      <About />
      <Footer />      
    </div>
  )
}

export default home