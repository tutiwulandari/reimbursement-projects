import {Nav, Navbar, NavDropdown} from "@themesberg/react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function NavigationSideBar() {
    return(
        <Navbar style={{backgroundColor:"white"}} expand="lg">
            <Navbar.Brand href="#home" style={{color:"black", marginLeft:"-200px"}}>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#"/>
                    <Nav.Link href="#"/>
                </Nav>
                <NavDropdown title="Account" id="nav_dropdown" style={{color:"black!important", marginRight:"70px"}}>
                    <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faUser}/>  Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faEdit}/> Change Password</NavDropdown.Item>
                    <NavDropdown.Item href="/"><FontAwesomeIcon icon={faSignOutAlt}/>  Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}