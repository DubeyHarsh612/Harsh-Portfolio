import React from 'react';
import './About.css';
import github from '../../assets/github.png'
import linkdin from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
// import insta from '../../assets/insta.png'
// import twitter from '../../assets/twitter.png'

export const About = () => {
  return (
    <section className="about-section">
      <div className="bg"></div>
      <div className="about-content">
        <h2>About Me</h2>
        <hr className="hrtag" />
        <br />
        <br />
        <p>
          Hi there! I'm Harsh Dubey, a passionate web developer with a flair
          for creating beautiful and functional websites.
        </p>
        <p>
          My journey in the world of web development started several years ago,
          and I've been on an exciting coding adventure ever since. I specialize
          in crafting responsive and user-friendly web applications using
          cutting-edge technologies.
        </p>
        <p>
          Whether it's front-end development with React, back-end development
          with Node.js, or anything in between, I'm always up for a coding
          challenge. My goal is to bring your ideas to life on the web and
          deliver solutions that exceed your expectations.
        </p>
        <p>
          When I'm not coding, you can find me exploring new libraries and
          frameworks, experimenting with design concepts, or sipping on a cup of
          coffee while brainstorming my next big project.
        </p>
        <p>
          Let's collaborate and create something amazing together. Feel free to
          get in touch—I'd love to hear from you!
        </p>
        
        <div className="contact">
        <a href="https://github.com/dubeyharsh6" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="logo" />
        </a>
        <a href="https://www.linkedin.com/in/harsh-dubey-628483220" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} alt="linkedin" className="logo" />
        </a>
        <a href="mailto:dubeyharsh.career@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="mail" className="logo" />
        </a>
        {/* <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="insta" className="logo" />
        </a> */}
        {/* <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="logo" />
        </a> */}

        </div>
        
      </div>
    </section>
  );
};

export default About;
