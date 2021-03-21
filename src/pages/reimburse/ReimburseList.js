import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { findAllReimburse, findByCategory } from "../../actions/reimburseAction";
import { findAllCategory } from '../../actions/categoryAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import ReimburseRow from './ReimburseRow';
import "../../assets/css/Reimburse.css"
import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";


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
        <div>
            {/*<Menu/>*/}
            {/*<Header/>*/}
            <div className="container" style={{marginLeft:"40vh"}}>
                <div className="row mt-5">
                    <div className="col-md-2">
                        <select className="custom-select rounded-pill text-enigma border-enigma" onChange={handleChangeCategory}>
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
                        <select className="custom-select rounded-pill text-enigma border-enigma">
                            <option>Status</option>
                            <option>Waiting</option>
                            <option>Accepted</option>
                            <option>Success</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                    <div className="offset-md-5 col-md-3">
                        <input className="form-control rounded-pill search-input text-enigma border-enigma" type="text" placeholder="Search employee.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="card">
                            <table className="table table-hover">
                                <thead className="bg-enigma">
                                <tr>
                                    <th><FontAwesomeIcon icon={faSortAmountDown} /></th>
                                    <th>Category</th>
                                    <th>Employee</th>
                                    <th>Status</th>
                                    <th>Detail</th>
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
            {/*<Footer/>*/}
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
