import '../App.css';
import './landing.css';
import React from "react";
import img from  '../Images/Header_background.jpg';
import img2 from  '../Images/mobile_app_background.jpg';
import img3 from '../Images/Apple_iPhone_15_Pro_White_Titanium_1.png';
import planet1 from '../Images/mars.png';
import planet2 from '../Images/saturn.png';
import planet3 from '../Images/pluto.png'

function Landing(){
    return (

        <div className="App_landing">

            <div id="header">
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

            <div id="destinations" className="space">Hallo</div>

            <div className='box2' >
                <h2 className="Sub_Heading_2">A Stellar Selection</h2>
                <p className="Body_2">
                    Explore three breathtaking destinations, each with <br/>
                    its own unique charm and mystery.
                </p>
                <div class="container">
                    <div class="row gx-4 justify-content-center">
                        <div class="col-3" style={{width: '382px'}}>
                            <div class="planet_1">
                                <img src={planet1} className="p1" />
                                <h5 className="p_name">Mars</h5>
                                <div class="underline"></div>
                                <p className="p_info">
                                    Engage in thrilling activities like rover <br/>
                                    expeditions and marvel at the breathtaking <br/>
                                    Martian sunsets. Say hey to Elon!
                                </p>
                            </div>
                        </div>
                        <div class="col-3"  style={{width: '389px'}}>
                            <div class="planet_2">
                                <img src={planet2} className="p2" />
                                <h5 className="p_name">Saturn</h5>
                                <div class="underline"></div>
                                <p className="p_info">
                                    Experience weightlessness as you float among <br/>
                                    Saturn's rings to witness the grandeur of the <br/>
                                    gas giant from close quarters.
                                </p>
                            </div>
                        </div>
                        <div class="col-3"  style={{width: '382px'}}>
                            <div class="planet_3">
                                <img src={planet3} className="p3" />
                                <h5 className="p_name">Pluto</h5>
                                <div class="underline"></div>
                                <p className="p_info">
                                    Uncover the mysteries of the distant dwarf <br/>
                                    “planet” Pluto. Traverse its icy plains that <br/>
                                    resides on the outskirts of our solar system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box3'>
                <img src={img2} className='bg_img2'/>
                <div className="maincard2">
                    <h2 className="Sub_Heading_3">THE STARS IN YOUR POCKET... Coming soon</h2>
                    <p className="Body_3">
                        We are very excited to launch our very own <br/>
                        Celestial Voyages mobile application coming soon <br/>
                        to the App Store & Google Play Store.
                    </p>
                    <img src={img3} className='bg_img3'/>
                </div>
            </div>

            

            <br/>

        </div>
    );
}

export default Landing;