import React, { useState } from "react";
import './App.css';

const Music = () => {
  const [isPlayerScreenActive, setPlayerScreenActive] = useState(false);

  const handleExtendButtonClick = () => {
    setPlayerScreenActive(true);
  };

  const handleCloseButtonClick = () => {
    setPlayerScreenActive(false);
  };

  return (
    <div>
      <div className="music-app">
        <div className="cover">
          <div className="cover-title">
            <p className="title">Diljit</p>
          </div>
          <div className="artist"></div>
          <button className="btn btn-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>
        <div className="content">
          <div className="content-header">
            <span className="content-title">Top Songs</span>
            <button className="btn-all">all songs</button>
          </div>
          <ul className="playlist">
            <li className="list-item">
              <img className="list-item-image" src="https://i.scdn.co/image/ab67616d0000b2735b7ba7da308af447f48b9943" alt="song"/>
              <div className="list-item-info">
                <div className="info-title">Kaise Mujhe Tum Mil Gayi</div>
                <div className="info-subtitle">Benny Dayal, Shreya Ghosal</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            <li className="list-item">
              <img className="list-item-image" src="https://images.unsplash.com/photo-1470020618177-f49a96241ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="song"/>
              <div className="list-item-info">
                <div className="info-title">Kun Faya Kun</div>
                <div className="info-subtitle">A.R.RAHMAN, JAVED ALI, MOHIT CHAUHAN</div>
              </div>
              <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </li>
            <li className="list-item">
              <img className="list-item-image" src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
              <div className="list-item-info">
                <div className="info-title">One Bottle Down </div>
                <div className="info-subtitle">Yo Yo Honey Singh</div>
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
            <button className="btn-all">all albums</button>
          </div>
          <div className="album-list">
            <div className="album-wrapper">
              <img src="https://images.unsplash.com/photo-1497911174120-042e550e7e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2238&q=80" alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">The Slow Rush</div>
                <div className="info-subtitle">Tame Impala</div>
              </div>
            </div>
            <div className="album-wrapper">
              <img src="https://images.unsplash.com/photo-1565021009519-22da0e21f65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">Currents</div>
                <div className="info-subtitle">Tame Impala</div>
              </div>
            </div>
            <div className="album-wrapper">
              <img src="https://images.unsplash.com/photo-1574155088851-0c770818ba40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="album" className="album-cover"/>
              <div className="list-item-info">
                <div className="info-title">Lonerism</div>
                <div className="info-subtitle">Tame Impala</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player">
        <button className="btn btn-extend" onClick={handleExtendButtonClick}>
          
        </button>
        <div className="player-top-content">
          <img className="list-item-image" src="https://images.unsplash.com/photo-1588465023238-f8951f48a1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="song"/>
          <div className="list-item-info">
            <div className="info-title">Let It Happen</div>
            <div className="info-subtitle">Tame Impala</div>
          </div>
          <div className="buttons-wrapper">
            <button className="btn btn-play">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </button>
            <button className="btn btn-next">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="feather feather-skip-forward" width="14" height="14" viewBox="0 0 24 24">
                <defs/>
                <path d="M5 4l10 8-10 8V4zM19 5v14"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="proggress-part">
          <span className="time">01:24</span>
          <div className="proggres-bar">
            <span className="progress"></span>
          </div>
          <span className="time">03:44</span>
        </div>
      </div>
      {isPlayerScreenActive && (
        <div className="player-screen">
          <button className="btn btn-close" onClick={handleCloseButtonClick}>
            
          </button>
          <span className="top-text">Now Playing</span>
          <div className="cover-wrapper">
            <img className="cover-shadow" src="https://images.unsplash.com/photo-1588465023238-f8951f48a1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
            <img  className="cover-img" src="https://images.unsplash.com/photo-1588465023238-f8951f48a1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
          </div>
          <div className="song-info">
            <p className="song-title">Let It Happen</p>
            <p className="song-subtitle">Tame Impala</p>
          </div>
          <div className="proggress-part">
            <span className="time">01:24</span>
            <div className="proggres-bar">
              <span className="progress"></span>
            </div>
            <span className="time">03:44</span>
          </div>
          <div className="action-bar">
            <button className="btn btn-repeat"></button>
            <button className="btn btn-back"></button>
            <button className="btn btn-rewind"></button>
            <button className="play-button"></button>
            <button className="btn btn-rewind-next"></button>
            <button className="btn btn-play-next"></button>
            <button className="btn btn-list"></button>
          </div>
          <div className="sound-bar">
            <button className="btn btn-volume-down"></button>
            <div className="proggres-bar volume">
              <span className="progress"></span>
            </div>
            <button className="btn btn-volume-up"></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
