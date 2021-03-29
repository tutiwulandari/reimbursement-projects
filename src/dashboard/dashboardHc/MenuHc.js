import React from "react";
import Image1 from "../../assets/image/undraw_female_avatar_w3jk.svg"
import {Link} from "react-router-dom";

export default function MenuHc() {
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
                            <Link to="/dashboard/hc" className="nav-link active" style={{backgroundColor:"#292961"}}>
                                <i className="nav-icon fas fa-home" style={{fontSize:"20px"}} />
                                <p style={{color:"white", fontSize:"20px", fontFamily:"roboto"}}>Beranda</p>
                            </Link>
                        </li>
                        <li className="nav-item has-treeview">
                            <Link to="/dashboard/hc/reimburse" className="nav-link">
                                <i className="nav-icon fas fa-list" style={{fontSize:"20px"}} />
                                <p style={{color:"black", fontSize:"20px",fontFamily:"roboto"}}>Reimbursement</p>
                            </Link>
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
                                <Link to="/dashboard/hc/employee" className="nav-link">
                                    <i className="far fa-bar-chart nav-icon" />
                                    <p style={{fontFamily:"roboto", fontSize:"18px"}}> Daftar Karyawan</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/hc/contract" className="nav-link">
                                    <i className="far fa-list-alt nav-icon"  />
                                    <p style={{fontFamily:"roboto", fontSize:"18px"}}>Detail Kontrak</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/hc/grade" className="nav-link">
                                    <i className="far fa-list-alt nav-icon" />
                                    <p style={{fontFamily:"roboto", fontSize:"18px"}}>Grade</p>
                                </Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}