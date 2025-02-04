// import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'; // GitHub logo icon

import './navTabs.css';

function NavTabs() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = "TTrey Wayland";

  useEffect(() => {
    let index = 0;
    setDisplayedName('');

    const interval = setInterval(() => {
      if (index < fullName.length - 1) {
        setDisplayedName(prev => prev + fullName[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, 100); // Adjust the speed of the animation by changing the interval (in milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <Navbar expand="lg" className="px-4" sticky="top">
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* GitHub Logo with left and right margins */}
          <Navbar.Brand href="https://github.com/treywayland7" target="_blank" className="me-3">
            <FaGithub size={90} />
          </Navbar.Brand>

          {/* Buttons on the right */}
          <Nav className="ms-auto">
          <Nav.Link href="about-me" className="custom-btn mx-1">
              About Me
            </Nav.Link>
            <Nav.Link href="contact" className="custom-btn mx-1">
              Contact
            </Nav.Link>
            <Nav.Link href="portfolio" className="custom-btn mx-1">
              Portfolio
            </Nav.Link>
            <Nav.Link href="Resume" className="custom-btn mx-1">
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Name at the very top overlapping the navbar */}
      <div className="absolute-center">
        <h1 className="m-0 animated-text">{displayedName}</h1>
      </div>

 
    </>
  );
}

export default NavTabs;