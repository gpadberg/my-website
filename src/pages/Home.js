import React from 'react';
import headshot from '../images/headshot.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <img src={headshot} alt="Grace's headshot" className="headshot" />
      <p className="intro-text">
        hey! i'm grace, a software engineering student at the university of alberta.
      </p>
    </div>
  );
}