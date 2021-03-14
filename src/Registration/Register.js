import React, {Component} from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";


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
            <div className="register">
                <Row>
                    <Col className=" register-left">
                        <h3>ENIGMA CAMP</h3>
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h2>Have an Account? <a href="/login">Login </a></h2>
                    </Col>
                    <Col className="register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <h2 className="register-heading"> Create a new Account</h2>
                                <Row className='register-form'>
                                    <Col>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                {/*<Form.Label>Email</Form.Label>*/}
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="email" type="email"
                                                                 name="email"
                                                                 value={this.state.input.email}
                                                                 onChange={this.handleChange}
                                                    placeholder="example@company.com"/>
                                                </InputGroup>
                                                <div className="text-danger">{this.state.errors.email}</div>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faLock}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="password" type="password"
                                                                 name="password"
                                                                 placeholder="Password"
                                                                 value={this.state.input.password}
                                                                 onChange={this.handleChange}/>
                                                </InputGroup>
                                                <div className="text-danger">{this.state.errors.password}</div>
                                            </Form.Group>
                                            <Form.Group controlId="formConfPass">
                                                {/*<Form.Label>Confirmation Password</Form.Label>*/}
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faCheck}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="confirm_password" type="password"
                                                    name = "confirm_password"
                                                    placholder="Enter confirm password"
                                                    value={this.state.input.confirm_password}
                                                    onChange={this.handleChange}
                                                    placeholder="Confirm password"/>
                                                </InputGroup>
                                                <div className="text-danger">{this.state.errors.confirm_password}</div>
                                            </Form.Group>
                                            <input type="submit" className="btnRegister" value="Register"
                                                   style={{
                                                width: '30%',
                                                marginTop: '10px',
                                                backgroundColor: "#292961"}} />
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }


}