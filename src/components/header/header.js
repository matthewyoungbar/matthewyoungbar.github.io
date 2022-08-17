import React from 'react';
import linkedInLogo from '../../assets/icons/LinkedIn.svg';
import githubIcon from '../../assets/icons/Github.svg';
import resume from '../../assets/icons/Resume.svg';
import resumePDF from '../../assets/documents/Matthew_Youngbar_Resume.pdf';
import './header.css';

function Header () {
  return (
    <div className="header">
      <div className="text">Matthew Youngbar</div>
      <div className="icons">
        <a href = 'https://www.linkedin.com/in/matthew-youngbar'>
          <img src={linkedInLogo} className="icon" alt="logo" />
        </a>
        <a href = 'https://github.com/matthewyoungbar'>
          <img src={githubIcon} className="icon" alt="logo" />
        </a>
        <a href = { resumePDF }>
          <img src={resume} className="icon" alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
