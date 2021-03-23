import Header from "../../../dashboard/dashboardHc/Header";
import Menu from "../../../dashboard/dashboardHc/Menu";
import Footer from "../../../dashboard/dashboardHc/Footer";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {findAll} from "../../../actions/detailContractAction";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";



function DetailContract({findAll, contracts, error, isLoading}) {

    useEffect( () => {
        findAll()
    }, [])

    return(
        <div>
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <h1 style={{color:"black", marginTop:"10px", textAlign:"center"}}> DETAIL KONTRAK</h1>
                <div className="content-header">
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
                                        <table className="table table-head-fixed text-nowrap">
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
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>Action</th>

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
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.employeeId.fullname}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.employeeId.nip}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.benefitRegistrationStatus}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.dateOfAcceptancePermanentEmployee}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.typeContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.dateOfResignation}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}> {element.startDateContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.endDateContract}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>{element.placement}</td>
                                                            <td style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>
                                                                <Link to={'/contract/'+ element.id }>
                                                                    <Button style={{backgroundColor: "#292961"}}>
                                                                        <FontAwesomeIcon icon={faEdit} className="float-left"/>
                                                                    </Button>
                                                                </Link>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
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