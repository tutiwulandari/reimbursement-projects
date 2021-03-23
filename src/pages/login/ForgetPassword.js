import { useState } from "react";
import { Button, Modal, ModalFooter, } from "reactstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Form } from "react-bootstrap";
import { forgotPassword } from '../../actions/forgotPasswordAction';
import { connect } from "react-redux"


const ForgetPassword = ({ status, forgotPassword }) => {

    const [modal, setModal] = useState(false);
    const [lupa, setLupa] = useState({});
    const toggle = () => setModal(!modal)

    console.log("response from page",status);

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setLupa({ ...lupa, [key]: value })
    }

    const handleSubmit = () => {
        forgotPassword(lupa)
    }

    return (
        <div>
            <a className="pass" onClick={toggle} href="#" style={{ textAlign: "right", color: "#292961" }}>
                Forgot Password?
            </a>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader onClick={toggle} color="#292961" style={{ fontWeight: "bold", fontSize: "20px" }}>Forgot your password ?</ModalHeader>
                <Form className="forget" >
                    <div className="formgroup">
                        <label>Email</label>
                        <input className="form-control" onChange={handleChange} type="email" name="email" placeholder="example@gmail.com" />
                    </div>
                </Form>

                <ModalFooter>
                    <Button className="btn-submit"
                        onClick={() => {
                            toggle()
                            handleSubmit()
                        }}
                    >Submit</Button>
                    <Button color="outline-enigma" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

/* Reducer */
const mapStateToProps = (state) => {
    return {
        status: state.forgotPassword.data,
        isLoading: state.forgotPassword.isLoading,
    }
}

/* Action */
const mapDispatchToProps = { forgotPassword }

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)