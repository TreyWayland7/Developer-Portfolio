import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
return (
    <div className="portfolio-container">
        <h1>My Portfolio</h1>
        
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li><a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">Project 1</a></li>
                <li><a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">Project 2</a></li>
                <li><a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">Project 3</a></li>
                <li><a href="https://github.com/your-username/project4" target="_blank" rel="noopener noreferrer">Project 4</a></li>
                <li><a href="https://github.com/your-username/project5" target="_blank" rel="noopener noreferrer">Project 5</a></li>
                <li><a href="https://github.com/your-username/project6" target="_blank" rel="noopener noreferrer">Project 6</a></li>
            </ul>
        </section>
    </div>
);
};

export default Portfolio;