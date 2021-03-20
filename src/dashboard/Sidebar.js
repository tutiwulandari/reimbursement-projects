import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";
import {faMoneyCheck} from "@fortawesome/free-solid-svg-icons/faMoneyCheck";
import React, {useState} from "react";
import {faSignOutAlt,faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {ButtonDropdown,DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


function Sidebar() {

    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)

    return (
        <div>
            <nav className="nav__cont">
                <ul className="nav" >
                    <li className="nav__items " style={{marginTop:"80px", fontSize:"12px"}}>
                        <FontAwesomeIcon icon={faHome} style={{marginLeft:"30px", fontSize:"30px"}}/>
                        <a href="/dashboard/hc" style={{marginLeft:"55px"}}>Home</a>
                    </li>

                    <li className="nav__items ">
                        <li className="nav__items " style={{fontSize:"12px"}}>
                            <FontAwesomeIcon icon={faUserAlt} style={{marginLeft:"30px", fontSize:"30px"}}/>
                            <a href="/employee" style={{marginLeft:"55px"}}>Employee</a>
                        </li>
                    </li>

                    <li className="nav__items ">
                        <li className="nav__items " style={{fontSize:"11px"}}>
                            <FontAwesomeIcon icon={faMoneyCheck} style={{marginLeft:"30px", fontSize:"30px"}}/>
                            <a href="/hc/reimburse" style={{marginLeft:"50px"}}>Reimbursement</a>
                        </li>
                    </li>
                </ul>
            </nav>
            <div className="float-right">
                <div className="offset-md-3 col-md-3" style={{marginTop:"-5px",minWidth: "7.8rem", marginRight:"50px"}}>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="float-right">
                        <DropdownToggle color="outline-enigma" caret className="zoom">
                            <FontAwesomeIcon icon={faUserCircle} /> Account
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/hc/info" style={{ width: 100 }} className="btn btn-outline-enigma" >
                                Info
                            </DropdownItem>
                            <DropdownItem href="'/logout" style={{ width: 100 }} className="btn btn-outline-enigma">
                                <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>
        </div>
    )
}

export default Sidebar