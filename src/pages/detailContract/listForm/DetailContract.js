import Header from "../../../dashboard/dashboardHc/Header";
import Menu from "../../../dashboard/dashboardHc/Menu";
import Footer from "../../../dashboard/dashboardHc/Footer";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {findAll} from "../../../actions/detailContractAction";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Table} from "reactstrap";


function DetailContract({findAll, contracts, error, isLoading}) {

    useEffect( () => {
        findAll()
    }, [])

    return(
        <div>
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <div className="content-header">
                    <h1 style={{color:"black", textAlign:"center", marginBottom:"5vh"}}> DETAIL KONTRAK</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width:"150px"}}>
                                                <input type="text" name="table_search" className="form-control float-right"
                                                       placeholder="Search"/>

                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search">

                                                        </i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0" style={{height:"300px"}}>
                                        <Table className="table table-head-fixed text-nowrap">
                                            <thead>
                                            <tr>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Nama Lengkap</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>NIP</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Status Asuransi</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Tanggal Karyawan Tetap</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Tipe Kontrak</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Tanggal Resign</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Tanggal Mulai Kontrak</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Tanggal Habis Kontrak</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Penempatan</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Habis Kontrak</th>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}> Edit</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                console.log("DATA CONTRACT", contracts?.data)
                                            }
                                            {
                                                contracts?.data.map((element, index) => {
                                                    return (
                                                        <tr style={{textAlign: "center"}} >
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.employeeId === null ? "belum ada data" : element.employeeId.fullname}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.employeeId === null ? "belum ada data" : element.employeeId.nip}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.benefitRegistrationStatus === null ? "belum ada data" : element.benefitRegistrationStatus}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.dateOfAcceptancePermanentEmployee === null ? "belum ada data" : element.dateOfAcceptancePermanentEmployee}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.typeContract === null ? "belum ada data" : element.typeContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.dateOfResignation === null ? "belum ada data" : element.dateOfResignation}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.startDateContract === null ? "belum ada data" : element.startDateContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.endDateContract === null ? "belum ada data" : element.startDateContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.placement === null ? "belum ada data" : element.placement}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                {element.endedContract === true ? "Ya" : "Tidak"}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                <Link to={'/contract/'+ element.id }>
                                                                    <button className="btn btn-outline-enigma">
                                                                        <FontAwesomeIcon icon={faEdit} className="float-left"/>
                                                                    </button>
                                                                </Link>

                                                            </td>
                                                        </tr>
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

const mapStateToProps = (state) => {
    return {
        contracts: state.findAllContract.data || null,
        error: state.findAllContract.error,
        isLoading: state.findAllContract.isLoading

    }
}

const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(DetailContract)