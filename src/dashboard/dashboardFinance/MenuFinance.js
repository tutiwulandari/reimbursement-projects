import React from "react";
import Image1 from "../../assets/image/undraw_female_avatar_w3jk.svg"

export default function MenuFinance() {
    return (
        <aside className="main-sidebar sidebar-light-gray-dark elevation-4" style={{backgroundColor:"white"}}>
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img
                    src={Image1}
                    alt="enigmacamp"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight" style={{color:"black", fontFamily:"roboto"}}>Admin Finance</span>
            </a>


            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeiew" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview" >
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" style={{fontSize:"20px", backgroundColor:"white"}} />
                                <p style={{color:"black", fontSize:"20px", fontFamily:"roboto"}}>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="/hc/reimbursement" className="nav-link">
                                <i className="nav-icon fas fa-list" style={{fontSize:"20px"}} />
                                <p style={{color:"black", fontSize:"20px",fontFamily:"roboto"}}>Reimbursement</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
}