import React from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";


export default  function Register() {
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
                                            <Form.Group controlId="formBasicUsername">
                                                <Form.Label>Username</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>@</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="text" placeholder="Username" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>@</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="email" placeholder="Email" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <InputGroup className="mb-2">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>@</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl id="inlineFormInputGroup" type="password" />
                                                </InputGroup>
                                            </Form.Group>
                                            <input type="submit" className="btnRegister" value="Register" style={{width: '30%', marginTop:'10px', backgroundColor:"#292961"}}/>
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