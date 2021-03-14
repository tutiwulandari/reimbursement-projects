import React, {Component} from "react";
import Avatar from "../image/undraw_Profile_data_re_v81r.svg"
import ForgetPassword from "./ForgetPassword";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import BgImage from "../image/signin.svg"
import {Row, Col, FormControl,Container, InputGroup, Form, Button} from "@themesberg/react-bootstrap";

const element = <FontAwesomeIcon icon={faUser} />

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            input1: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let input1 = this.state.input1;
        input1[event.target.name] = event.target.value

        this.setState({input1: input1});
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.validate()) {
            console.log(this.state)

            let input1 = {};
            input1["email"] = "";
            input1["password"] = "";
            this.setState({input1:input1});

            alert('Demo form is Submitted')
        }
    }
    validate() {
        let input1 = this.state.input1;
        let errors = {};
        let isValid = true;

        if (!input1["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }
        if (typeof input1["email"] !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input1["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
        if (!input1["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return isValid
    }


    render() {
        return(
            <main style={{backgroundColor:"white", marginTop:"100px"}}>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5" >
                <Container>
                    <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`}} >
                        <Col xs={5} className="d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow-soft border rounded border-light p-5 p-lg-5">
                                    <div className="text-center text-md-center mb-4 mt-md-0">
                                        <h3 className="mb-0">Sign in</h3>
                                    </div>
                                    <Form onSubmit={this.handleSubmit} className="mt-4">
                                        <Form.Group controlId="formBasicUsername" className="mb-4" style={{width:"300px"}}>
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>{element}</InputGroup.Text>
                                                <FormControl id = "email"
                                                             name="email"
                                                             type="email"
                                                             value={this.state.input1.email}
                                                             onChange={this.handleChange}
                                                             placeholder="Enter email"
                                                />
                                            </InputGroup>
                                            <div className="text-danger">{this.state.errors.email}</div>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className="mb-4" style={{width:"300px"}}>
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text> <FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                                                <FormControl id="password"
                                                             name="password"
                                                             value={this.state.input1.password}
                                                             type="password"
                                                             placeholder="Enter Password"
                                                             onChange={this.handleChange}
                                                />
                                            </InputGroup>
                                            <div className="text-danger">{this.state.errors.password}</div>
                                        </Form.Group>
                                        <Button  type="submit" value="Sign In"
                                                 style={{backgroundColor:"#292961", color:"white", fontSize:"15px", width:"300px", marginBottom:"20px"}}>
                                            Sign In
                                        </Button>

                                        {/*<a href="#" className="btn btn-primary" style={{backgroundColor:"#292961", marginBottom:"20px", width:"120px", borderRadius:"20px"}}  >*/}
                                        {/*    Sign In*/}
                                        {/*</a>*/}
                                        <ForgetPassword/>
                                    </Form>
                                </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            </main>
        )
    }


}
