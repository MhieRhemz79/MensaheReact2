import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from "react-router-dom"
import SignIn from './component/pages/sign_in';
import SignUp from './component/pages/signup';
import Sidebar from './component/pages/sidebar';
import Home from './component/pages/home';
import Introduction from './component/pages/introduction';
import Howitworks from './component/pages/howitworks';
import Guide from './component/pages/guide';
import About from './component/pages/about';
import Footer from './component/pages/footer';

function App() {
  return (
    
    <>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>    
    </>
  );
}

export default App;
