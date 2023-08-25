import React from "react";
import './App.css';
import vido from "./vid1.mp4"
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
const Login = () => {
  
  const navigate= useNavigate();
  return (
   <div className="vido">
    <video src={vido} autoPlay loop muted />
    <video src={vido} autoPlay loop muted />
      <button onClick={()=> navigate("/phoneui")}>
        <div>
    <div className='container'>
 
 
  <div className='spline-container'>
    <Spline scene="https://prod.spline.design/sfmkTjYZ6z5Q5JR7/scene.splinecode"
     className='bg' />
    Click Here
  </div>
  
</div>

</div>
      </button>
     
    <video src={vido} autoPlay loop muted />
   </div>
  );
};

export default Login;
