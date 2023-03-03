import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Routes,Route} from "react-router-dom";
// import SignUp from '../pages/signup';
// import Dashboard from '../pages/dashboard';
import Navbar from '../pages/navbar';
import Introduction from '../pages/introduction';
import Howitworks from '../pages/howitworks';
import Guide from '../pages/guide';
import About from '../pages/about';
import SignIn from '../pages/signin';
import Footer from '../pages/footer';


const home = () => {
  return (
    <div>

      <Navbar />  
      <Introduction />
      <Howitworks />
      <Guide />
      <About />
      <SignIn/>
      <Footer />
      
    </div>
  )
}

export default home