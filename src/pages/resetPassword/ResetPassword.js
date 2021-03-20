import {Modal, Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sidebar from "../../dashboard/Sidebar";
import LayoutRoutesHc from "../layoutHc/LayoutRoutesHc";
import {useState} from "react";

function ResetPassword() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

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