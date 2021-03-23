import {Modal, Button, Container, Form, FormGroup} from "react-bootstrap";
import {Input, Label} from "reactstrap";
import {Link, useParams, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {findById, save} from "../../../actions/employeeAction";

function VerifiedForm({verified, findById, isLoading, save, error, savedVerified}) {
    const {id} = useParams()
    const history = useHistory();
    const [data, setData] = useState({})
    const [testVerified, setVerified] = useState({})
    const[verifikasi, setVerifikasi] = useState({})

    useEffect( () => {
        findById(id)
    }, [])

    useEffect(() => {
        if(id && verified) {
            setData(verified)
        }
    },[id, verified])


    useEffect(() => {
        if(verified) {
            setVerified(verified?.verifiedHc)
        }
    },[verified])


    useEffect( () => {
        if(verified) {
            setVerifikasi( {
                 verifiedHc: verified?.verifiedHc
            })
        }
    }, [data])

    console.log("COBA YAA", verifikasi)


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("CLICK")
        save(verifikasi)
    }

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setVerifikasi({...verifikasi, [name]: value})
    }

    console.log("findall", verified?.verifiedHc)
    console.log("verifikasi", verifikasi)

    // useEffect(() => {
    //     if (savedVerified) {
    //         history.push("/dashboard/hc/employee")
    //     }
    // }, [savedVerified, history])

    return (
        <div>
            <Modal.Dialog style={{marginTop: "30px"}}>
                <Modal.Header closeButton style={{backgroundColor: "#292961"}}>
                    <Modal.Title style={{color: "white"}}> Status Registrasi Karyawan</Modal.Title>
                </Modal.Header>

                <Container>
                    <div>
                        {
                            !isLoading?
                                <Form>
                                    <FormGroup>
                                        <Label> Status Verifikasi Registrasi</Label>
                                        <Input type="select" name="verifiedHc" onChange={handleChange} >
                                            <option value="true"> Verifikasi</option>
                                            <option value="false"> Belum Verifikasi</option>
                                        </Input>
                                    </FormGroup>
                                </Form> :
                                <div>
                                    Loading...
                                </div>
                        }
                    </div>

                </Container>
                <Modal.Footer>
                    <Link to="#">
                        <Button style={{backgroundColor: "black"}}>Back</Button>
                    </Link>

                    <Button type="submit" onClick={handleSubmit} style={{backgroundColor: "#292961", color: "white"}}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
)
}

const mapStateToProps = (state) => {
    return {
        verified: state.findEmployeeById.data || null,
        isLoading: state.findEmployeeById.isLoading,
        savedVerified: state.saveEmployee,
        // error: state.findVerifiedById.error || state.savedVerified.error
    }
}
const mapDispatchToProps = {findById, save}

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedForm)