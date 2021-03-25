import {Modal, Button} from "react-bootstrap";
import {Container, Form, FormGroup, Input, Label} from "reactstrap";
import {Link, useParams, useHistory} from "react-router-dom"
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {findById, save} from "../../../actions/detailContractAction";
import Header from "../../../dashboard/dashboardHc/Header";
import Menu from "../../../dashboard/dashboardHc/Menu";
import Footer from "../../../dashboard/dashboardHc/Footer";


function DetailContractForm({contract, findById, isLoading, save, error, savedContract}) {

    const {id} = useParams();
    const history = useHistory();
    const [data, setData] = useState({})
    const [employeeId, setEmployeeId] = useState("")


    let typeContract = ["PROBABITION", "PKWT"]
    let benefitRegistrationStatus = ["ON_PROCESS", "DONE"]



    useEffect(() => {
        findById(id)
    }, [])

    useEffect(() => {
    }, [data])


    useEffect(() => {
        if (id && contract) {
            setData({
                id: contract?.id,
                employeeId: contract.employeeId.id,
                typeContract: contract.typeContract === null ? null : contract.typeContract,
                benefitRegistrationStatus: contract.benefitRegistrationStatus === null ? null : contract?.benefitRegistrationStatus,
                startDateContract: contract.startDateContract === null ? null : contract.startDateContract,
                endDateContract: contract.endDateContract === null ? null : contract.endDateContract,
                dateOfAcceptancePermanentEmployee: contract.dateOfAcceptancePermanentEmployee === null ? null : contract.dateOfAcceptancePermanentEmployee,
                dateOfResignation: contract.dateOfResignation === null ? null : contract.dateOfResignation,
                placement: contract.placement === null ? null : contract.placement,
                endedContract: contract.endedContract === null ? null : contract.endedContract,
            })
        }
    }, [id, contract])



    useEffect(() => {
        if (id) {
            findById(id)
        }
    }, [id, findById])


    useEffect(() => {
        if (contract) {
            console.log("DETAIL FORM", contract)
            setEmployeeId(contract.employeeId.id)
        }
    }, [contract])

    console.log("employee", employeeId)


    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setData({...data, [name]: value})
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("CLICK")
        save(data)
    }

    useEffect(() => {
        if (savedContract) {
            history.push("/dashboard/hc/contract")
        }
    }, [savedContract, history])

    console.log("data", data)
    // console.log("contract", contract)


    return (
        <div>
            <Header/>
            <Menu/>
            <Modal.Dialog style={{marginTop: "30px"}}>
                <Modal.Header closeButton style={{backgroundColor: "#292961"}}>
                    <Modal.Title style={{color: "white"}}> Edit Detail Kontrak</Modal.Title>
                </Modal.Header>

                <Container>
                    <div>
                        {
                            !isLoading ?

                                <Form onSubmit={handleSubmit}>

                                    <FormGroup>
                                        <Label> Status Asuransi</Label>
                                        <Input onChange={handleChange} type="select"
                                               name="benefitRegistrationStatus" value={data?.benefitRegistrationStatus}>
                                            <option selected disabled hidden>-- Choose --</option>
                                            {
                                                data?.benefitRegistrationStatus === null ?
                                                    benefitRegistrationStatus.map((element, index) =>
                                                        <option key={index} value={element}>
                                                            {element}
                                                        </option>
                                                    ) : (
                                                        benefitRegistrationStatus.map((element, index) =>
                                                            <option
                                                                selected={element === data?.benefitRegistrationStatus}
                                                                key={index} value={element}>
                                                                {element}
                                                            </option>
                                                        )
                                                    )
                                            }
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Karyawan Tetap</Label>
                                        <Input type="date" onChange={handleChange}
                                               value={data?.dateOfAcceptancePermanentEmployee === null ? '' :
                                                   data?.dateOfAcceptancePermanentEmployee}
                                               name="dateOfAcceptancePermanentEmployee"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tipe Kontrak </Label>
                                        <Input type="select" defaultValue={data?.typeContract} onChange={handleChange}
                                               name="typeContract">
                                            <option selected disabled hidden>-- Choose --</option>
                                            {
                                                data?.typeContract === null ?
                                                    typeContract.map((element, index) =>
                                                        <option key={index} value={element}>
                                                            {element}
                                                        </option>
                                                    ) : (
                                                        typeContract.map((element, index) =>
                                                            <option selected={element === data?.typeContract}
                                                                    key={index}
                                                                    value={element}>
                                                                {element}
                                                            </option>
                                                        )
                                                    )
                                            }
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Resign </Label>
                                        <Input type="date" onChange={handleChange}
                                               value={data?.dateOfResignation === null ? null : data?.dateOfResignation }
                                               name="dateOfResignation"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Mulai Kontrak </Label>
                                        <Input type="date" onChange={handleChange}
                                               value={data?.startDateContract  === null ? null : data?.startDateContract}
                                               name="startDateContract"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Tanggal Habis Kontrak </Label>
                                        <Input type="date" onChange={handleChange}
                                               value={data?.endDateContract  === null ? null : data?.endDateContract} name="endDateContract"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Penempatan</Label>
                                        <Input onChange={handleChange} type="text"
                                               value={data.placement  === null ? null : data?.placement} name="placement"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label> Habis Kontrak</Label>
                                        <Input type="select" onChange={handleChange} name="endedContract">
                                            <option selected disabled hidden>-- Choose --</option>
                                                <option value={true}> YA</option>
                                                <option value={false}>TIDAK</option>

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
                    <Link to="/dashboard/hc/contract">
                        <Button style={{backgroundColor: "black"}}>Back</Button>
                    </Link>

                    <Button type="submit" onClick={handleSubmit} style={{backgroundColor: "#292961", color: "white"}}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contract: state.findContractById.data || null,
        isLoading: state.findContractById.isLoading,
        savedContract: state.saveContract.data,
        error: state.findContractById.error || state.saveContract.error,
        update: state.updateContract
    }
}
const mapDispatchToProps = {findById, save}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContractForm)