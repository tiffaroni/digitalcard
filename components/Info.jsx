import React from 'react';
import profilePic from "../src/assets/profile-pic.png";
import About from "./About";
import Interests from "./Interests";
import instagram from "../src/assets/instagram.png";
import github from "../src/assets/github-sign.png";
import linkedin from "../src/assets/linkedin.png";
import email from "../src/assets/email.png";

export default function Info() {
    const emailButtonClicked = () => {
        window.location.href = 'mailto:tiffanylin757@gmail.com';
    };
    
    const linkedinButtonClicked = () => {
        window.open('https://www.linkedin.com/in/tiffanylintx', '_blank');
    };

    return (
        <div className="info">
            <div className="pic-container">
                <img className="profile-pic" src={profilePic} alt="Profile" />
            </div>

            <div className='info-body'>
                <h1 className="info-name">Tiffany Lin</h1>
                <h2 className="info-title">Software Developer</h2>
                <a className="info-website" href='https://tiffaroni.github.io' target="_blank" rel="noopener noreferrer">tiffaroni.github.io</a>
                <div className='btn'>
                    <button className="btn-email" onClick={emailButtonClicked}>
                        <img src={email} alt="Email" className="btn-icon" /> Email
                    </button>
                    <button className="btn-linkedin" onClick={linkedinButtonClicked}>
                        <img src={linkedin} alt="LinkedIn" className="btn-icon" /> LinkedIn
                    </button>
                </div>
                <div className="info-about-body">
                    <About />
                    <Interests />
                </div>
            </div>

            <div className='info-footer'>
                <a href="https://www.instagram.com/tiffaronii" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://github.com/tiffaroni" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
        </div>
    );
}
