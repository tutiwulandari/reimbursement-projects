import {findAll} from "../../actions/employeeAction";
import {connect} from "react-redux";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from "react-bootstrap-table-next";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import React, {useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";


const {SearchBar} = Search
//Mengurutkan berdasarkan id(ada di Sort table with bootstrap 4)
const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

function UnitList({findAll, employees, error, isLoading}) {

    useEffect(() => {
        findAll()
    }, []);


    const columns = [
        {
            dataField: "id",
            text: "ID",
            sort: true,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "fullname",
            text: "Nama Lengkap",
            sort: true,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "gender",
            text: "Jenis Kelamin",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "nik",
            text: "NIK",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "nip",
            text: "NIP",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "emergencyNumber",
            text: "Nomer Darurat",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "employeeType",
            text: "Tipe Karyawan",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                    textAlign: "center",
                    maxWidth: "500x",
                    minWidth: "500x"};
            }
        },
        {
            dataField: "employeeStatus",
            text: "Status Karyawan",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                    textAlign: "center",
                    maxWidth: "500x",
                    minWidth: "500x"};
            }
        },
        {
            dataField: "npwp",
            text: "NPWP",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "grade.id",
            text: "Grade",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "religion",
            text: "Agama",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "bloodType",
            text: "Golongan Darah",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "phoneNumber",
            text: "Nomor Handphone",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "accountNumber",
            text: "Nomor Rekening",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "placeOfBirth",
            text: "Tempat Lahir",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "maritalStatus",
            text: "Status Pernikahan",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "numberOfChild",
            text: "Jumlah Anak",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },
        {
            dataField: "joinDate",
            text: "Tanggal Mulai Bekerja",
            sort: false,
            headerStyle: () => {
                return {verticalAlign: "middle",
                                          textAlign: "center",
                                          maxWidth: "500x",
                                          minWidth: "500x"};
            }
        },


    ]

    return (
        <div>
            <Header/>
            <Menu/>

            <div className="content-wrapper">
                <h1 style={{textAlign: "center"}}><br/>UNIT LIST</h1>
                <div className="content-header">
                    <div className="container-fluid" style={{marginTop: "-3vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <div className="card" style={{height: "70vh"}}>
                                    <div className="card-body table-responsive p-0" style={{height: "500x"}}>
                                        {
                                            console.log("Data", employees?.data)
                                        }
                                        {
                                            !isLoading ? (
                                                <ToolkitProvider
                                                    bootstrap4
                                                    keyField="id"
                                                    data={employees?.data?.data}
                                                    columns={columns}
                                                    search
                                                    defaultSorted={defaultSorted}>
                                                    {
                                                        (employees) => (
                                                            <div>
                                                                <Row>
                                                                    <Col>
                                                                        <div className="float-right">
                                                                            <SearchBar {...employees.searchProps}
                                                                                       placeholder="Search .."/>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <BootstrapTable {...employees.baseProps}
                                                                                rowStyle={{verticalAlign: "middle",
                                                                                    textAlign: "center",
                                                                                    maxWidth: "200px",
                                                                                    minWidth: "200px"}} hover
                                                                                condensed
                                                                    // pagination={paginationFactory()}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                </ToolkitProvider>
                                            ) : (
                                                <div className="text-center">
                                                    {employees.error} ? (
                                                    <h4>{employees.error}</h4>
                                                    ): (
                                                    <Spinner color="dark" animation="grow"/>
                                                </div>
                                            )
                                        }

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
        employees: state.findAllEmployee.data || [],
        error: state.findAllEmployee.error,
        isLoading: state.findAllEmployee.isLoading

    }
}
const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(UnitList);