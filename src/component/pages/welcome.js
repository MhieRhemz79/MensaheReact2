import React from 'react'

const welcome = () => {
  return (
    <div>
      
    </div>
  )
}

export default welcome

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Sidebar from './components/pages/Sidebar';
// import Dashboard from './components/pages/dashboard.jsx';

// // import About from './pages/About.jsx';
// // import Analytics from './pages/Analytics.jsx';
// // import Comment from './pages/Comment.jsx';
// // import Product from './pages/Product.jsx';
// // import ProductList from './pages/ProductList.jsx';


// export default function welcome() {
//   return (
//     <>
    
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           {/* <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} /> */}
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
    
//     </>
//   )
// }
















// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Sidebar from '../pages/sidebar';

// const welcome = () => {

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [logindata, setLoginData] = useState([]);
    
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const history = useNavigate();

//     const todayDate = new Date().toLocaleDateString();

//     const Birthday = () => {
//         const getuser = localStorage.getItem("user_login");
//         if ( getuser && getuser.length ) {
//             const user = JSON.parse(getuser);
//             setLoginData(user);                     
//         }
//     }

//     const userlogout = () => {
//         localStorage.removeItem("user_login");
//         history('/sign_in');
//     }

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         Birthday();
//     }, [])


//   return (
    

//     <>
//         {
//             logindata.length === 0 ? <h4>Session Ended</h4> :  
//             <>          
//                 {/* <Navbar>
//                     <Container>
//                         <Navbar.Brand>Welcome to MENSAHE!</Navbar.Brand>
//                         <Navbar.Toggle />
//                         <Navbar.Collapse className="justify-content-end">
//                             <Navbar.Text>
//                                 Signed in as: {logindata[0].name} | <Button onClick={userlogout}>Log Out</Button>
//                             </Navbar.Text>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>       */}

//                 <Sidebar />
                
//             </>
//         }

//     </>
    
//   )
// }

// export default welcome
