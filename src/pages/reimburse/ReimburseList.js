import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {findAllReimburse, findByCategory} from "../../actions/reimburseAction";
import {findAllCategory} from './../../actions/categoryAction';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDown} from '@fortawesome/free-solid-svg-icons';
import ReimburseRow from './ReimburseRow';
import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";
import {Table} from "reactstrap";


function ReimburseList({
                           reimbursements, findAllReimburse,
                           categories, findAllCategory,
                           findByCategory, rCategory,
                           isLoading
                       }) {

    const handleChangeCategory = (e) => {
        let value = e.target.value
        findByCategory(value)
    }

    useEffect(() => {
        findAllReimburse()
        findAllCategory()
    }, [])

    return (
        <div>

            <Header/>
            <Menu/>

            <div className="content-wrapper">
                <h1 style={{color: "black", marginTop: "20px", textAlign: "center"}}> LIST CLAIM REIMBURSEMENT</h1>
                <select className="custom-select rounded-pill text-enigma border-enigma"
                        onChange={handleChangeCategory} style={{width: "30vh", marginLeft: "5vh"}}>
                    <option value="">Category</option>
                    {
                        categories.data?.map((category, index) => {
                            return (
                                <option value={category.id}>{category.categoryName}</option>
                            )
                        })
                    }
                </select>

                <div className="float-right" style={{marginRight: "5vh"}}>
                    <select className="custom-select rounded-pill text-enigma border-enigma">
                        <option>Status</option>
                        <option>Waiting</option>
                        <option>Accepted</option>
                        <option>Success</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card" style={{height: "70vh"}}>
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width: "150px"}}>
                                                <input type="text" name="table_search"
                                                       className="form-control float-right"
                                                       placeholder="Search"/>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search">
                                                        </i>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                                        <Table className="table table-head-fixed text-nowrap">
                                            <thead>
                                            <tr>
                                                <th><FontAwesomeIcon icon={faSortAmountDown}/></th>
                                                <th>Kategori Klaim</th>
                                                <th>Karyawan</th>
                                                <th>Status</th>
                                                <th>Detail</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                isLoading ? "Loading" :
                                                    rCategory.length == 0 ?
                                                        reimbursements.data?.list?.map((element, index) => {
                                                            return (
                                                                <ReimburseRow index={index} data={element}/>
                                                            )
                                                        }) : rCategory?.length == 0 ? "Data is empty" :
                                                        rCategory.map((value, key) => {
                                                            return (
                                                                <ReimburseRow index={key} data={value}/>
                                                            )
                                                        })
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
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
const mapDispatchToProps = {findAllReimburse, findByCategory, findAllCategory}

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseList);
