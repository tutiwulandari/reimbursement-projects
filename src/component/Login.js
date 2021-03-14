import React from "react";
import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Col, Input, Label } from "reactstrap";
import Avatar from "../image/undraw_Profile_data_re_v81r.svg"
import ForgetPassword from "./ForgetPassword";
import GoogleLogin from 'react-google-login';

export default function Login() {

    const button = { backgroundColor: "#292961", marginBottom: "20px", width: "120px", borderRadius: "20px" }

    const emailUser = ["arsytamawisa@gmail.com", "solehsolihin2021@gmail.com"]

    let responseGoogle = response => {
        const email = response.profileObj.email;
        console.log(email);

        if (emailUser.includes(email)) {
            alert("Login Success")
        } else {
            alert("Login Failed")
        }
    }

    return (
        <div className="content shadow p-4 mb-6 bg-white rounded" >
            <div>
                <Col>
                    <Form>
                        <img src={Avatar} alt="Avatar" />
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" type="text" placeholder="Username" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" md={6} sm={12}>
                            <Form.Label>Password</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" type="password" />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <a href="/dashboard" className="btn btn-primary" style={button}> Sign In</a>
                    <br />
                    <GoogleLogin
                        clientId="567435085483-fstc21l8q7cvorh36pggrq6cjlpm46o1.apps.googleusercontent.com"
                        buttonText="Login"
                        className="btn-google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <ForgetPassword />
                </Col>
            </div>
        </div>
    )
}