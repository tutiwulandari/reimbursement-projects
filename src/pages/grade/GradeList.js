import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {findAll, findById, save} from '../../actions/gradeAction';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-solid-svg-icons/faSave';
import Swal from 'sweetalert2'
import {convert_to_rupiah} from '../../utils/converter';
import {Table} from "reactstrap";
import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";


function GradeList({findAll, findById, save, savedGrade, grades, grade}) {

    const [isEdit, setIsEdit] = useState(false)
    const [number, setNumber] = useState("")
    const [data, setData] = useState({})

    const [coba, setCoba] = useState({
        giveBirthCost: "0"
    })

    useEffect(() => {
        findAll()
        setCoba({
            giveBirthCost: "_giveBirthCost"
        })
    }, [])

    useEffect(() => {
        if (savedGrade) {
            findAll()
        }
    }, [savedGrade])

    useEffect(() => {
        if (number != "") {
            setData(grade)
        }
    }, [grade])


    console.log("data", data);

    const handleChange = (e) => {
        let name = e.target.name
        let value = parseInt(e.target.value)
        if (isNaN(value)) value = 0
        setData({...data, [name]: value})
    }

    const handleUpdate = (number) => {
        setNumber(number)
        setIsEdit(true)
        findById(number)

        if (isEdit && number == grade.id) {
            Swal.fire({
                title: 'Konfirmasi',
                text: "Anda yakin ingin mengubah data?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#292961',
                cancelButtonColor: '#292961',
                confirmButtonText: 'Ubah Data',
                cancelButtonText: 'Tidak',
            }).then(result => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Data berhasil diubah',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setIsEdit(false)
                    save(data)
                } else {

                }
            })
        }
    }

    return (
        <div>
            <Header/>
            <Menu/>
            <h1 style={{color: "black", marginTop: "20px", textAlign: "center"}}> LIST CLAIM REIMBURSEMENT</h1>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card" style={{height: "70vh"}}>
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width: "150px"}}>
                                                <input type="text" name="table_search"
                                                       className="form-control float-right"
                                                       placeholder="Search"/>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search">
                                                        </i>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-body table-responsive p-0" style={{height: "300px"}}>

                                        <Table className="table table-head-fixed text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>Grade</th>
                                                <th>Biaya Melahirkan</th>
                                                <th>Biaya Kacamata</th>
                                                <th>Biaya Hotel</th>
                                                <th>Biaya Makan</th>
                                                <th>Biaya Transportasi</th>
                                                <th>Aksi</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                grades.data?.map((element, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                {
                                                                    isEdit && number == element.id ?
                                                                        <input className="form-control" type="text"
                                                                               value={data?.giveBirthCost}
                                                                               onChange={handleChange}
                                                                               name="giveBirthCost"/>
                                                                        : convert_to_rupiah(element.giveBirthCost)
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    isEdit && number == element.id ?
                                                                        <input className="form-control" type="text"
                                                                               value={data?.hotelCost}
                                                                               onChange={handleChange}
                                                                               name="hotelCost"/>
                                                                        : convert_to_rupiah(element.hotelCost)
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    isEdit && number == element.id ?
                                                                        <input className="form-control" type="text"
                                                                               value={data?.glasessCost}
                                                                               onChange={handleChange}
                                                                               name="glasessCost"/>
                                                                        : convert_to_rupiah(element.glasessCost)
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    isEdit && number == element.id ?
                                                                        <input className="form-control" type="text"
                                                                               value={data?.transportationCost}
                                                                               onChange={handleChange}
                                                                               name="transportationCost"/>
                                                                        : convert_to_rupiah(element.transportationCost)
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    isEdit && number == element.id ?
                                                                        <input className="form-control" type="text"
                                                                               value={data?.mealCost}
                                                                               onChange={handleChange} name="mealCost"/>
                                                                        : convert_to_rupiah(element.mealCost)
                                                                }
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-outline-enigma"
                                                                        onClick={() => handleUpdate(element.id)}>
                                                                    {
                                                                        isEdit && number == element.id ?
                                                                            <FontAwesomeIcon icon={faSave}/>
                                                                            : <FontAwesomeIcon icon={faEdit}/>
                                                                    }
                                                                </button>
                                                                {/* <Link to={`/hc/grade/${element.id}`} className="btn btn-outline-enigma">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Link> */}
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


/* Reducer */
const mapStateToProps = (state) => {
    return {
        grades: state.findAllGrade.data || [],
        grade: state.findGradeById.data || [],
        savedGrade: state.saveGrade.data,
        isLoading: state.findAllGrade.isLoading,
    }
}

/* Action */
const mapDispatchToProps = {findAll, findById, save}

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);