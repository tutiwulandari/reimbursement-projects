
import React from "react";
import NavigationSideBar from "./NavigationSideBar";
import {NavDropdown} from "react-bootstrap";

export default function Dashboard() {
    return(
        <div>
            <NavigationSideBar/>
            <div className="sidebar-container">
                <ul className="sidebar-navigation">
                    <li className="header"/>
                    <li>
                        <a href="#">
                            <i className="fa fa-home" aria-hidden="true"/>Home
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/table">
                            <i className="fa fa-tachometer" aria-hidden="true"/> History
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-tachometer" aria-hidden="true"/>Reimbursement
                        </a>
                    </li>
                </ul>
            </div>


        </div>
    )
}