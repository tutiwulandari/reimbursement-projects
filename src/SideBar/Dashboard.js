
import React from "react";
import NavigationSideBar from "./NavigationSideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HomeSideBar from "./HomeSideBar";
import {
    faEdit,
    faHistory,
    faHome,
    faMoneyBillAlt,
    faMoneyCheck, faSignOutAlt,
    faTachometerAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import TableDashboard from "./TableDashboard";
import {Navbar, NavDropdown} from "@themesberg/react-bootstrap";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

export default function Dashboard() {
    return(
        <div>
            <NavigationSideBar/>
            <div className="sidebar-container" style={{marginTop:"-60px", backgroundColor:"#292961"}}>
                <ul className="sidebar-navigation" style={{marginTop:"100px"}}>
                    <li>
                        <a href="/dashboard" style={{fontSize:"20px",color:"white"}}>
                            <i aria-hidden="true" />
                            <FontAwesomeIcon icon={faHome}/> Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/employee" style={{fontSize:"20px", marginTop:"20px", color:"white"}}>
                            <i aria-hidden="true"/>
                            <FontAwesomeIcon icon={faHistory}/> History
                        </a>
                    </li>
                    <li style={{marginTop:"20px",fontSize:"20px"}}>
                        <NavDropdown title="Reimbursement" id="nav_dropdown" style={{marginRight:"70px",backgroundColor:"#292961"}}>
                            <NavDropdown.Item href="/claims/glasses"><FontAwesomeIcon icon={faPlus}/> Glasses Claims</NavDropdown.Item>
                            <NavDropdown.Item href="claims/birthing"><FontAwesomeIcon icon={faPlus}/> Birthing Claims</NavDropdown.Item>
                            <NavDropdown.Item href="/claims/officeTravel"><FontAwesomeIcon icon={faPlus}/> Official Travel Claims</NavDropdown.Item>
                            <NavDropdown.Item href="/claims/training"><FontAwesomeIcon icon={faPlus}/> Training Claims</NavDropdown.Item>
                            <NavDropdown.Item href="/claims/insurance"><FontAwesomeIcon icon={faPlus}/> Insurance Claims</NavDropdown.Item>
                        </NavDropdown>

                        {/*<a href="#" style={{marginTop:"20px", fontSize:"20px", color:"black"}}>*/}
                        {/*    <i aria-hidden="true"/> <FontAwesomeIcon icon={faMoneyBillAlt}/> Reimbursement*/}
                        {/*</a>*/}
                    </li>
                </ul>
            </div>
            <HomeSideBar/>
            <TableDashboard/>

        </div>
    )
}