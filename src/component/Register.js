import React, {Component} from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAt, faCheck, faLock} from "@fortawesome/free-solid-svg-icons";
import {FormErrors} from "./FormErrors";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput (event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value},
            () => {
                this.validateField(name, value)
            })
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email' :
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'please include an @ in the email address';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break;

        }

        this.setState({formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
            }, this.validateForm)
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid})
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has error' );
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
                                        <Form>
                                            <FormErrors formErrors={this.state.formErrors}/>
                                            <Form.Group controlId="formBasicEmail"  className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                                <Form.Label>Email</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faAt}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="email"
                                                                 name = "email"
                                                                 value={this.state.email}
                                                                 onChange={(event => this.handleUserInput(event))}/>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faLock}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="password"
                                                                 name = "password"
                                                                 value={this.state.password}
                                                                 onChange={(event => this.handleUserInput(event))}
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="formConfPass">
                                                <Form.Label>Confirmation Password</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faCheck}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="password"/>
                                                </InputGroup>
                                            </Form.Group>
                                            <input type="submit" className="btnRegister" value="Register" style={{
                                                width: '30%',
                                                marginTop: '10px',
                                                backgroundColor: "#292961"
                                            }} disabled={!this.state.formValid}/>
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