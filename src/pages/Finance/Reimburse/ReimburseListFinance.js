import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { findAllReimburseFinance } from './../../../actions/reimburseFinanceAction';
import ReimburseRowFinance from './ReimburseRowFinance';
import MenuFinance from "../../../dashboard/dashboardFinance/MenuFinance";
import Header from "../../../dashboard/dashboardHc/Header";
import Footer from "../../../dashboard/dashboardHc/Footer";
import {Table} from "reactstrap";


function ReimburseListFinance({ reimbursements, findAllReimburseFinance }) {

    useEffect(() => {
        findAllReimburseFinance()
    }, [])

    return (
       <div>
           <Header/>
           <MenuFinance/>
           <div className="content-wrapper">
               <h1 style={{color:"black", textAlign:"center"}}> DAFTAR KLAIM REIMBURSEMENT</h1>

                       <select className="custom-select rounded-pill text-enigma border-enigma"
                               style={{width: "30vh", marginLeft: "5vh"}}>
                           <option value="">Category</option>
                       </select>

               <div className="float-right" style={{marginRight: "5vh"}}>
                       <select className="custom-select rounded-pill text-enigma border-enigma">
                           <option>Status</option>
                           <option>Menunggu</option>
                           <option>Disetujui</option>
                           <option>Sukses</option>
                           <option>Ditolak</option>
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
                                               <th><FontAwesomeIcon icon={faSortAmountDown} /></th>
                                               <th>Kategori</th>
                                               <th>Karyawan</th>
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
        reimbursements: state.findAllReimburseFinance.data || [],
        isLoading: state.findAllReimburseFinance.isLoading,
    }
}

/* Action */
const mapDispatchToProps = { findAllReimburseFinance }

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseListFinance);