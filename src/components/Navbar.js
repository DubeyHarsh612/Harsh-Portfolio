// Navbar.js

import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import contact from '../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../assets/menu.png'

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
const [showmenu, setshowmenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300; // Adjust this value as needed

      if (window.scrollY >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <img src={logo} alt="loading" className='logo' />
      <div className="deskmenu">
        <Link activeClass='active' to='intro1' spy={true} smooth={true} offset={-100} duration={500} className="deskmenuitems">Home</Link>
        <Link activeClass='active' to='about-section' spy={true} smooth={true} offset={-50} duration={500} className="deskmenuitems">About</Link>
        <Link activeClass='active' to='timeline-container' spy={true} smooth={true} offset={-50} duration={500} className="deskmenuitems">TimeLine</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="deskmenuitems">Projects</Link>
        
      </div>
    <button className="deskmenubtn">
  <a href="mailto:dubeyharsh.career@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>
    <img src={contact} alt="" className="deskmenuimg" /> Contact Me
  </a>
</button>

<img src={menu} alt="menu" className='mobmenu' onClick={()=>setshowmenu(!showmenu)} />
      <div className="navmenu" style={{display: showmenu? 'flex':'none'}}> 
        <Link activeClass='active' to='intro1' spy={true} smooth={true} offset={-100} duration={500} className="listmenuitems" onClick={()=>setshowmenu(false)}>Home</Link>
        <Link activeClass='active' to='about-section' spy={true} smooth={true} offset={-50} duration={500} className="listmenuitems" onClick={()=>setshowmenu(false)}>About</Link>
        <Link activeClass='active' to='timeline-container' spy={true} smooth={true} offset={-50} duration={500} className="listmenuitems" onClick={()=>setshowmenu(false)}>TimeLine</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listmenuitems" onClick={()=>setshowmenu(false)}>Projects</Link>
        <button className="listmenuitems">
  <a href="mailto:dubeyharsh.career@gmail.com" style={{ color: 'black', textDecoration: 'none', marginRight: '3rem' , fontWeight: '1500', fontSize: '1rem'}}>
       Contact Me
  </a>
</button>
      </div>

    </div>
  );
};

export default Navbar;
