import React, {Component} from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAt, faCheck, faLock} from "@fortawesome/free-solid-svg-icons";
import validate from "./Validation";


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

        if (validate()) {
            console.log(this.state)

            let input = {};
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({input:input});

            alert('Demo form is Submitted')
        }
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
                                                        <InputGroup.Text><FontAwesomeIcon icon={faAt}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="email" type="email"
                                                                 name="email"
                                                                 value={this.state.input.email}
                                                                 onChange={this.handleChange}
                                                    placeholder="Enter Email"/>
                                                </InputGroup>
                                                <div className="text-danger">{this.state.errors.email}</div>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faLock}/>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="password" type="password"
                                                                 name="password"
                                                                 placeholder="Enter password"
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
                                                    placeholder="Enter confirm password"/>
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