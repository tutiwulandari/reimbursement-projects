import React, {useEffect, useState} from 'react';
import {findById, save} from "../../actions/detailContractAction";
import {findAll} from "../../actions/employeeAction";
import {connect} from "react-redux";
import {useHistory, useParams} from "react-router-dom";


function FormTable({contract, findById, isLoading, save, error, savedContract}){

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

        return (
            <div class="container">
                <form>
                    <div className="row jumbotron">
                        <h2 className="text-center" style={{marginBottom:"20px", marginTop:"-20px"}}>Edit Detail Kontrak</h2>
                       <div className="container">

                           <div>
                               { !isLoading?

                               <div className="form">

                                   <div className="col-sm-6 form-group">
                                       <label>Status Asuransi</label>
                                       <input type="select" className="form-control"  name="benefitRegistrationStatus"
                                              value={data?.benefitRegistrationStatus} required>
                                           {
                                               benefitRegistrationStatus.map((element, index) =>
                                                   <option selected={element.id === data?.benefitRegistrationStatus} key={index} value={element}>
                                                       {element}
                                                   </option>
                                               )
                                           }
                                       </input>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label>Tanggal Karyawan Tetap</label>
                                       <input type="date" onChange={handleChange} value={data?.dateOfAcceptancePermanentEmployee || ''}
                                              name="dateOfAcceptancePermanentEmployee" required/>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label>Tipe Kontrak</label>
                                       <input type="select" defaultValue={data?.typeContract} onChange={handleChange}
                                              name="typeContract">
                                           {
                                               typeContract.map((element, index) =>
                                                   <option selected={ element.id === data?.typeContract} key={index} value={element} >
                                                       {element}
                                                   </option>
                                               )
                                           }
                                       </input>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label>Tanggal Resign</label>
                                       <input type="date" onChange={handleChange} value={testFullname?.dateOfResignation || ''}
                                              name="dateOfResignation" required/>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label htmlFor="sex">Tanggal Mulai Kontrak</label>
                                       <input type="date" onChange={handleChange} value={testFullname?.startDateContract || ''}
                                              name="startDateContract"/>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label htmlFor="religion">Tanggal Habis Kontrak</label>
                                      <input type="date" onChange={handleChange} value={testFullname?.endDateContract || ''}
                                             name="endDateContract"/>
                                   </div>

                                   <div className="col-sm-6 form-group">
                                       <label htmlFor="blood_type">Penempatan</label>
                                     <input onChange={handleChange} type="text" value={testFullname?.placement || ''}
                                            name="placement"/>
                                   </div>
                                   <div className="col-sm-6 form-group">
                                       <label htmlFor="marital_status">Habis Kontrak</label>
                                       <input type="select"  onChange={handleChange} name="endedContract">
                                           <option value="true"> YA</option>
                                           <option value="false"> TIDAK</option>
                                       </input>
                                   </div>
                               </div> :
                                   <div>
                                       Loading....
                                   </div>
                               }
                           </div>
                       </div>

                        <div className="col-sm-12 form-group mb-0">
                            <button type="submit" onClick={handleSubmit} className="btn btn float-right" style={{backgroundColor:"#292961", color:"white", width:"20%", marginTop:"10px", borderRadius:"20px"}}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        contract: state.findContractById.data || null,
        isLoading: state.findContractById.isLoading,
        savedContract: state.savedContract,
        // error: state.findContractById.error || state.savedContract.error,
        update: state.updateContract
    }
}
const mapDispatchToProps = {findById, save, findAll}

export default connect(mapStateToProps, mapDispatchToProps)(FormTable)