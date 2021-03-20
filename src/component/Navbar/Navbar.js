import React, { useState } from 'react'

import {
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMoneyCheck, faMoneyCheckAlt, faSearch, faSortAmountDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'

function Navbar() {

    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)

    return (
        <div className="row mt-3 bg-light pb-3 pt-3">
            <div className="col-md-6">
                <Link to={`/hc/dashboard`}
                    className={window.location.pathname.match("/hc/dashboard")
                        ? "btn btn-enigma mr-2 zoom"
                        : "btn btn-outline-enigma mr-2 zoom"}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to={`/hc/employee`}
                    className={window.location.pathname.match("/hc/employee")
                        ? "btn btn-enigma mr-2 zoom"
                        : "btn btn-outline-enigma mr-2 zoom"}>
                    <FontAwesomeIcon icon={faUser} /> Employee
                </Link>
                <Link to={`/hc/grade`}
                    className={window.location.pathname.match("/hc/grade")
                        ? "btn btn-enigma mr-2 zoom"
                        : "btn btn-outline-enigma mr-2 zoom"}>
                    Grade
                </Link>
                <Link to={`/hc/reimburse`}
                    className={window.location.pathname.match("/hc/reimburse")
                        ? "btn btn-enigma mr-2 zoom"
                        : "btn btn-outline-enigma mr-2 zoom"}>
                    <FontAwesomeIcon icon={faMoneyCheck} /> Reimbursement
                </Link>
            </div>
            <div className="offset-md-3 col-md-3">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="float-right">
                    <DropdownToggle color="outline-enigma" caret className="zoom">
                        <FontAwesomeIcon icon={faUserCircle} /> Account
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to={`/hc/info`} style={{ width: 100 }} className="btn btn-outline-enigma">Info</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`/logout`} style={{ width: 100 }} className="btn btn-outline-enigma">Logout</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        </div>
    )
}

export default Navbar