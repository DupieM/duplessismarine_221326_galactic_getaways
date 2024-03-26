import '../App.css';
import './landing.css';
import React from "react";
import img from  '../Images/Header_background.jpg';
import img2 from  '../Images/mobile_app_background.jpg'

function Landing(){
    return (

        <div className="App_landing">

            <div className='box'>
                <img src={img} className='bg_img'/>
                <div className="maincard">
                    <h2 className="Sub_Heading">Tired Of Global Warming?</h2>
                    <h2 className="Main_Heading">
                        Visit a <br/>
                        different planet
                    </h2>
                    <p className="Body">
                        Welcome to Celestial Voyages, where your dreams of interplanetary <br/>
                        exploration come to life. Join us in venturing beyond the stars, discovering <br/>
                        the wonders of otherworldly landscapes.
                    </p>
                    <button className="bt">Destinations</button>
                    <button className="bt_2">Stay up-to date</button>
                </div>
            </div>

            <div className='box2'>
                <h2 className="Sub_Heading_2">A Stellar Selection</h2>
                <p className="Body_2">
                    Explore three breathtaking destinations, each with its own unique charm and mystery.
                </p>
            </div>

            <div>
                <img src={img2} className='bg_img2'/>
                <div>
                    <h2 className="Sub_Heading_3">THE STARS IN YOUR POCKET... Coming soon</h2>
                    <p className="Body_3">
                        We are very excited to launch our very own Celestial Voyages mobile application 
                        coming soon to the App Store & Google Play Store.
                    </p>
                </div>
            </div>

            

            <br/>

        </div>
    );
}

export default Landing;