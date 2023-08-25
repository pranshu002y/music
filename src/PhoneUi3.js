import React, { useEffect, useState } from "react";
import './App.css';

const PhoneUi3 = () => {
  
  const [photo,setphoto]=useState();
  useEffect(()=>{
    fetch ("https://picsum.photos/v2/list?page=2&limit=100").then(r=>r.json())
    .then(post=>setphoto(post))
  },[])
  console.log(photo);

  const[car,setcar] = useState();
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8").then(r=>r.json())
    .then(post=>setcar(post))
  },[])


  return (
    <div className="box-1">
      <div className="music-app">
      <div className="album-wrapper photo">
              <img src={photo && photo[29].download_url} alt="album" className="album-cover-1"/>
            </div>
            <div className="album-wrapper photo">
            <img src={photo && photo[9].download_url} alt="album" />
            </div>
            
            <div className="album-wrapper photo">
            <img src={photo && photo[8].download_url} alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">The Revuelto</div>
                <div className="info-subtitle">Sterrato </div>
                
              </div>
              <img src={photo && photo[5].download_url} alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[3].user.name}</div>
                <div className="info-subtitle">{photo && photo[8].author} </div>
                
              </div>
              
              
            </div>
            
            
      </div>
     
      
    </div>
  );
};

export default PhoneUi3;
