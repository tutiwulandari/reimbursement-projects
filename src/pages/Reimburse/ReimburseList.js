import Container from './../../component/Container/Container';
import ReimburseRow from './ReimburseRow';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { findAllReimburse, findByCategory } from "../../actions/reimburseAction";
import { findAllCategory } from './../../actions/categoryAction';


function ReimburseList({
    reimbursements, findAllReimburse,
    findByCategory, categories, findAllCategory, rCategory,
    isLoading
}) {

    console.log("loading",isLoading);

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
            <div className="row mt-5">
                <div className="col-md-3">
                    <select className="custom-select" onChange={handleChangeCategory}>
                        <option value="">Filter by Category</option>
                        {
                            categories.data?.data?.map((category, index) => {
                                return (
                                    <option value={category.id}>{category.categoryName}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-md-3">
                    <select className="custom-select">
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
                            {
                                isLoading ? "Loading" :
                                rCategory.length == 0 ?
                                    reimbursements.data?.data?.list?.map((element, index) => {
                                        return (
                                            <ReimburseRow index={index} data={element} />
                                        )
                                    }) : rCategory?.data?.length == 0 ?  "Data is empty" :
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
