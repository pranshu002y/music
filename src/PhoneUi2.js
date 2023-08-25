import React, { useEffect, useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

const PhoneUi2 = () => {
  
  const [ car,setcar] = useState();
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
    .then(r => r.json())
    .then(post =>setcar(post))
  },[])
  console.log(car);

 const Navigate= useNavigate();


  return (
    <div className="box-1">
      <div className="music-app">
        <div className="cover">
          
          <div className="cover-title">
            
          </div>
          
          <div className="artist">
          <img src={car && car[0].urls.full}/>
          </div>
          
        </div>
        <div className="content">
          <div className="content-header">
            <span className="content-title">{car && car[0].user.first_name}</span>
            <button className="btn-all">{car && car[0].user.instagram_username}</button>
          </div>
          <ul className="playlist">
            <li className="list-item">
              <img className="list-item-image" src={car && car[0].sponsorship.sponsor.profile_image.large}  alt="song"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[0].sponsorship.tagline}</div>
                <div className="info-subtitle">{car && car[0].sponsorship.sponsor.links.location}</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            <li className="list-item">
              <img className="list-item-image" src={car && car[0].urls.raw}  alt="song"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[0].sponsorship.tagline}</div>
                <div className="info-subtitle">{car && car[0].sponsorship.sponsor.links.location}</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            <li className="list-item">
              <img className="list-item-image" src={car && car[2].urls.raw}  alt="song"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[3].user.first_name}</div>
                <div className="info-subtitle">{car && car[0].sponsorship.sponsor.links.location}</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            <li className="list-item">
              <img className="list-item-image" src={car && car[3].urls.full}  alt="song"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[3].user.first_name}</div>
                <div className="info-subtitle">{car && car[0].sponsorship.sponsor.links.location}</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
           
          </ul>
          <div className="content-header">
            <span className="content-title">Albums</span>
            <button className="btn-all">All albums</button>
          </div>
          <div className="album-list">
            <div className="album-wrapper">
              <img src={car && car[4].urls.raw} alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[4].user.first_name}</div>
                <div className="info-subtitle">{car && car[4].user.instagram_username}</div>
              </div>
            </div>
            <div className="album-wrapper">
              <img src={car && car[5].urls.raw} alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[5].user.first_name}</div>
                <div className="info-subtitle">{car && car[5].user.instagram_username}</div>
              </div>
            </div>
            <div className="album-wrapper">
              <img src={car && car[6].urls.raw} alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">{car && car[6].user.first_name}</div>
                <div className="info-subtitle">{car && car[6].user.instagram_username}</div>
              </div>
            </div>
          </div>
        </div>

        <button className="home">
        <img src={"https://static.thenounproject.com/png/251451-200.png"} onClick={()=>Navigate("/login")}/>
</button>

      </div>
     

     
      
    </div>
  );
};

export default PhoneUi2;
