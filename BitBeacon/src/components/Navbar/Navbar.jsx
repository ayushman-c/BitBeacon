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
                <Link to="/services">
                <div className="services">Services</div>
                </Link>
                <a href="#about">
                <div className="about">About</div>
                </a>
                <a href="#roadmap">
                <div className="road-map">Roadmap</div>
                </a>
            </div>
            <div className="socials">
                <div className="twitter"></div>
                <div className="linkedIn"></div>
                <div className="insta"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
