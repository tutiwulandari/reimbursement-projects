
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DashboardHomeHc from "../dashboardHc/DashboardHomeHc";
import {faHome, faMoneyBill} from "@fortawesome/free-solid-svg-icons";

export default function DashboardFinance() {
    return(
        <div>
            <div className="sidebar-container" style={{marginTop:"-60px", backgroundColor:"#292961"}}>
                <ul className="sidebar-navigation" style={{marginTop:"100px"}}>
                    <li>
                        <a href="/dashboard" style={{fontSize:"20px",color:"white", fontFamily:"sans-serif"}}>
                            <i aria-hidden="true" />
                            <FontAwesomeIcon icon={faHome}/> Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/table2" style={{fontSize:"20px", marginTop:"20px", color:"white",fontFamily:"sans-serif"}}>
                            <i aria-hidden="true"/>
                            <FontAwesomeIcon icon={faMoneyBill}/> Reimbursement
                        </a>
                    </li>

                </ul>
            </div>
            <DashboardHomeHc/>

        </div>
    )
}