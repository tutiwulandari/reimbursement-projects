
import React from "react";
import NavigationSideBar from "../NavigationSideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HomeSideBar from "../HomeSideBar";
import {
    faHistory,
    faHome, faListAlt
} from "@fortawesome/free-solid-svg-icons";
import TableDashboardHc from "./TableDashboardHc";

export default function DashboardHc() {
    return(
        <div>
            <NavigationSideBar/>
            <div className="sidebar-container" style={{marginTop:"-60px", backgroundColor:"#292961"}}>
                <ul className="sidebar-navigation" style={{marginTop:"100px"}}>
                    <li>
                        <a href="/dashboard" style={{fontSize:"20px",color:"white", fontFamily:"Century Gothic"}}>
                            <i aria-hidden="true" />
                            <FontAwesomeIcon icon={faHome}/> Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/employee" style={{fontSize:"20px", marginTop:"20px", color:"white",fontFamily:"Century Gothic"}}>
                            <i aria-hidden="true"/>
                            <FontAwesomeIcon icon={faHistory}/> History Claims
                        </a>
                    </li>
                    <li style={{fontSize:"20px"}}>
                        {/*<NavDropdown title="Reimbursement" id="nav_dropdown" style={{marginRight:"70px",backgroundColor:"#292961"}}>*/}
                        {/*    <NavDropdown.Item href="/claims/glasses"><FontAwesomeIcon icon={faPlus}/> Glasses Claims</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="claims/birthing"><FontAwesomeIcon icon={faPlus}/> Birthing Claims</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="/claims/officeTravel"><FontAwesomeIcon icon={faPlus}/> Official Travel Claims</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="/claims/training"><FontAwesomeIcon icon={faPlus}/> Training Claims</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="/claims/insurance"><FontAwesomeIcon icon={faPlus}/> Insurance Claims</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                        <a href="/employee" style={{marginTop:"10px", fontSize:"20px", color:"white",fontFamily:"Century Gothic"}}>
                            <i aria-hidden="true"/> <FontAwesomeIcon icon={faListAlt}/>  Employee
                        </a>
                    </li>
                </ul>
            </div>
            <HomeSideBar/>
            <TableDashboardHc/>

        </div>
    )
}