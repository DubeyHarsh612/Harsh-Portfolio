import React from 'react';
import './intro.css';
import result from '../../assets/result.png';
import suitcase from '../../assets/suitcase.png';
import TypewriterText from './TypewriterText';

export const Intro = () => {
  const resumeLink = 'https://drive.google.com/file/d/1XpK-BGQs7DhwvjR03RK8NJOfMHl0xSZq/view?usp=drive_link';

  return (
    <section id="intro1">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="greet">
          I'm <span className="introname">Harsh</span> <br /> <TypewriterText />{' '}
        </span>
        <p className="intropara">
          A web developer skilled in crafting interactive and user-friendly websites. <br /> Let's bring your web ideas to
          life!
        </p>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn">
          <img src={suitcase} alt="" className="btn-icon" />
          <span className="btn-label">Resume</span>
        </a>
        <img src={result} alt="" className="bg" />
      </div>
    </section>
  );
};
