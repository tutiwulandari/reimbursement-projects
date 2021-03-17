import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { findAll } from "../../actions/reimburseAction";
import Container from './../../component/Container/Container';
import ReimburseRow from './ReimburseRow';

import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

function ReimburseList({ reimbursements, findAll, isLoading }) {

    useEffect(() => {
        findAll()
    }, []);

    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)

    console.log(reimbursements);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <select className="custom-select" id="exampleFormControlSelect1">
                        <option>Filter by Category</option>
                        <option>Glasses</option>
                        <option>Training</option>
                        <option>Give Birth</option>
                        <option>Official Travel</option>
                        <option>Insurence</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select className="custom-select" id="exampleFormControlSelect1">
                        <option>Filter by Status</option>
                        <option>Waiting</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="offset-md-3 col-md-3">
                    <input className="form-control" type="text" placeholder="Search by employee name" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Employee</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {reimbursements.data?.data?.list?.map((element, index) => {
                                return (
                                    <ReimburseRow index={index} data={element} />
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reimbursements: state.findAllReimburse.data || [],
        isLoading: state.findAllReimburse.isLoading
    }
}
const mapDispatchToProps = { findAll }
export default connect(mapStateToProps, mapDispatchToProps)(ReimburseList);
