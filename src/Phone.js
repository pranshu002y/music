import React from "react";
import './App.css';
import lambo from "./lambo.mp4"
import PhoneUi from "./PhoneUi";
import PhoneUi2 from "./PhoneUi2"
import PhoneUi3 from "./PhoneUi3"


const Phone = () => {
  

  return (

    

    <div className="ui">
      <div className="video-container">
  {/* <video className="background-video" src={lambo} autoPlay loop muted/> */}
</div>



<div className="phone">
<PhoneUi2/>
</div>

<div className="phone-2">
<PhoneUi3/>
</div>

<div className="phone-3">
<PhoneUi/>
</div>


    </div>
  );
};

export default Phone;
