import React from "react";
import {Button, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {Col, Input, Label} from "reactstrap";
import Avatar from "../image/undraw_Profile_data_re_v81r.svg"
import ForgetPassword from "./ForgetPassword";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />


export default function Login() {
    return(
        <div className="content shadow p-4 mb-6 bg-white rounded" >
            <div>
                <Col>
                    <Form>
                        <img src={Avatar} alt="Avatar" />
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>{element}</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" type="email" placeholder="Email"  />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" md={6} sm={12}>
                            <Form.Label>Password</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text> <FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" type="password" isValid/>
                            </InputGroup>
                        </Form.Group>
                        <a href="/dashboard" className="btn btn-primary" style={{backgroundColor:"#292961", marginBottom:"20px", width:"120px", borderRadius:"20px"}}  >
                            Sign In
                        </a>
                        <ForgetPassword/>

                    </Form>
                </Col>
            </div>
        </div>
    )
}