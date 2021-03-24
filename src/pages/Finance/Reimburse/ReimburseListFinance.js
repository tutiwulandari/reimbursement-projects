import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Navbar from './../../../component/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { findAllReimburseFinance } from './../../../actions/reimburseFinanceAction';
import ReimburseRowFinance from './ReimburseRowFinance';


function ReimburseListFinance({ reimbursements, findAllReimburseFinance }) {

    useEffect(() => {
        findAllReimburseFinance()
    }, [])

    return (
        <div className="container">
            <Navbar />
            <div className="row mt-5">
                <div className="col-md-2">
                    <select className="custom-select rounded-pill text-enigma border-enigma">
                        <option value="">Category</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="custom-select rounded-pill text-enigma border-enigma">
                        <option>Status</option>
                        <option>Waiting</option>
                        <option>Accepted</option>
                        <option>Success</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="offset-md-5 col-md-3">
                    <input className="form-control rounded-pill search-input text-enigma border-enigma" type="text" placeholder="Search employee.." />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5 mb-5">
                    <div className="card">
                        <table className="table table-hover">
                            <thead className="bg-enigma">
                                <tr>
                                    <th><FontAwesomeIcon icon={faSortAmountDown} /></th>
                                    <th>Category</th>
                                    <th>Employee</th>
                                    <th>Status</th>
                                    <th>Detail</th>
                                    <th>Upload</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reimbursements.data?.map((element, index) => {
                                        return (
                                            <ReimburseRowFinance element={element} index={index}/>
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
        reimbursements: state.findAllReimburseFinance.data || [],
        isLoading: state.findAllReimburseFinance.isLoading,
    }
}

/* Action */
const mapDispatchToProps = { findAllReimburseFinance }

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseListFinance);