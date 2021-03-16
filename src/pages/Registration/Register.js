import React, {useState} from 'react';
import {Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {Button, Container} from "@themesberg/react-bootstrap";
import BgImage from "../../assets/image/signin.svg";
import validate from "./validateInfo";
import useForm from "../Registration/UseForm"
import Recaptcha from 'react-recaptcha';
import Navigation from "../../component/Navigation";

const Register = ( {submitForm} )=> {
const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm, validate
);

    const [isVerified, setIsVerified] = useState(false)

    let verifyCallback = response => {
        if(response) {
            setIsVerified(true)
        }
    };

    let checkCaptcha = () => {
        if(isVerified) {
            // send email and password
            // register user
        }
        else {
            alert("Please checklist your captcha")
        }
    }

    console.log(isVerified);

        return (
                <main style={{backgroundColor:"white"}}>
                    <Navigation/>
                    <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5" >
                        <Container>
                            <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`}} >
                                <Col xs={12} className="d-flex align-items-center justify-content-center">
                                    <div className="bg-white shadow-soft border rounded border-light p-5 p-lg-5">
                                        <div className="text-center text-md-center mb-2 mt-md-0">
                                            <h3 style={{marginTop:"-35px"}}>Create A New Account</h3>
                                            {/*<hr/>*/}
                                        </div>
                                        <Form onSubmit={handleSubmit} className="mt-3">
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
                                                                 value={values.email}
                                                                 onChange={handleChange}
                                                                 placeholder="Enter email"

                                                    />
                                                </InputGroup>
                                                <div className="text-danger">{errors.email}</div>
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
                                                                 value={values.password}
                                                                 type="password"
                                                                 placeholder="Enter Password"
                                                                 onChange={handleChange}
                                                    />
                                                </InputGroup>
                                                <div className="text-danger">{errors.password}</div>
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
                                                                 value={values.confirm_password}
                                                                 onChange={handleChange}
                                                                 placeholder="Re-enter your Password"/>
                                                </InputGroup>
                                                <div className="text-danger">{errors.confirm_password}</div>
                                            </Form.Group>


                                            <Button onClick={checkCaptcha}  type="submit" value="Sign Up"
                                                    style={{backgroundColor:"#292961", color:"white", fontSize:"15px", width:"300px", marginBottom:"20px"}}>
                                                Sign Up
                                            </Button>
                                            {/*<Button onClick={checkCaptcha} className="btnRegister" style={{ width: '30%', marginTop: '10px', backgroundColor: "#292961" }}>Register</Button>*/}
                                            <Recaptcha
                                                sitekey="6LdjJXkaAAAAAHHoFu9PavRR4CkWA1pcbh-MUtWl"
                                                render="explicit"
                                                verifyCallback={verifyCallback}
                                            />


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
export default Register;