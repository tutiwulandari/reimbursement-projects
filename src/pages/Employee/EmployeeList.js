import {findAll} from "../../actions/employeeAction";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Button, Col, Row} from "@themesberg/react-bootstrap";
import {faEdit, faInfo} from "@fortawesome/free-solid-svg-icons";
import Container from "../../component/Container/Container"
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from "react-bootstrap-table-next";


const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];
const {SearchBar} = Search
const EmployeeList = ({findAll, employees, error}) => {

    useEffect(() => {
        findAll()
    }, []);
    console.log("LIST", employees)

    const columns = [
        {
            dataField: "fullname",
            text: "Full Name",
            sort: true,
            headerStyle: () => {
                return {textAlign: "center", width:"150px"};
            },
        },
        {
            dataField: "gender",
            text: "Gender",
            sort: true,
            headerStyle: () => {
                return {textAlign: "center"};
            },
        },
        {
            dataField: "nik",
            text: "NIK",
            sort: true,
            headerStyle: () => {
                return {textAlign: "center"};
            },
        },
        {
            dataField: "link",
            text: "Action",
            headerStyle: () => {
                return {textAlign: "center"};
            },
            formatter: (rowContent, row) => {
                return (
                    <div style={{textAlign: "center"}}>
                        <Link to={"/employee/" + row.id +"/details"}>
                            <Button color="danger" className="mt-2">
                                <FontAwesomeIcon icon={faInfo}/>
                                 Details
                            </Button>{" "}
                            {"     "}
                        </Link>
                        <Link to={"/employee/" + row.id + "/edit"}>
                            <Button color="warning" className="mt-2">
                                <FontAwesomeIcon icon={faEdit}/>
                                Edit
                            </Button>
                        </Link>
                    </div>
                )
            }
        }
    ];

    return (
        <Container>
            <div>
                <h1 style={{textAlign: "center"}}><br/>Employee List</h1>
            </div>

            {
                employees.data?.data?.list.length > 0 ?
                    <ToolkitProvider
                        bootstrap4
                        keyField="id"
                        data={employees.data?.data?.list}
                        columns={columns}
                        defaultSorted={defaultSorted}
                        search
                    >
                        {(employees) => (
                            <div>
                                <Row>
                                    {/*<Col>*/}
                                    {/*    <Link to="#">*/}
                                    {/*        <Button color="dark" className="mr-2">*/}
                                    {/*            <FontAwesomeIcon icon={faUserPlus}/>*/}
                                    {/*            {'     '}Create*/}
                                    {/*        </Button>*/}
                                    {/*        <br/><br/>*/}
                                    {/*    </Link>*/}
                                    {/*</Col>*/}
                                    <Col>
                                        <div className="float-right">
                                            <SearchBar {...employees.searchProps} placeholder="Search.."/>
                                        </div>
                                        <br/><br/>
                                    </Col>
                                </Row>
                                <BootstrapTable {...employees.baseProps} rowStyle={{textAlign: "center"}} hover
                                                condensed/>
                            </div>
                        )}
                    </ToolkitProvider>
                    : null


            }


        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || [],
        error: state.findAllEmployee.error

    }
}
const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);