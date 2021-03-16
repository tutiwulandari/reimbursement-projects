import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "@themesberg/react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function NavigationSideBar() {
    return(
        <Navbar style={{backgroundColor:"#292961"}} expand="lg">
            <Navbar.Brand href="#home" style={{color:"white"}}>ENIGMA CAMP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#"/>
                    <Nav.Link href="#"/>
                </Nav>
                <NavDropdown title="Account" id="nav_dropdown" style={{color:"white!important", marginRight:"50px"}}>
                    <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faUser}/>  Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faEdit}/> Reset Password</NavDropdown.Item>
                    <NavDropdown.Item href="/"><FontAwesomeIcon icon={faSignOutAlt}/>  Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}