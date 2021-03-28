import {Modal, Button, Container, Form, InputGroup, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {reset} from "../../actions/resetPasswordAction"
import {connect} from "react-redux";
import {findAll} from "../../actions/employeeAction";

function ResetPassword({resetPas, isLoading, reset, employees, findAll}) {

    const [values, setValues] =useState({
        password:"",
        confirmPassword:""
    })


    useEffect( ()=> {
        findAll()
    },[])

    const[error, setError] = useState({})
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [data, setData] = useState({})
    const textDanger = {color: "red", fontSize: "12px"}


    //Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleChange = (e) => {
        let name= e.target.name;
        let value = e.target.value;
        setValues({...values, [name]:value})
    }

    const handleSubmit = (e) => {
        console.log("CLICK")
        e.preventDefault();
        if(validate()) {
            resetPas(data)
        }
    }
    useEffect( ()=> {
        if(resetPas) {
            setData({
                idLogin : employees?.data?.data?.login.id,
                password: employees?.data?.data?.login.password
            })
        }
    })

    console.log("data", data)

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    function validate() {
        let error_ = {};
        let isValid_ = true;

        if(password.length < 8) {
            isValid_ = false;
            error_["password"] = "please enter your password"
        }

        if(password !== confirmPassword ) {
            isValid_ = false;
            error_["confirm_password"] = "please check your password confirm";
        }
        setError(error_)
        return isValid_
    }

    console.log("employee", employees)

    return(
        <div>
            <Button variant="white" onClick={handleShow}>
                Reset Password
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>

                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group style={{marginTop:"10px"}}>
                            <Form.Label >Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text> <FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                                <FormControl name="password"
                                             value={values.password}
                                             type={values.showPassword ? "text" : "password"}
                                             placeholder="Enter Password"
                                             onChange={handleChange}
                                             aria-describedby="basic-addon2"
                                             style={{ height: "38px" }}/>

                                <InputGroup.Prepend position="end">
                                    <InputGroup.Text id="basic-addon2" style={{ height: "38px" }}>
                                        <IconButton onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>
                        <div style={textDanger}>{error.password}</div>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text> <FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                                <FormControl id="password"
                                             name="confirmPassword"
                                             value={values.confirmPassword}
                                             type={values.showPassword ? "text" : "password"}
                                             placeholder="Re-enter Password"
                                             onChange={handleChange}
                                             aria-describedby="basic-addon2"
                                             style={{ height: "38px" }}
                                />
                                <InputGroup.Prepend position="end">
                                    <InputGroup.Text id="basic-addon2" style={{ height: "38px" }}>
                                        <IconButton onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>

                            </InputGroup>

                        </Form.Group>
                        <div style={textDanger}>{error.confirm_password}</div>
                    </Form>
                </Container>

                <Modal.Footer>
                    <Link to="/dashboard/hc">
                        <Button style={{backgroundColor:"black"}}>Kembali</Button>
                    </Link>
                    <Button onClick={handleSubmit} type="submit" style={{backgroundColor:"#292961"}}>Simpan</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || null,
        resetPass : state.resetPassword.data || null,
        isLoading: state.resetPassword.isLoading
    }
}

const mapDispatchToProps = {reset, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)