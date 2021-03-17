import {Link, useParams, useHistory, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById, save} from "../../../actions/employeeAction"
import {connect} from "react-redux";
import {Button, Container, Form, Input} from "reactstrap";
import {saveEmployee} from "../../../reducers/employeeReducer";
import {FormGroup} from "react-bootstrap";
import {Label} from "@material-ui/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";


function EditEmployee({employee, findById, isLoading, save}) {

    const {id} = useParams();
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState({
        id: null,
        grade: null,
        employeeType: null,
        employeeStatus: null,
        nip: null,
        joinDate: null
    })
    const history = useHistory();

    useEffect(() => {
        findById(id)
    }, [])

    useEffect(() => {
        if (employee) {
            setData(employee.data)
        }
    }, [employee])


    // useEffect(() => {
    //     console.log("ini menu edit", employee)
    //     if (id && id !== data.id) {
    //         findById(id)
    //         setData(employee)
    //     }
    // }, [])


    const handleChange = (event) => {
        // const {name, value} = event.target
        let name = event.target.name
        let value = event.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        save(data);
    }


    if (redirect === true) {
        return <Redirect to="/employee"/>
    }


    console.log("EDIT", employee)
    return (
        <Container>
            <div>
                {!isLoading ?
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input sm={5} size="lg" onChange={handleChange} value={data?.id || ''}
                                   type="text" name="id" hidden={true}/>
                            <Label htmlFor="id" sm={5} size="lg" style={{fontFamily: "cursive"}}>
                                ID Employee
                            </Label>
                            <Input onChange={handleChange} type="text" value={data?.nip || ''} name="id_employee"
                                   bsSize="lg" id="id_employee"/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="grade" sm={5} size="lg" style={{fontFamily: "cursive"}}>Grade</Label>
                            <Input onChange={handleChange} type="text" value={data?.grade || ''}
                                   name="grade" bsSize="lg" id="grade"/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="join_date" sm={5} size="lg" style={{fontFamily: "cursive"}}>Join
                                Date</Label>
                            <Input onChange={handleChange} type="text" value={data?.joinDate || ''}
                                   name="join_date" bsSize="lg" id="join_date"/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="employee_status" sm={5} size="lg" style={{fontFamily: "cursive"}}>Employee
                                Status</Label>
                            <Input onChange={handleChange} type="text" value={data?.employeeStatus || ''}
                                   name="employee_status" bsSize="lg" id="employee_status"/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="employee_type" sm={5} size="lg" style={{fontFamily: "cursive"}}>Employee
                                Type</Label>
                            <Input onChange={handleChange} type="text" value={data?.employeeType || ''}
                                   name="employee_type" bsSize="lg" id="employee_type"/>
                        </FormGroup>

                        <Button>
                            <FontAwesomeIcon icon={faSave}/>
                            {id.length > 0 ? " Update" : " save"}
                        </Button>
                    </Form> :
                    <div> Loading ...</div>
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log("state")
    return {
        //call reducer
        employee: state.findEmployeeById.data,
        isLoading: state.findEmployeeById.isLoading,
        savedEmployee: state.saveEmployee.data,
        update: state.update

    }
}
const mapDispatchToProps = {findById, save}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
