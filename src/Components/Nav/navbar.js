import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Cover  from '../images/James Torres Jr cover letter.pdf'
import Resume from '../images/Resume.pdf'

function NavMe() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>torresjames48@yahoo.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Navigation" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">About Me</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item> */}
                        <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/JamTor1994" target="_blank">Git</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/james-torres-59b158175/" target="_blank">Linked In</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href={Resume}>Resume</Nav.Link>
                    {/* <Nav.Link eventKey={2} href={Cover}> */}
                        {/* Cover Letter
            </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavMe;