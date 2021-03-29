import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {findAllReimburseFinance, findByCategory} from '../../../actions/reimburseFinanceAction';
import {findAllCategory} from '../../../actions/categoryAction';


/* Just for UI */
import ReimburseRowFinance from './ReimburseRowFinance';
import MenuFinance from "../../../dashboard/dashboardFinance/MenuFinance";
import {Table} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDown} from '@fortawesome/free-solid-svg-icons';
import Header from "../../../dashboard/Header";
import Footer from "../../../dashboard/Footer";

/* Just for UI */


function ReimburseListFinance({
                                  reimbursements, findAllReimburseFinance,
                                  categories, findAllCategory,
                                  findByCategory, rCategory,
                              }) {

    const [search, setSearch] = useState()
    const [status, setStatus] = useState()
    const [rSearch, setRSearch] = useState()
    const [rStatus, setRStatus] = useState()

    useEffect(() => {
        if (search) {
            setRSearch(reimbursements.data?.filter(r => r.employeeId.fullname == search))
        }
    }, [search])

    useEffect(() => {
        if (status) {
            switch (status) {
                case "selesai":
                    setRStatus(reimbursements.data?.filter(r => r.statusSuccess == true))
                    break;
                case "proses":
                    setRStatus(reimbursements.data?.filter(r => r.statusSuccess == false))
                    break;
                default:
                    setRStatus(null)
                    break;
            }
        }
    }, [status])

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleChangeCategory = (e) => {
        let value = e.target.value
        findByCategory(value)
    }

    useEffect(() => {
        findAllReimburseFinance()
        findAllCategory()
    }, [])


    return (
        <div>
            <Header/>
            <MenuFinance/>
            <div className="content-wrapper">
                <div className="content-header">
                    <h1 style={{color: "black", textAlign: "center"}}> DAFTAR KLAIM REIMBURSEMENT</h1>

                    <select className="custom-select rounded-pill text-enigma border-enigma"
                            onChange={handleChangeCategory} style={{width: "30vh", marginLeft: "5vh"}}>
                        <option value="" selected disabled hidden>Kategori</option>
                        {
                            categories.data?.map((category, index) => {
                                return (
                                    <option value={category.id}>{category.categoryName}</option>
                                )
                            })
                        }
                    </select>

                    <div className="float-right" style={{marginRight: "5vh"}}>
                        <select className="custom-select rounded-pill text-enigma border-enigma"
                                onChange={handleChangeStatus}>
                            <option value="all" selected disabled hidden>Status</option>
                            <option value="proses">Proses</option>
                            <option value="selesai">Selesai</option>
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
                                                           className="form-control float-right" placeholder="Search"
                                                           onChange={handleSearch}/>

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
                                                    <th>Kategori</th>
                                                    <th>Karyawan</th>
                                                    <th>Status</th>
                                                    <th>Detail</th>
                                                    <th>Unggah</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    rSearch && rSearch != "" ?
                                                        rSearch?.map((element, index) => {
                                                            return (
                                                                <ReimburseRowFinance index={index} element={element}/>
                                                            )
                                                        }) :
                                                        rStatus ?
                                                            rStatus?.map((element, index) => {
                                                                return (
                                                                    <ReimburseRowFinance index={index}
                                                                                         element={element}/>
                                                                )
                                                            }) :
                                                            rCategory.length == 0 ?
                                                                reimbursements.data?.map((element, index) => {
                                                                    return (
                                                                        <ReimburseRowFinance index={index}
                                                                                             element={element}/>
                                                                    )
                                                                }) : rCategory?.length == 0 ? "Data is empty" :
                                                                rCategory.map((value, key) => {
                                                                    return (
                                                                        <ReimburseRowFinance index={key}
                                                                                             element={value}/>
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
        categories: state.findAllCategory.data || [],
        rCategory: state.findReimburseFinanceByCategory.data || [],
    }
}

/* Action */
const mapDispatchToProps = {findAllReimburseFinance, findAllCategory, findByCategory}

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseListFinance);
