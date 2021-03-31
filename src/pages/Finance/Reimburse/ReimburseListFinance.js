import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {findAllReimburseFinance, findByCategory} from '../../../actions/reimburseFinanceAction';
import {findAllCategory} from '../../../actions/categoryAction';


/* Just for UI */
import ReimburseRowFinance from './ReimburseRowFinance';
import MenuFinance from "../../../dashboard/dashboardFinance/MenuFinance";
import {Button, Col, Container, InputGroup, InputGroupAddon, Row, Table} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFastBackward,
    faFastForward,
    faSortAmountDown,
    faStepBackward,
    faStepForward
} from '@fortawesome/free-solid-svg-icons';
import Header from "../../../dashboard/Header";
import Footer from "../../../dashboard/Footer";
import {FormControl} from "react-bootstrap";

/* Just for UI */


function ReimburseListFinance({
                                  reimbursements, findAllReimburseFinance,
                                  categories, findAllCategory,
                                  findByCategory, rCategory,
                              }) {

    const [search, setSearch] = useState()
    const [status, setStatus] = useState()
    const [c, setC] = useState()
    const [rSearch, setRSearch] = useState()
    const [rStatus, setRStatus] = useState()

    useEffect(() => {
        if (search) {
            setRSearch(reimbursements.data?.list?.filter(r => r.employeeId.fullname == search))
        }
    }, [search])

    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 10;
    let total = reimbursements?.data?.total
    const  totalPages = Math.ceil(total/itemPerPage);
    const  pageNumCss = {
        width: "45px",
        border: "1px solid #292961",
        color: "#292961",
        textAlign: "center",
        fontWeight:"bold"
    }

    const onReload = () => {
        findAllReimburseFinance(currentPage)
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


    useEffect(() => {
        if (status) {
            switch (status) {
                case "selesai":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusSuccess == true))
                    break;
                case "proses":
                    setRStatus(reimbursements.data?.list?.filter(r => r.statusSuccess == false))
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
        setC(value)
        // findByCategory(value)
    }

    useEffect(() => {
        findAllReimburseFinance(currentPage)
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

                    <div className="float-right" style={{marginRight: "2vh"}}>
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
                                    <div className="card" style={{height: "60vh"}}>
                                        <div className="card-header">
                                            <h3 className="card-title">

                                            </h3>

                                            <div className="card-tools">
                                                <div className="input-group input-group-sm" style={{width: "150px"}}>
                                                    <input type="text" name="table_search"
                                                           className="form-control float-right" placeholder="Cari.."
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
                                                                reimbursements.data?.list?.map((element, index) => {
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
                <div>
                    {  search == null && status == null && c == null ?
                        total > 10 ?
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="float-left text-dark" style={{fontFamily:"verdana"}}>
                                           Menampilkan halaman {currentPage} dari {totalPages}
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
                            </Container> : null : null
                    }
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
