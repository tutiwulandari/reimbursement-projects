import {Modal, Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

function ResetPassword() {
    const[error, setError] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const textDanger = {color: "red", fontSize: "12px"}


    function validate() {
        let error_ = {};
        let isValid_ = true;

        if(password.length < 8) {
            isValid_ = false;
            error_["password"] = "please enter your password"
        }

        if(password !== confirmPassword ) {
            isValid_ = false;
            error_["confirm_password"] = "please check your password confirm";
        }
        setError(error_)
        return isValid_
    }

    return(
        <div>
            <Button variant="white" onClick={handleShow}>
                Reset Password
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>

                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{marginTop:"10px"}}>
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password"
                            value="password"/>
                        </Form.Group>
                        <div style={textDanger}>{error.password}</div>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value="password"/>
                        </Form.Group>
                        <div style={textDanger}>{error.confirm_password}</div>

                    </Form>
                </Container>

                <Modal.Footer>
                    <Link to="/dashboard/hc">
                        <Button style={{backgroundColor:"black"}}>Back</Button>
                    </Link>
                    <Button style={{backgroundColor:"#292961"}}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ResetPassword;