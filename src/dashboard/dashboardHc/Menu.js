import React from "react";
import Image1 from "../../assets/image/undraw_female_avatar_w3jk.svg"

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-light-gray-dark elevation-4" style={{backgroundColor:"white"}}>
            <a href="index3.html" className="brand-link" style={{padding:"20px"}}>
                <img
                    src={Image1}
                    alt="enigmacamp"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight" style={{color:"black", fontFamily:"roboto"}}>Super Admin</span>
            </a>


            <div className="sidebar" style={{marginTop:"40px"}}>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview" >
                            <a href="/dashboard/hc" className="nav-link active" style={{backgroundColor:"#292961"}}>
                                <i className="nav-icon fas fa-tachometer-alt" style={{fontSize:"20px", backgroundColor:"black"}} />
                                <p style={{color:"white", fontSize:"20px", fontFamily:"roboto"}}>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="/dashboard/hc/reimburse" className="nav-link">
                                <i className="nav-icon fas fa-list" style={{fontSize:"20px"}} />
                                <p style={{color:"black", fontSize:"20px",fontFamily:"roboto"}}>Reimbursement</p>
                            </a>
                        </li>
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-user-alt" style={{fontSize:"20px"}}/>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"roboto"}}>Karyawan
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="/dashboard/hc/employee" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p style={{fontFamily:"roboto", fontSize:"16px"}}>List Karyawan</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/dashboard/hc/contract" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p style={{fontFamily:"roboto", fontSize:"16px"}}>Detail Kontrak</p>
                                </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}