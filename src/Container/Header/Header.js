import React from 'react'
import CTA from './CTA'
import './Header.css'

function Header() {
  return (
    <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Bright Programmer</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA className="cta" />
        <div className="header_socials">
            <a href="/" target="_blank">f</a>
            <a href="/" target="_blank">g</a>
            <a href="/" target="_blank">w</a>
        </div>
        <div className="me">
            <img src="/me.jpg" alt="" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>

        
    </div>
  )
}

export default Header