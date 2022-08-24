import React from 'react';
import logo from '../../logo.svg';
import matthew from '../../assets/pictures/matthew.png';
import './aboutMe.css';

function AboutMe () {
  return (
    <>
    <div className="about-me">
      <div className="matthew" style={{backgroundImage: `url(${matthew})`}}> </div>
      <div className="about-text">
        <div className="hi">Hi, I'm Matthew.</div>
        <div className="love">I love making things work.</div>
        <div className="about-paragraph">I'm an engineer, an athlete, and a perpetual student.</div>
      </div>
    </div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          This site is under construction!
      </p>
    </header>
    </>
  );
}

export default AboutMe;
