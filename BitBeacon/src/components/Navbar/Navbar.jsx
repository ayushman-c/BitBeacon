import React from 'react'
import './Navbar.css' 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="box">
    <div className="main-container">
            <div className="logo-name">
                <div className="logo">
                    <div className="logo-pic"></div>
                </div>
                <div className="name-box">
                    <div className="name">BitBeacon</div>
                    <div className="crypto">Crypto</div>
                </div>
                
            </div>
            <div className="options">
                <a href="#home">
                <Link to="/">
                <div className="home">Home</div>
                </Link>
                </a>
                
                <a href="#about">
                <div className="about">About</div>
                </a>
                <a href="#roadmap">
                <div className="road-map">Roadmap</div>
                </a>
                <Link to="/services">
                <div className="services">Services</div>
                </Link>
            </div>
            <div className="socials">
                <a href='https://x.com/ayushman_hex9' target='main'>
                <div className="twitter" ></div>
                </a>
                <a href='www.linkedin.com/in/ayushman-chakraborty-aaa612364' target='main'>
                <div className="linkedIn"></div>
                </a>
                <a href='https://github.com/ayushman-c' target='main'>
                <div className="github"></div>
                </a>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
