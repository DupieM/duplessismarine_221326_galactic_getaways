import React from "react";
import icon from "../Images/Logo.png";
import './navbar.css'
import { useEffect, useState } from "react";

function BasicNavbar() {

    const [activeLink, setActiveLink] = useState('link1');

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

    useEffect(() => {
      setActiveLink('link1');
    }, []);

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <div className='navHolder'>
            
            <a href="#header">
              <img src={icon} className='Logo'/>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-container" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={activeLink === 'link1' ? 'nav-item active-link' : 'nav-item'} onClick={() => handleLinkClick('link1')}>
                  <a href="#header" className="navlink">Home</a>
                  <div class="underline"></div>
                </li>
                <li className={activeLink === 'link2' ? 'nav-item active-link2' : 'nav-item'} onClick={() => handleLinkClick('link2')}>
                  <a href="#destinations" className="navlink">Destinations</a>
                  <div class="underline2"></div>
                </li>
              </ul>
            </div>
          </div>

          <button type="button" className="btn">Get the app</button>

        </div>
      </nav>
    )
}

export default BasicNavbar;