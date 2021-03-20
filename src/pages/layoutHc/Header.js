import React from "react";
import ResetPassword from "../resetPassword";

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{backgroundColor:"#292961"}}>
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button" >
                        <i className="fas fa-bars" style={{backgroundColor:"white", fontSize:"20px"}}/>
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/dasboard/hc" className="nav-link" style={{color:"white", fontFamily:"roboto"}}>
                        <i className="fa fa-home" style={{fontSize:"20px"}}/>
                    </a>
                </li>

            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-user-circle"  style={{color:"white", fontSize:"27px"}}/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider" />
                        {/*<a href="/hc/resetpassword" className="dropdown-item">*/}
                        {/*  Reset Password*/}
                        {/*</a>*/}
                        <ResetPassword/>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                           Logout
                        </a>
                    </div>
                </li>

            </ul>
        </nav>
    );
}
