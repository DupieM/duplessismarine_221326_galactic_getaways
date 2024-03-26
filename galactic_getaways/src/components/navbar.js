import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import icon from "../Images/Logo.png";

function BasicNavbar() {
    return (
       <Navbar style={{height: '104px', background: 'linear-gradient(to bottom, rgba(12, 5, 25, 0.7), rgba(12, 5, 25, 0.3))', textAlign: 'left'}}>
            <Container style={{paddingTop: '7px',}}>
                <Navbar.Brand href="/"><img src={icon} style={{width: '66px', marginRight: "-50px"}}/></Navbar.Brand>
                <Nav>
                    <Nav.Link href="/" style={{fontSize: '17pt', color: 'white'}}>Home</Nav.Link>
                    <Nav.Link href="" style={{fontSize: '17pt', color: 'white'}}>Destinations</Nav.Link>
                </Nav>
                
                <button style={{width: '160px', height: '55px', borderRadius: '100px', border: '4px solid rgba(242, 153, 74, 1)', backgroundColor: 'rgba(225, 225, 225, 0', color: 'white', fontSize: '16px', fontWeight: '700', fontFamily: '"Inter", sans-serif'}}>
                    Get the app
                </button>
            </Container> 
       </Navbar>
    )
}

export default BasicNavbar;