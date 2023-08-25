import React, { useEffect, useState } from "react";
import './App.css';

const PhoneUi = () => {

  const [ car,setcar] = useState();
  useEffect(()=>{
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
    .then(r => r.json())
    .then(post =>setcar(post))
  },[])
  console.log(car);


  return (
    <div className="box-1">
      <div className="music-app">
        <div className="cover">
          <div className="cover-title">
            <p className="title"></p>
          </div>
          <div className="artist"><img src={car && car[56].download_url}/></div>
          <button className="btn btn-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>
        <div className="content">
          <div className="content-header">
            <span className="content-title">Top List</span>
            <button className="btn-all">All Albums</button>
          </div>
          <ul className="playlist">
            {car && car.map((e)=>{
            return(
            <li className="list-item">
              <img className="list-item-image" src={e.download_url} alt="song"/>
              <div className="list-item-info">
                <div className="info-title">{e.author}</div>
                <div className="info-subtitle">{e.id}</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            )})}
            
           
          </ul>
          
        </div>
      </div>
     
      
    </div>
  );
};

export default PhoneUi;
