import Container from './../../component/Container/Container';
import ReimburseRow from './ReimburseRow';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom'


import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { findAllReimburse, findByCategory } from "../../actions/reimburseAction";
import { findAllCategory } from './../../actions/categoryAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMoneyCheck, faMoneyCheckAlt, faSearch, faSortAmountDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function ReimburseList({
    reimbursements, findAllReimburse,
    categories, findAllCategory,
    findByCategory, rCategory,
    isLoading
}) {

    console.log("loading", isLoading);

    const handleChangeCategory = (e) => {
        let value = e.target.value
        findByCategory(value)
    }

    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)

    useEffect(() => {
        findAllReimburse()
        findAllCategory()
    }, [])



    return (
        <div className="container">
            <div className="row mt-3 bg-light pb-3">
                <div className="col-md-6">
                    <Link to={`/hc/dashboard`} className="btn btn-outline-dark mr-2 zoom">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link to={`/hc/employee`} className="btn btn-outline-dark mr-2 zoom">
                        <FontAwesomeIcon icon={faUser} /> Employee
                    </Link>
                    <Link to={`/hc/reimburse`} className={window.location.pathname == "/hc/reimburse" ? "btn btn-dark mr-2 zoom" : "btn btn-outline-dark mr-2 zoom"}>
                        <FontAwesomeIcon icon={faMoneyCheck} /> Reimbursement
                    </Link>
                </div>
                <div className="offset-md-3 col-md-3">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="float-right">
                        <DropdownToggle color="outline-dark" caret className="zoom">
                            <FontAwesomeIcon icon={faUserCircle} /> Account
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to={`/hc/info`} style={{ width: 100 }} className="btn btn-outline-primary">Info</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to={`/logout`} style={{ width: 100 }} className="btn btn-outline-danger">Logout</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-2">
                    <select className="custom-select rounded-pill" onChange={handleChangeCategory}>
                        <option value="">Category</option>
                        {
                            categories.data?.data?.map((category, index) => {
                                return (
                                    <option value={category.id}>{category.categoryName}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="custom-select rounded-pill">
                        <option>Status</option>
                        <option>Waiting</option>
                        <option>Accepted</option>
                        <option>Success</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="offset-md-5 col-md-3">
                    <input className="form-control rounded-pill search-input" type="text" placeholder="Search employee.."/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="card">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th><FontAwesomeIcon icon={faSortAmountDown} /></th>
                                    <th>Category</th>
                                    <th>Employee</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isLoading ? "Loading" :
                                        rCategory.length == 0 ?
                                            reimbursements.data?.data?.list?.map((element, index) => {
                                                return (
                                                    <ReimburseRow index={index} data={element} />
                                                )
                                            }) : rCategory?.data?.length == 0 ? "Data is empty" :
                                                rCategory.data?.map((value, key) => {
                                                    return (
                                                        <ReimburseRow index={key} data={value} />
                                                    )
                                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* Reducer */
const mapStateToProps = (state) => {
    return {
        reimbursements: state.findAllReimburse.data || [],
        rCategory: state.findReimburseByCategory.data || [],
        isLoading: state.findAllReimburse.isLoading,
        categories: state.findAllCategory.data || []
    }
}

/* Action */
const mapDispatchToProps = { findAllReimburse, findByCategory, findAllCategory }

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseList);
