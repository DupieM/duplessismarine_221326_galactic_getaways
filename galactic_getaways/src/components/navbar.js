import React from "react";
import icon from "../Images/Logo.png";
import './navbar_footer.css'

function BasicNavbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <div className='navHolder'>

            <img src={icon} className='Logo'></img>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-container" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="#start" className="navlink">Home</a>
                  <div class="underline"></div>
                </li>
                <li class="nav-item">
                  <a href="#mid" className="navlink">Destinations</a>
                  <div class="underline"></div>
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