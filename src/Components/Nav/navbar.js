import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cover  from '../images/James Torres Jr cover letter.pdf'
import Resume from '../images/Resume.pdf'

function NavMe() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Navigation" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Portfolio</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Git</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">LinkedIn</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href={Resume}>Resume</Nav.Link>
                    <Nav.Link eventKey={2} href={Cover}>
                        Cover Letter
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavMe;