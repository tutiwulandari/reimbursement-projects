import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import {faHome, faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navigation() {
        return(
                 <Navbar style={{backgroundColor:"#292961"}} expand="lg">
                     <Navbar.Brand href="#home" style={{color:"white"}}>ENIGMA CAMP</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="mr-auto">
                             <Nav.Link href="/" style={{color:"white"}}><FontAwesomeIcon icon={faHome} style={{fontSize:"25px"}}/></Nav.Link>
                             <Nav.Link href="/petunjuk" style={{color:"white", fontsize:"20px"}}>Guide</Nav.Link>

                         </Nav>
                         <Nav.Link href="/register" style={{color:"white"}}><FontAwesomeIcon icon={faSignInAlt}/> Register/Login</Nav.Link>
                     </Navbar.Collapse>
                 </Navbar>
        )
    }