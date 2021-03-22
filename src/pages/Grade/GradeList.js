import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Navbar from '../../component/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { findAll, findById, save } from './../../actions/gradeAction';
import { findAllGrade } from './../../reducers/gradeReducer';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import Swal from 'sweetalert2'


function GradeList({ findAll, findById, save, savedGrade, grades, grade }) {

    const [isEdit, setIsEdit] = useState(false)
    const [number, setNumber] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        findAll()
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
        setData({ ...data, [name]: value })
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
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ubah Data',
                cancelButtonText: 'Tidak',
            }).then(result => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Data berhasil diubah',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    setIsEdit(false)
                    save(data)
                }
                else {

                }
            })
        }
    }

    return (
        <div className="container">
            <Navbar />

            <div className="row">
                <div className="col-md-12 mt-5 mb-5">
                    <div className="card">
                        <table className="table table-hover">
                            <thead className="bg-enigma">
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
                                                            <input className="form-control" type="text" value={data?.giveBirthCost} onChange={handleChange} name="giveBirthCost" />
                                                            : element.giveBirthCost
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        isEdit && number == element.id ?
                                                            <input className="form-control" type="text" value={data?.hotelCost} onChange={handleChange} name="hotelCost"/>
                                                            : element.hotelCost
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        isEdit && number == element.id ?
                                                            <input className="form-control" type="text" value={data?.glasessCost} onChange={handleChange} name="glasessCost"/>
                                                            : element.glasessCost
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        isEdit && number == element.id ?
                                                            <input className="form-control" type="text" value={data?.transportationCost} onChange={handleChange} name="transportationCost"/>
                                                            : element.transportationCost
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        isEdit && number == element.id ?
                                                            <input className="form-control" type="text" value={data?.mealCost} onChange={handleChange} name="mealCost"/>
                                                            : element.mealCost
                                                    }
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-enigma"
                                                        onClick={() => handleUpdate(element.id)}>
                                                        {
                                                            isEdit && number == element.id ?
                                                                <FontAwesomeIcon icon={faSave} />
                                                                : <FontAwesomeIcon icon={faEdit} />
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
                        </table>
                    </div>
                </div>
            </div>
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
const mapDispatchToProps = { findAll, findById, save }

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);