import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { findAllReimburse, findByCategory } from "../../actions/reimburseAction";
import { findAllCategory } from '../../actions/categoryAction';


/* Just for UI */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import ReimburseRow from './ReimburseRow';
import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";
import { Table } from "reactstrap";
/* Just for UI */


function ReimburseList({
    reimbursements, findAllReimburse,
    categories, findAllCategory,
    findByCategory, rCategory,
    isLoading
}) {

    const [search, setSearch] = useState()
    const [status, setStatus] = useState()
    const [rSearch, setRSearch] = useState()
    const [rStatus, setRStatus] = useState()

    useEffect(() => {
        if (search) {
            setRSearch(reimbursements.data?.list?.filter(r => r.employeeId.fullname == search))
        }
    }, [search])

    useEffect(() => {
        if (status) {
            switch (status) {
                case "menunggu":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusOnHc == false))
                    break;
                case "disetujui":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusOnHc == true && r.statusSuccess == false))
                    break;
                case "selesai":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusSuccess == true))
                    break;
                case "ditolak":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusReject == true))
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
        findAllReimburse()
        findAllCategory()
    }, [])

    return (
        <div>

            <Header />
            <Menu />

            <div className="content-wrapper">
                <h1 style={{ color: "black", textAlign: "center" }}> Daftar Klaim</h1>
                <select className="custom-select rounded-pill text-enigma border-enigma"
                    onChange={handleChangeCategory} style={{ width: "30vh", marginLeft: "5vh" }}>
                    <option>Kategori</option>
                    {
                        categories.data?.map((category, index) => {
                            return (
                                <option value={category.id}>{category.categoryName}</option>
                            )
                        })
                    }
                </select>

                <div className="float-right" style={{ marginRight: "5vh" }}>
                    <select className="custom-select rounded-pill text-enigma border-enigma"
                        onChange={handleChangeStatus}>
                        <option value="all">Status</option>
                        <option value="menunggu">Menunggu</option>
                        <option value="disetujui">Disetujui</option>
                        <option value="selesai">Selesai</option>
                        <option value="ditolak">Ditolak</option>
                    </select>
                </div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card" style={{ height: "70vh" }}>
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{ width: "150px" }}>
                                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search"
                                                    onChange={handleSearch} />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search">
                                                        </i>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-body table-responsive p-0" style={{ height: "300px" }}>
                                        <Table className="table table-head-fixed text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th><FontAwesomeIcon icon={faSortAmountDown} /></th>
                                                    <th>Kategori</th>
                                                    <th>Karyawan</th>
                                                    <th>Status</th>
                                                    <th>Detail</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    rSearch && rSearch != "" ?
                                                        rSearch?.map((element, index) => {
                                                            return (
                                                                <ReimburseRow index={index} data={element} />
                                                            )
                                                        }) :
                                                        rStatus ?
                                                            rStatus?.map((element, index) => {
                                                                return (
                                                                    <ReimburseRow index={index} data={element} />
                                                                )
                                                            }) :
                                                            rCategory.length == 0 ?
                                                                reimbursements.data?.list?.map((element, index) => {
                                                                    return (
                                                                        <ReimburseRow index={index} data={element} />
                                                                    )
                                                                }) : rCategory?.length == 0 ? "Data is empty" :
                                                                    rCategory.map((value, key) => {
                                                                        return (
                                                                            <ReimburseRow index={key} data={value} />
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
            <Footer />
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
