import React from 'react';
import matthew from '../../assets/pictures/matthew.png';
import './aboutMe.css';

function AboutMe () {
  return (
    <div className="about-me">
      <div className="matthew" style={{backgroundImage: `url(${matthew})`}}> </div>
      <div className="about-text">
        <div className="hi">Hi, I'm Matthew.</div>
        <div className="love">I love making things work.</div>
        <div className="about-paragraph">I'm an engineer, an athlete, and a perpetual student.</div>
      </div>
    </div>
  );
}

export default AboutMe;
