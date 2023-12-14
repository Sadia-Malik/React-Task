// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Contactus from './Component/Contactus';
// import Aboutus from './Component/Aboutus';
// import Home from './Component/Home';

// function App(){
//   return(
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Home/>} /> 
//         <Route  path="/Aboutus" element={<Aboutus/>} /> 
//         <Route  path="/Contactus" element={<Contactus/>} /> 
//      </Routes>
//     </div>
//   );
// }
// export default App;


import React from "react";

import Navbar from "./Component/Navbar";
import Main from "./Component/Main"
import Footer from "./Component/Footer"
 function App(){
    return(
      <div>

   
    <Navbar/>
    <Main/>
    <Footer/>
    
      </div>

    );
  }
  export default App;
