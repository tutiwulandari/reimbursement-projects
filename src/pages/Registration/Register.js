import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import { Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "@themesberg/react-bootstrap";
import BgImage from "../../assets/image/signin.svg";
import { registerEmployees } from './../../reducers/register';
import { registerEmployee } from './../../actions/register';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';


function Register({ registerEmployee, login }) {

    /* Styles */
    const button = { backgroundColor: "#292961", color: "white", fontSize: "15px", width: "300px", marginBottom: "20px" }
    const textDanger = { color: "red", fontSize: "12px" }
    /* Styles */

    /* State */
    const [data, setData] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    /* State */

    /* Validation Input */
    const [isValid, setIsValid] = useState(true)
    const [input, setInput] = useState({})
    const [error, setError] = useState({})
    /* Validation Input */

    /* Change Path */
    const history = useHistory();
    /* Change Path */

    useEffect(() => {
        if(login) {
            console.log(login);
            if (login.data.data.code == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Registration success..',
                    showConfirmButton: false,
                    timer: 1000,
                  })
                //   history.push('/login')
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooopss..',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 2000,
                    })
            }
        }
    }, [login])


    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value

        switch (key) {
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            case "confirm_password":
                setConfirmPassword(value)
                break
            default:
        }

        /* Set Input */
        let data = input
        data[key] = value
        setInput(data)
        /* Set Input */

        if (key == "email" || key == "password") {
            setData({ ...data, [key]: value })
        }
    }

    function validate() {
        let error_ = {};
        let isValid_ = true;

        if (!email) {
            isValid_ = false;
            error_["email"] = "Please enter your email address.";
        }

        if (typeof password == "undefined" || password == "") {
            isValid_ = false;
            error_["password"] = "Please enter your password.";
        }

        if(password.length < 8) {
            isValid_ = false;
            error_["password"] = "Password minimum at least 8 characters.";
        }

        if (password !== confirmPassword) {
            isValid_ = false;
            error_["confirm_password"] = "Please check your password confirm";
        }

        setError(error_)
        return isValid_
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        if (validate()) {
            console.log(data);
            registerEmployee(data)
        }
    }

    return (
        <main style={{ backgroundColor: "white" }}>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5" >
                <Container>
                    <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }} >
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-5 p-lg-5">
                                <div className="text-center text-md-center mb-2 mt-md-0">
                                    <h3 className="mt-0">Create A New Account</h3>
                                    {/*<hr/>*/}
                                </div>
                                <Form onSubmit={handleSubmit} className="mt-3">
                                    <Form.Group controlId="formBasicUsername" className="mb-2" style={{ width: "300px" }}>
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={handleChange}
                                                placeholder="Enter email"
                                            />
                                        </InputGroup>
                                        <div style={textDanger}>{error.email}</div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="mb-2" style={{ width: "300px" }}>
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faLock} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="password"
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                                type="password"
                                                placeholder="Enter Password"
                                            />
                                        </InputGroup>
                                        <div style={textDanger}>{error.password}</div>
                                    </Form.Group>

                                    <Form.Group controlId="formConfPass" className="mb-2">
                                        <Form.Label>Confirm Password </Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faLock} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="confirm_password" type="password"
                                                name="confirm_password"
                                                placholder="Enter confirm password"
                                                value={confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Re-enter your Password" />
                                        </InputGroup>
                                        <div style={textDanger}>{error.confirm_password}</div>
                                    </Form.Group>

                                    <Button type="submit" value="Sign Up" style={button}> Sign In </Button>
                                    <p style={{ fontWeight: "bold" }}>Have an Account?
                                        <a href="/login" style={{ color: "red" }}>Sign In </a>
                                    </p>
                                </Form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

/* Reducer */
const mapStateToProps = (state) => {
    return {
        login : state.registerEmployees.data
    }
}

/* Action */
const mapDispatchToProps = { registerEmployee }


export default connect(mapStateToProps, mapDispatchToProps)(Register)