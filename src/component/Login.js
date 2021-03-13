import React, {Component} from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import Avatar from "../image/undraw_Profile_data_re_v81r.svg"
import ForgetPassword from "./ForgetPassword";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import validate from "./Validation";

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
            <div className="content shadow p-4 mb-6 bg-white rounded" >
                <div>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <img src={Avatar} alt="Avatar" />
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>{element}</InputGroup.Text>
                                    </InputGroup.Prepend>
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
                            <Form.Group controlId="formBasicEmail" md={6} sm={12}>
                                <Form.Label>Password</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text> <FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                    </InputGroup.Prepend>
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
                            <input type="submit" className="btnSignin" value="Sign In"
                                   style={{
                                       color:"white",
                                       marginTop: '10px',
                                       backgroundColor: "#292961", marginBottom:"20px", width:"130px", borderRadius:"30px", height:"40px" }} />

                            {/*<a href="#" className="btn btn-primary" style={{backgroundColor:"#292961", marginBottom:"20px", width:"120px", borderRadius:"20px"}}  >*/}
                            {/*    Sign In*/}
                            {/*</a>*/}
                            <ForgetPassword/>
                        </Form>
                    </Col>
                </div>
            </div>
        )
    }


}