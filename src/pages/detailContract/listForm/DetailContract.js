import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {findAll} from "../../../actions/detailContractAction";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faFastBackward, faFastForward, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Button, Col, Container, InputGroup, InputGroupAddon, Row, Table} from "reactstrap";
import Header from "../../../dashboard/Header";
import MenuHc from "../../../dashboard/dashboardHc/MenuHc";
import Footer from "../../../dashboard/Footer";
import {FormControl} from "react-bootstrap";


function DetailContract({findAll, contracts, error, isLoading}) {

    useEffect( () => {
        findAll()
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 10;
    const total = contracts?.data.total
    const  totalPages = Math.ceil(total/itemPerPage);
    const  pageNumCss = {
        width: "45px",
        border: "1px solid #292961",
        color: "#292961",
        textAlign: "center",
        fontWeight:"bold"
    }

    const onReload = () => {
        findAll(currentPage)
    }

    useEffect( () => {
        if(currentPage) {
            onReload()
        }
    }, [currentPage])

    const changePage = event => {
        let targetPage = parseInt(event.target.value)
        event.target.name = targetPage;
    }

    const firstPage = () => {
        let firstPage = 1;
        if (currentPage > firstPage) {
            setCurrentPage(firstPage)
            onReload()
        }
    }

    const prevPage = () => {
        let prevPage = 1;
        if (currentPage > 1) {
            setCurrentPage(currentPage - prevPage)
            onReload()
        }
    }

    const lastPage = () => {
        let condition = Math.ceil(total /itemPerPage);
        if (currentPage < condition) {
            setCurrentPage(condition)
            onReload()
        }
    }

    const nextPage = () => {
        let condition = Math.ceil(total /itemPerPage);
        if (currentPage < condition) {
            setCurrentPage(currentPage + 1)
            onReload()
        }
    }
    console.log("total", total)
    console.log("contracts", contracts)

    return(
        <div>
            <Header/>
            <MenuHc/>
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
                                            <tr style={{fontFamily:"verdana"}}>
                                                <th style={{verticalAlign: "middle", textAlign: "center", maxWidth: "250px", minWidth: "250px"}}>#</th>
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
                                            <tbody style={{fontFamily:"verdana"}}>
                                            {
                                                console.log("DATA CONTRACT", contracts?.data?.list)
                                            }
                                            {
                                                contracts?.data?.list?.map((element, index) => {
                                                    return (
                                                        <tr style={{textAlign: "center"}} >
                                                            <td style={{textAlign: "center"}}>
                                                                {element.employeeId === null ? "belum ada data" : (currentPage-1)*10+index+1}</td>
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
                <div>
                    { total > 10 ?

                        <Container>
                            <Row>
                                <Col>
                                    <div className="float-left text-dark">
                                        Showing Page of {currentPage} of {totalPages}
                                    </div>
                                    <div className="float-right" >
                                        <InputGroup size="md">
                                            <InputGroupAddon addonType="prepend">
                                                <Button onClick={firstPage} type="button" style={{backgroundColor:"#292961", color:"white"}} disabled={currentPage === 1 ? true : false}>
                                                    <FontAwesomeIcon icon={faFastBackward} />
                                                    {' '}First
                                                </Button>
                                                <Button onClick={prevPage} type="button" style={{backgroundColor:"#292961", color:"white"}}  disabled={currentPage === 1 ? true : false}>
                                                    <FontAwesomeIcon icon={faStepBackward} />
                                                    {' '}Previous
                                                </Button>
                                            </InputGroupAddon>
                                            <FormControl onChange={changePage} style={pageNumCss} name="currentPage" value={currentPage} />
                                            <InputGroupAddon addonType="append">
                                                <Button onClick={nextPage} type="button"  style={{backgroundColor:"#292961", color:"white"}} disabled={currentPage === totalPages ? true : false}>
                                                    <FontAwesomeIcon icon={faStepForward} />
                                                    {' '}  Next
                                                </Button>
                                                <Button onClick={lastPage} type="button" style={{backgroundColor:"#292961", color:"white"}}  disabled={currentPage === totalPages ? true : false}>
                                                    <FontAwesomeIcon icon={faFastForward} />
                                                    {' '}Last
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                </Col>

                            </Row>
                        </Container> : null
                    }
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
        isLoading: state.findAllContract.isLoading,
        // total: state.findAllContract.total

    }
}

const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(DetailContract)
