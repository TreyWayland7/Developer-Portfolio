// AboutMe.jsx
import React from 'react';
import './AboutMe.css'; // Assuming you will style the component in this CSS file
import devPhoto from '../assets/images/developer.jpg'; // Update the path to your photo

function AboutMe() {
  return (
    <div className="about-me1">
      <img src={devPhoto} alt="Developer" className="dev-photo" />
      <h1>About Me</h1>
      <p>Hello! I am a software developer with a passion for creating amazing applications.</p>
    </div>
  );
}

export default AboutMe;