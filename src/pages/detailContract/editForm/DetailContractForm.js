import {Modal, Button, Container, Form, FormGroup} from "react-bootstrap";
import {Input, Label} from "reactstrap";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {findById, save} from "../../../actions/detailContractAction";
import {findAll} from "../../../actions/employeeAction";


function DetailContractForm({ contract, findById, isLoading, save, error, savedContract}) {

    const {id} = useParams();
    const history = useHistory();
    const [data, setData] = useState({})
    const [employeeId, setEmployeeId] = useState("")
    const [testFullname, setFullname] = useState({})



    console.log("Error", error)
    let typeContract = ["PROBABITION", "PKWT"]
    let benefitRegistrationStatus = ["ON_PROCESS", "DONE"]
    let endedContract = ["YA", "TIDAK"]

    useEffect(() => {
        if (data) {
            console.log("DETAIL FORM DATA", data)
        }
    }, [data])

    useEffect(() => {
        if (contract) {
            console.log("DETAIL FORM", contract)
            setEmployeeId(contract.employeeId.id)
        }
    }, [contract])

    useEffect(() => {
        findById(id)
    }, [])


    useEffect(() => {
        if (id) {
            findById(id)
        }
    }, [id, findById])


    useEffect(() => {
       if(contract) {
           setFullname({
               id: contract?.id,
               employeeId: contract?.employeeId.id,
               typeContract: contract?.typeContract,
               benefitRegistrationStatus: contract?.benefitRegistrationStatus,
               startDateContract: contract?.startDateContract,
               endDateContract: contract?.endDateContract,
               dateOfAcceptancePermanentEmployee: contract?.dateOfAcceptancePermanentEmployee,
               dateOfResignation: contract?.dateOfResignation,
               placement: contract?.placement,
               endedContract: contract?.endedContract
           })
       }
    },[data])
    console.log("COBA LAGI", testFullname)


    useEffect(() => {
        if (id && contract) {
            setData(contract)
        }
    }, [id, contract])


    useEffect(() => {
        if (savedContract) {
            history.push("/dashboard/hc/contract")
        }
    }, [savedContract, history])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("SUBMITTTT")
        save(testFullname)
    }

    console.log("REQUESS", data)


    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setFullname({...testFullname, [name]: value})
    }


    // const handleTest = (e) => {
    //     let name = e.target.name
    //     let value = e.target.value
    //     console.log("handle change", name, value)
    //     setFullname({...testFullname, [name]: value})
    // }

    return (
        <div>
            <Modal.Dialog style={{marginTop: "30px"}}>
                <Modal.Header closeButton style={{backgroundColor: "#292961"}}>
                    <Modal.Title style={{color: "white"}}> Edit Detail Kontrak</Modal.Title>
                </Modal.Header>

                <Container>
                    <div>
                        {
                            !isLoading ?

                                <Form>

                                    <FormGroup>
                                        <Label> Status Asuransi</Label>
                                        <Input onChange={handleChange} type="select"
                                               name="benefitRegistrationStatus">
                                            {
                                                benefitRegistrationStatus.map((element, index) =>
                                                    <option key={index} value={element}>
                                                        {element}
                                                    </option>
                                                )
                                            }
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Karyawan Tetap</Label>
                                        <Input type="date" onChange={handleChange}
                                               value={data?.dateOfAcceptancePermanentEmployee || ''}
                                               name="dateOfAcceptancePermanentEmployee"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tipe Kontrak </Label>
                                        <Input type="select" onChange={handleChange}
                                               name="typeContract">
                                            {
                                                typeContract.map((element, index) =>
                                                    <option key={index} value={element}>
                                                        {element}
                                                    </option>
                                                )
                                            }
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Resign </Label>
                                        <Input type="date" onChange={handleChange} value={testFullname?.dateOfResignation || ''}
                                               name="dateOfResignation"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Mulai Kontrak </Label>
                                        <Input type="date" onChange={handleChange} value={testFullname?.startDateContract || ''}
                                               name="startDateContract"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Habis Kontrak </Label>
                                        <Input type="date" onChange={handleChange} value={testFullname?.endDateContract || ''}
                                               name="endDateContract"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Penempatan</Label>
                                        <Input onChange={handleChange} type="text" value={testFullname?.placement || ''}
                                               name="placement"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Habis Kontrak</Label>
                                        <Input type="select" onChange={handleChange} name="endedContract">
                                            <option value="true"> YA</option>
                                            <option value="false"> TIDAK</option>
                                            {
                                                // endedContract.map((element, index) =>
                                                //     <option key={index} value={element}>
                                                //         {element}
                                                //     </option>
                                                // )
                                            }
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
        contract: state.findContractById.data || null,
        isLoading: state.findContractById.isLoading,
        savedContract: state.savedContract,
        // employees: state.findAllEmployee.data,
        // error: state.findContractById.error || state.savedContract.error,
        update: state.updateContract
    }
}
const mapDispatchToProps = {findById, save, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContractForm)