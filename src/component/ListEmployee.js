import {findAll} from "../actions/employeeAction";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import LayoutRoutesHc from "../pages/layoutHc/LayoutRoutesHc";

function ListEmployee({findAll, employees, error, isLoading}) {

    const [data, setData] = useState({})

    useEffect(() => {
        findAll()
    }, []);

    console.log("LIST", employees)

    return (
        <div>
            <LayoutRoutesHc/>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">List Karyawan </h3>

                    <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                            <input type="text" name="table_search" class="form-control float-right"
                                   placeholder="Search"/>
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                    <i class="fas fa-search"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card-body table-responsive p-0" style={{height: "300px", overflowX: "auto"}}>
                    <table class="table table-head-fixed text-nowrap">
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
                            }}>Id Karyawan
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
                            }}>Action
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            employees?.data?.data.map((element, index) => {
                                return (
                                    <tr style={{textAlign: "center"}}>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.fullname}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.placeOfBirth}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.dateOfBirth}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.nik}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.gender}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.religion}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.bloodType}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.maritalStatus}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}> {element.verifiedHc == true ? "verified" : "not verified"}</td>

                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>
                                            {/*<Verifikasi/>*/}
                                            <Button> <FontAwesomeIcon icon={faCheck}/></Button>
                                        </td>

                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.numberOfChildren}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.biologicalMothersName}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.spouseName}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.accountName}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.accountNumber}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.ktpAddress}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.residenceAddress}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.postalCodeOfIdCard}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.npwpAddress}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.nip}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.joinDate}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.employeeStatus}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.employeeType}</td>
                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>{element.grade.grade}</td>

                                        <td style={{
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                            maxWidth: "200px",
                                            minWidth: "200px"
                                        }}>
                                            <Link to={'/employee/' + element.id + '/edit'}>
                                                <Button style={{backgroundColor: "#292961"}}>
                                                    <FontAwesomeIcon icon={faEdit} className="float-left"/>
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || [],
        error: state.findAllEmployee.error,
        isLoading: state.findAllEmployee.isLoading

    }
}
const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);