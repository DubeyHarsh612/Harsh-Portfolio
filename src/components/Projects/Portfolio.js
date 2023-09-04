import React from 'react'
import portwebb from '../../assets/portweb.png';
import './Portfolio.css'
import news from '../../assets/news.png'
import github from '../../assets/github.png'

function Portfolio() {
  return (
    
    <section id="projects">
      
      <span className="title">Projects</span>
      <hr className="title-hr" /> 
        <div className="projectbars">
            
        <div className="projectbar">
    <img src={portwebb} alt="" className="projectbarimg" />
    <div className="PortWeb">
        <h2>Portfolio Website</h2>
        <hr className="pro" />
        <p>Welcome to my portfolio website, where I showcase my passion for web development and design. This project is a dynamic and visually engaging platform that highlights my skills and projects. Using HTML, CSS, JavaScript, and React, I've created a captivating online portfolio that serves as a digital canvas to express my creativity and expertise.</p>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="logo" />
        </a>
    </div>
</div>


        <div className="projectbar">
            <img src={news} alt="" className="projectbarimg" />
            <div className="projectbartitle">
                <h2>News Website</h2>
                <hr className="pro" />
                <p>under development....</p>
                <img src={github} alt="" className="logo" />
            </div> 
        </div>

        </div>
    </section>
  )
}

export default Portfolio