import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className={styles.footer}>
                <h3>Behairful</h3>
                <h3 style={{textAlign: "left", marginLeft: '1.4rem'}}>Menu</h3>
                    <>
                        <Navbar bg="black" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home" style={{color: 'white'}}>Dashboard</Nav.Link>
                                    <Nav.Link href="#link" style={{color: 'white'}}>Pay Me</Nav.Link>
                                    <Nav.Link href="#home" style={{color: 'white'}}>Earnings Forecaster</Nav.Link>
                                    <Nav.Link href="#link" style={{color: 'white'}}>Our Gummy</Nav.Link>
                                    <Nav.Link href="#home" style={{color: 'white'}}>FAQ</Nav.Link>
                                    <Nav.Link href="#link" style={{color: 'white'}}>Talking Points</Nav.Link>
                                    <Nav.Link href="#home" style={{color: 'white'}}>Terms & Conditions</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                        <h3 style={{textAlign: "center"}}>Social</h3>
                        <h3 style={{textAlign: "center"}}>Why We Do It</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam laudantium perspiciatis recusandae tenetur veritatis. Debitis dicta eum labore officia reprehenderit. Deserunt dolor dolore dolores iure molestiae quae repellendus velit?</p>
                        <hr />

                        <p>&copy; 2021 Behairful. All rights reserved</p>

                    </>
                </div>
            </div>
    );
};

export default Footer;