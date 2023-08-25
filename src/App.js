import Login from './Login';
import PhoneUi from "./Phone"
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

 // <div className='phone'>
       

     /* <PhoneUi/>
     <PhoneUi2/>
     <PhoneUi3/> */
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/phoneui' element={<PhoneUi/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
