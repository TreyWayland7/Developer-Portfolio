import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="card">
      <h1>Resume</h1>
      
      <section>
        <h2>Personal Information</h2>
        <p>Name: Trey Wayland</p>
        <p>Email: treywayland@yahoo.com</p>
        <p>Phone: (360) 540-5307</p>
      </section>
      
      <section>
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>Western Washington University</p>
        <p>Graduated: March 2020</p>
      </section>
      
      <section>
        <h2>Experience</h2>
        <h3>Test Engineer</h3>
        <p>July 2021 - Present</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js</li>
          <li>Collaborated with cross-functional teams to define and design new features</li>
          <li>Implemented responsive design to ensure compatibility across various devices</li>
        </ul>
      </section>
      
      <section>
        <h2>Coding Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;