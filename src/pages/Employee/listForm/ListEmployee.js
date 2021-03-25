import React, {useEffect, useMemo, useState} from "react";
import {Table} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";
import {findAll, findByName} from "../../../actions/employeeAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Menu from "../../../dashboard/dashboardHc/Menu";
import Header from "../../../dashboard/dashboardHc/Header";
import Footer from "../../../dashboard/dashboardHc/Footer";

function ListEmployee({findAll, findByName, employees, error, isLoading, name}) {

    const [searchName, setSearch] = useState({
        fullname: ""
    });

    const [karyawan, setKaryawan] = useState(null)


    useEffect(() => {
        findAll()
    }, []);

    // useEffect(()=>{
    //     findByName()
    // }, [findByName])

    // useEffect(() => {
    //     if(searchName) {
    //         employees = name
    //     }
    // }, []);

    useEffect(() => {
        setKaryawan({...employees})
    }, [employees])

    useEffect(()=> {
        setKaryawan({
            data : name
        })
    }, [name])


    console.log("KARYAWAN", karyawan)


    const onSubmit = () => {
        findByName(searchName)
        console.log("CLICK")
    }

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setSearch({...searchName, [name]:value})
    }
    console.log("FULLNAME", searchName)




    console.log("LIST", employees)

    return (
        <div>
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <div className="content-header">
                    <h1 style={{color: "black", textAlign: "center", marginBottom:"2vh"}}> DAFTAR KARYAWAN</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card" style={{height: "70vh"}}>
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width: "150px"}}>
                                                <input type="text" className="form-control float-right"
                                                       name="fullname"
                                                       value={searchName?.fullname}
                                                       placeholder="Search"
                                                       onChange={handleChange}/>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default"
                                                            onClick={onSubmit}>
                                                        <i className="fas fa-search">
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                                        <Table className="table table-head-fixed text-nowrap" hover>
                                            <thead>
                                            <tr>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Nama Lengkap
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Tempat Lahir
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Tanggal Lahir
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>NIK
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Jenis Kelamin
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Agama
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Golongan Darah
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Status pernikahan
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Jumlah Anak
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Nama Ibu Kandung
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Nama Istri/Suami
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Nama Bank
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Nomer Rekening
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Alamat KTP
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Alamat Domisili
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Kodepos KTP
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Alamat NPWP
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>NIP
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Tanggal Bergabung
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Status Karyawan
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Tipe Karyawan
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Grade
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Status Verifikasi
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}>Verifikasi
                                                </th>
                                                <th style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "center",
                                                    minWidth: "200px",
                                                    maxWidth: "200px"
                                                }}> Edit Data</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {console.log("COBA", employees.data?.data)}
                                            {
                                                karyawan?.data?.data?.map((element, index) => {
                                                    return (
                                                        <tr style={{textAlign: "center"}}>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px",
                                                                position: "sticky"
                                                            }}>{element.fullname === null ? "belum ada data" : element.fullname}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.placeOfBirth === null ? "belum ada data" : element.placeOfBirth}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.dateOfBirth === null ? "belum ada data" : element.dateOfBirth}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.nik === null ? "belum ada data" : element.nik}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.gender === null ? "belum ada data" : element.gender}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.religion === null ? "belum ada data" : element.religion}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.bloodType === null ? "belum ada data" : element.bloodType}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.maritalStatus === null ? "belum ada data" : element.maritalStatus}</td>

                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.numberOfChildren === null ? "belum ada data" : element.numberOfChildren}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.biologicalMothersName === null ? "belum ada data" : element.biologicalMothersName}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.spouseName === null ? "belum ada data" : element.spouseName}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.accountName === null ? "belum ada data" : element.accountName}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.accountNumber === null ? "belum ada data" : element.accountNumber}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.ktpAddress === null ? "belum ada data" : element.ktpAddress}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.residenceAddress === null ? "belum ada data" : element.residenceAddress}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.postalCodeOfIdCard === null ? "belum ada data" : element.postalCodeOfIdCard}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.npwpAddress === null ? "belum ada data" : element.npwpAddress}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.nip === null ? "belum ada data" : element.nip}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.joinDate === null ? "belum ada data" : element.joinDate}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.employeeStatus === null ? "belum ada data" : element.employeeStatus}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element.employeeType === null ? "belum ada data" : element.employeeType}</td>
                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>{element?.grade === null ? "belum ada data" : element?.grade?.grade}</td>

                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}> {element.verifiedHc === true ? "verifikasi" : "belum diverifikasi"}</td>

                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>
                                                                <Link to={'/employee/' + element.id + '/isVerified'}>
                                                                    <button className="btn btn-outline-enigma" disabled ={element?.verifiedHc === true}>
                                                                        <FontAwesomeIcon icon={faCheck}
                                                                        />
                                                                    </button>
                                                                </Link>
                                                            </td>

                                                            <td style={{
                                                                verticalAlign: "middle",
                                                                textAlign: "center",
                                                                maxWidth: "200px",
                                                                minWidth: "200px"
                                                            }}>
                                                                <Link to={'/employee/' + element.id}>
                                                                    <button className="btn btn-outline-enigma">
                                                                        <FontAwesomeIcon icon={faEdit}
                                                                                         className="float-left"/>
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || [],
        error: state.findAllEmployee.error,
        isLoading: state.findAllEmployee.isLoading,
        name: state.findEmployeeByName.data

    }
}
const mapDispatchToProps = {findAll, findByName}
export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);
