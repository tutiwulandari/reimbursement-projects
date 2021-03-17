import {useEffect, useState} from "react";
import {Button, Nav, NavItem, NavLink, TabContent, Table, TabPane} from "reactstrap";
import classnames from "classnames";
import {Container} from "react-bootstrap";
import {findAll} from "../../../actions/employeeAction";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function EmployeeList({findAll, employees, error, isLoading}) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    useEffect(() => {
        findAll()
    }, []);


    return (
        <Container style={{marginTop: "70px"}}>
            <h1 style={{textAlign:"center", marginBottom:"40px"}}>Employee List</h1>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({active: activeTab === '1'})}
                             onClick={() => {
                                 toggle('1')
                             }}
                    >Personal Details</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({active: activeTab === '2'})}
                             onClick={() => {
                                 toggle('2')
                             }}>Family</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({active: activeTab === '3'})}
                             onClick={() => {
                                 toggle('3')
                             }}>Account</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({active: activeTab === '4'})}
                             onClick={() => {
                                 toggle('4')
                             }}>Work</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={classnames({active: activeTab === '5'})}
                             onClick={() => {
                                 toggle('5')
                             }}>Address</NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <hr/>
                <TabPane tabId="1">
                    <Table striped bordered hover style={{marginTop: "15px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>Full Name</th>
                            <th>Place of Birth</th>
                            <th>Date of Birth</th>
                            <th>NIK</th>
                            <th>Gender</th>
                            <th>Religion</th>
                            <th>Blood Type</th>
                            <th>Marital Status</th>

                        </tr>
                        </thead>
                        <tbody>
                        {console.log("INI LIST", employees.data)}
                        { employees.data?.data?.list?.map((element, index) => {
                            return (
                                <tr style={{textAlign:"center"}}>
                                    <td>{element.fullname}</td>
                                    <td>{element.placeOfBirth}</td>
                                    <td>{element.dateOfBirth}</td>
                                    <td>{element.nik}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.religion}</td>
                                    <td>{element.bloodType}</td>
                                    <td>{element.maritalStatus}</td>
                                </tr>
                                )
                        })
                        }

                        </tbody>
                    </Table>
                </TabPane>
                <TabPane tabId="2">
                    <hr/>
                    <Table striped bordered hover style={{marginTop: "15px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>Number of Child</th>
                            <th>Biological Mothers Name</th>
                            <th>Wife/husband's Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {console.log("INI LIST", employees.data)}
                        { employees.data?.data?.list?.map((element, index) => {
                            return (
                                <tr style={{textAlign:"center"}}>
                                    <td>{element.numberOfChildren}</td>
                                    <td>{element.biologicalMothersName}</td>
                                    <td>{element.spouseName}</td>
                                </tr>
                            )
                        })
                        }

                        </tbody>
                    </Table>
                </TabPane>

                <TabPane tabId="3">
                    <hr/>
                    <Table striped bordered hover style={{marginTop: "15px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>Account Name</th>
                            <th>Account Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {console.log("INI LIST", employees.data)}
                        { employees.data?.data?.list?.map((element, index) => {
                            return (
                                <tr style={{textAlign:"center"}}>
                                    <td>{element.accountName}</td>
                                    <td>{element.accountNumber}</td>
                                </tr>
                            )
                        })
                        }

                        </tbody>
                    </Table>
                </TabPane>

                <TabPane tabId="4">
                    <hr/>
                    <Table striped bordered hover style={{marginTop: "15px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th> Id </th>
                            <th>ID Employee</th>
                            <th>Join Date</th>
                            <th>Employee Status</th>
                            <th>Employee Type</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {console.log("INI LIST", employees.data)}
                        { employees.data?.data?.list?.map((element, index) => {
                            return (
                                <tr style={{textAlign:"center", marginTop:"20px"}}>
                                    <td>{element.id}</td>
                                    <td>{element.nip}</td>
                                    <td>{element.joinDate}</td>
                                    <td>{element.employeeStatus}</td>
                                    <td>{element.employeeType}</td>
                                    <td>{element.grade}</td>
                                    <Link to ={'/employee/'+ element.id + '/edit'}>
                                        <Button style={{backgroundColor:"#292961"}}><FontAwesomeIcon icon={faEdit}/> </Button>
                                    </Link>
                                </tr>
                            )
                        })
                        }

                        </tbody>
                    </Table>
                </TabPane>

                <TabPane tabId="5">
                    <hr/>
                    <Table striped bordered hover style={{marginTop: "15px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>KTP Address</th>
                            <th>Domisili Address</th>
                            <th>Postal Code KTP</th>
                            <th>NPWP Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {console.log("INI LIST", employees.data)}
                        { employees.data?.data?.list?.map((element, index) => {
                            return (
                                <tr style={{textAlign:"center", marginTop:"20px"}}>
                                    <td>{element.ktpAddress}</td>
                                    <td>{element.residenceAddress}</td>
                                    <td>{element.postalCodeOfIdCard}</td>
                                    <td>{element.npwpAddress}</td>
                                </tr>
                            )
                        })
                        }

                        </tbody>
                    </Table>


                </TabPane>


            </TabContent>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || [],
        error: state.findAllEmployee.error,
        isLoading : state.findAllEmployee.isLoading

    }
}
const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

