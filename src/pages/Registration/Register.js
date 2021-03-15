import React, {Component} from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faUnlockAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {Button, Container} from "@themesberg/react-bootstrap";
import BgImage from "../../assets/image/signin.svg";


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value

        this.setState({input});
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.validate()) {
            console.log(this.state)

            let input = {};
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({input:input});

            alert('Demo form is Submitted')
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }
        if (typeof input["email"] !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }
        this.setState({
            errors: errors
        });
        return isValid
    }


    render() {
        return (
            <main style={{backgroundColor:"white"}}>
                <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5" >
                    <Container>
                        <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`}} >
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow-soft border rounded border-light p-5 p-lg-5">
                                    <div className="text-center text-md-center mb-2 mt-md-0">
                                        <h3 className="mt-0">Create A New Account</h3>
                                        {/*<hr/>*/}
                                    </div>
                                    <Form onSubmit={this.handleSubmit} className="mt-3">
                                        <Form.Group controlId="formBasicUsername" className="mb-2" style={{width:"300px"}}>
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl id = "email"
                                                             name="email"
                                                             type="email"
                                                             value={this.state.input.email}
                                                             onChange={this.handleChange}
                                                             placeholder="Enter email"
                                                />
                                            </InputGroup>
                                            <div className="text-danger">{this.state.errors.email}</div>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className="mb-2" style={{width:"300px"}}>
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faLock}/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl id="password"
                                                             name="password"
                                                             value={this.state.input.password}
                                                             type="password"
                                                             placeholder="Enter Password"
                                                             onChange={this.handleChange}
                                                />
                                            </InputGroup>
                                            <div className="text-danger">{this.state.errors.password}</div>
                                        </Form.Group>

                                        <Form.Group controlId="formConfPass" className="mb-2">
                                            <Form.Label>Confirm Password </Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faLock}/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl id="confirm_password" type="password"
                                                             name = "confirm_password"
                                                             placholder="Enter confirm password"
                                                             value={this.state.input.confirm_password}
                                                             onChange={this.handleChange}
                                                             placeholder="Re-enter your Password"/>
                                            </InputGroup>
                                            <div className="text-danger">{this.state.errors.confirm_password}</div>
                                        </Form.Group>


                                        <Button  type="submit" value="Sign Up"
                                                 style={{backgroundColor:"#292961", color:"white", fontSize:"15px", width:"300px", marginBottom:"20px"}}>
                                            Sign In
                                        </Button>
                                        {/*<Button onClick={checkCaptcha} className="btnRegister" style={{ width: '30%', marginTop: '10px', backgroundColor: "#292961" }}>Register</Button>*/}
                                        {/*<Recaptcha*/}
                                        {/*    sitekey="6LdjJXkaAAAAAHHoFu9PavRR4CkWA1pcbh-MUtWl"*/}
                                        {/*    render="explicit"*/}
                                        {/*    verifyCallback={verifyCallback}*/}
                                        {/*/>*/}


                                        {/*<a href="#" className="btn btn-primary" style={{backgroundColor:"#292961", marginBottom:"20px", width:"120px", borderRadius:"20px"}}  >*/}
                                        {/*    Sign In*/}
                                        {/*</a>*/}
                                        <p style={{fontWeight:"bold"}}>Have an Account? <a href="/login" style={{color:"red"}}>Sign In </a></p>
                                    </Form>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }

}