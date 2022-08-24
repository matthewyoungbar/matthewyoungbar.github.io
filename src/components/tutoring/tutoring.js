import React from 'react';
import { InlineWidget } from "react-calendly";
import './tutoring.css';

function Tutoring () {
  return (
    <div className="tutoring-main">
      <div className="bio-text">
        I am a Co-Term student offering up my services to tutor students in CS1 or Data Structures at RPI for the Fall 2022 semester.
        <br />
        I have taken and previously mentored for both courses. I can help with homeworks, exam prep, or general studying.
        <br />
        The standard rate for a 1 hour session is $30. I accept any form of digital payment (Venmo, Apply Pay, Paypal).
      </div>
      <InlineWidget styles={{height: '1200px'}}
        url="https://calendly.com/matthewyoungbar/cs-tutoring?hide_gdpr_banner=1" pageSettings={{
        backgroundColor: '062F4F',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '813772',
        textColor: 'ffffff'
      }}
      />
    </div>
  );
}

export default Tutoring;
