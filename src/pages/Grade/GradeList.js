import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Navbar from '../../component/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';


export default function GradeList() {
    return (
        <div className="container">
            <Navbar />

            <div className="row mt-5">
                <div className="offset-md-9 col-md-3">
                    <input className="form-control rounded-pill search-input text-enigma border-enigma" type="text" placeholder="Search employee.." />
                </div>
            </div>

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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
