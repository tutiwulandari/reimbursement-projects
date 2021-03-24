import {Modal, Button, Spinner} from "react-bootstrap";
import {findById, save} from "../../../actions/employeeAction";
import {findAll} from "../../../actions/gradeAction";
import {connect} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Container, Form, FormGroup, Input, Label} from "reactstrap";
import Header from "../../../dashboard/dashboardHc/Header";
import Menu from "../../../dashboard/dashboardHc/Menu";
import Footer from "../../../dashboard/dashboardHc/Footer";


function EmployeeForm({employee, findById, isLoading, save, findAll, error, grades, savedEmployee}) {


    const {id} = useParams();
    const [gradesModel, setGradesModel] = useState([])
    const history = useHistory();
    const [data, setData] = useState({})

    // let gradesModelChoose = {"Choose" ,...gradesModel}
    let employeeType = ["OFFICE", "ONSITE"]
    let employeeStatus = ["ACTIVE", "NON_ACTIVE"]

    useEffect(() => {
        findAll()
    }, [findAll])


    useEffect(() => {
        findById(id)
    }, [])

    useEffect(() => {
        if (employee != null) {
            // let employeeType;
            // let employeeStatus;
            //
            // switch (employee.employeeType) {
            //     case "OFFICE":
            //         employeeType = 1
            //         break
            //     case "ONSITE":
            //         employeeType = 0
            // }
            //
            // switch (employee.employeeStatus) {
            //     case "ACTIVE":
            //         employeeStatus = 0
            //         break
            //     case "NON_ACTIVE":
            //         employeeStatus = 1
            // }

            console.log("EMPLOYEEEEEEE", employee)

            setData({
                id: employee.id,
                nip :employee.nip === null ? null :employee.nip,
                gradeId: employee.grade === null ? "" : employee.grade.id,
                joinDate: employee.joinDate,
                employeeType: employee.employeeType === null ? "" : employee.employeeType,
                employeeStatus: employee.employeeStatus === null ? "" : employee.employeeStatus
            })
        }
    }, [employee])
    console.log("DATAAAA", data)


    useEffect(() => {
    }, [data])

    useEffect(() => {
        if (id && employee) {
            setData({...data})
        }
    }, [id, data])
    console.log("test", findById)

    useEffect(() => {
        if (savedEmployee) {
            history.push("/dashboard/hc/employee");
        }
    }, [savedEmployee, history])

    useEffect(() => {
        if (id) {
            findById(id)
        }
        if (grades) {
            setGradesModel(grades)
        }
    }, [id, findById, grades])


    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setData({...data, [name]: value})
    }

    const handleClick = (event) => {
        event.preventDefault();
        save(data);
    }

    console.log("REQUESSS", employee)


    const onSelectChange = (e) => {
        setData({...data, gradeId: e.target.value})
    }

    return (
        <div>
            <Header/>
            <Menu/>
            <Modal.Dialog>
                <Modal.Header closeButton style={{backgroundColor: "black"}}>
                    <Modal.Title style={{color: "white"}}> Edit Karyawan </Modal.Title>
                </Modal.Header>

                <Container>
                    <div>
                        {console.log("coba yaa", data?.grade)}
                        {
                            !isLoading ? grades &&
                                <Form>
                                    <FormGroup>
                                        <Input onChange={handleChange} value={data?.id || ''}
                                               type="text" name="id" hidden={true}/>
                                        <Label style={{fontFamily: "cursive"}}>
                                            NIP
                                        </Label>
                                        <Input onChange={handleChange}
                                               type="text" value={data?.nip === null ? '' : data?.nip} name="nip"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={{fontFamily: "cursive"}}>Grade</Label>
                                        <Input type="select" onChange={e => onSelectChange(e)}>

                                            <option selected disabled hidden>-- Choose --</option>
                                            {
                                                data?.gradeId === "" ?
                                                    gradesModel.data?.map((element, index) =>
                                                        <option key={index} value={element.id}>
                                                            {element.grade}
                                                        </option>
                                                    ) : gradesModel.data?.map((element, index) =>
                                                        <option selected={element.id === data?.gradeId} key={index}
                                                                value={element.id}>
                                                            {element.grade}
                                                        </option>
                                                    )
                                            }
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="join_date" style={{fontFamily: "cursive"}}>Join
                                            Date</Label>
                                        <Input onChange={handleChange} type="date" value={data?.joinDate || ''}
                                               name="joinDate"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={{fontFamily: "cursive"}}>Employee
                                            Status</Label>
                                        <Input onChange={handleChange} type="select"
                                               name="employeeStatus">

                                            <option selected disabled hidden>-- Choose --</option>
                                            {
                                                data?.employeeStatus === null ?
                                                    employeeStatus.map((element, index) =>
                                                        <option key={index} value={element}>
                                                            {element}
                                                        </option>
                                                    ) : (
                                                        employeeStatus.map((element, index) =>
                                                            <option selected={element === data?.employeeStatus}
                                                                    key={index}
                                                                    value={element}>
                                                                {element}
                                                            </option>
                                                        )
                                                    )
                                            }

                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={{fontFamily: "cursive"}}>Employee Type</Label>
                                        <Input onChange={handleChange} type="select" name="employeeType">
                                            <option selected disabled hidden>-- Choose --</option>
                                            {
                                                data?.employeeType === null ?
                                                employeeType.map((element, index) =>
                                                    <option  key={index} value={element}>
                                                        {element}
                                                    </option>
                                                ) : (
                                                        employeeType.map((element, index) =>
                                                            <option selected={element === data?.employeeType} key={index}
                                                                    value={element}>
                                                                {element}
                                                            </option>
                                                        )
                                                    )
                                            }

                                        </Input>
                                    </FormGroup>


                                </Form> :

                                <Spinner animation={"grow"} color="#292961"/>

                        }
                    </div>
                </Container>
                <Modal.Footer>
                    <Link to="/dashboard/hc/employee">
                        <Button style={{backgroundColor: "black"}}>Back</Button>
                    </Link>

                    <Button type="submit" onClick={handleClick} style={{backgroundColor: "#292961", color: "white"}}>
                        Submit
                    </Button>

                </Modal.Footer>
            </Modal.Dialog>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employee: state.findEmployeeById.data || null,
        isLoading: state.findEmployeeById.isLoading,
        savedEmployee: state.saveEmployee.data,
        grades: state.findAllGrade.data,
        error: state.findEmployeeById.error || state.saveEmployee.error,
        update: state.updateEmployee

    }
}
const mapDispatchToProps = {findById, save, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
