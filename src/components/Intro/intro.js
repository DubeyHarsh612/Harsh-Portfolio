import React from 'react'
import './intro.css'
import result from '../../assets/result.png'
import { Link } from 'react-scroll'
import suitcase from '../../assets/suitcase.png'
import TypewriterText from './TypewriterText'


export const Intro = () => {
  return (
    <section id="intro1">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="greet">I'm <span className="introname">Harsh</span> <br /> <TypewriterText/> </span>
        <p className="intropara"> A web developer skilled in crafting interactive and user-friendly websites. <br /> Let's bring your web ideas to life!</p>
        <Link to='https://drive.google.com/file/d/14-qVPwmBBSAjaCa6BrVjW_2QtBpFv0WN/view' spy={true}> <button className="btn"><img src={suitcase} alt="" />Resume</button> </Link>
        <img src={result} alt="" className="bg" />
      </div>
      
    </section>
  )
}