import React, { useState, useRef } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { findReimburseFinanceId } from './../../../actions/reimburseFinanceAction';
import { convert_to_rupiah, convert_date_format } from '../../../utils/converter';


/* Just for UI */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody } from 'reactstrap';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ModalFooter } from 'reactstrap';
/* Just for UI */


const ReimburseRowFinance = ({ data, index, reimburse, findReimburseFinanceId }) => {

    /* Tooltip */
    const renderTooltip = props => (
        <Tooltip {...props}>Has been validated by admin finance</Tooltip>
    );

    /* Modal */
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const toggle = () => setModal(!modal);

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const getId = id => {
        findReimburseFinanceId(id)
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.categoryId.categoryName}</td>
            <td>{data.employeeId.fullname}</td>
            <td>
                {data.statusReject ?
                    <button className="btn btn-outline-enigma"> Rejected </button>
                    : data.statusSuccess ?
                        <button className="btn btn-outline-enigma"> Success </button>
                        : data.statusOnFinance ?
                            <button className="btn btn-outline-enigma"> Waiting </button>
                            : ""
                }
            </td>
            <td>
                <button className="btn btn-outline-enigma mr-3"
                    onClick={() => {
                        toggle();
                        getId(data?.id);
                    }}>
                    Detail
                </button>
                <button className="btn btn-outline-enigma"
                    onClick={() => {
                        toggle2();
                        getId(data?.id);
                    }}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </td>


            {/* ============ */}
            {/* MODAL DETAIL */}
            {/* ============ */}

            <Modal className="modal-lg" isOpen={modal} toggle={toggle}>
                <div className="modal-header">
                    <div className="offset-1 col-md-10">
                        <h5 className="modal-title bold">Detail Reimbursement</h5>
                    </div>
                    <div className="col-md-2">
                        <p onClick={toggle} className="ml-4">
                            <FontAwesomeIcon icon={faTimes} className="pointer" />
                        </p>
                    </div>
                </div>
                <ModalBody>
                    {/* Row Pertama */}
                    <div className="row offset-md-1">

                        {/* Status */}
                        <div className="col-md-3">
                            <div className="row">
                                <h5 className="text-enigma mb-3 bold">Status</h5>

                                {reimburse?.statusReject ?
                                    <p className="p-enigma-bold">
                                        <i className="fa fa-times" aria-hidden="true"></i> Rejected
                                    </p>
                                    :
                                    <>
                                        {
                                            reimburse?.statusOnHc ?
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Admin HC
                                                </p>
                                                :
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-square-o" aria-hidden="true"></i> Admin HC
                                                </p>
                                        }
                                        {
                                            reimburse?.statusOnFinance ?
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Admin Finance
                                                </p>
                                                :
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-square-o" aria-hidden="true"></i> Admin Finance
                                                </p>
                                        }
                                        {
                                            reimburse?.statusSuccess ?
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Done
                                                </p>
                                                :
                                                <p className="p-enigma-bold">
                                                    <i className="fa fa-square-o" aria-hidden="true"></i> Done
                                                </p>
                                        }
                                    </>
                                }
                            </div>
                        </div>

                        {/* Cost */}
                        <div className="col-md-3">
                            <div className="row">
                                <h5 className="text-enigma mb-3 bold">Cost</h5>
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-money" aria-hidden="true"></i> Biaya Klaim
                                </p>
                                <p className="p-enigma">{reimburse?.claimFee ? convert_to_rupiah(reimburse.claimFee) : ""}</p>
                            </div>
                            <div className="row">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-money" aria-hidden="true"></i> Biaya Reimburse
                                </p>
                                <p className="p-enigma">{reimburse?.borneCost ? convert_to_rupiah(reimburse.borneCost) : ""}</p>
                            </div>
                        </div>

                        {/* User */}
                        <div className="col-md-3">
                            <div className="row">
                                <h5 className="text-enigma mb-3 bold">Employee</h5>
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i> Nama
                                    </p>
                                <p className="p-enigma">{reimburse?.employeeId?.fullname}</p>
                            </div>
                            <div className="row">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-address-card-o" aria-hidden="true"></i> NIP
                                    </p>
                                <p className="p-enigma">{reimburse?.employeeId?.nip}</p>
                            </div>
                        </div>
                    </div>

                    {/* Row Kedua */}
                    <div className="row mt-3 offset-md-1">

                        <h5 className="text-enigma mb-3 bold">Date</h5>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Pengajuan
                                    </p>
                                <p className="p-enigma">
                                    {reimburse?.dateOfClaimSubmission ? convert_date_format(reimburse.dateOfClaimSubmission) : ""}
                                </p>
                            </div>
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Mulai
                                    </p>
                                <p className="p-enigma">
                                    {reimburse?.startDate ? convert_date_format(reimburse.startDate) : ""}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Pencairan
                                    </p>
                                <p className="p-enigma">
                                    {reimburse?.disbursementDate ? convert_date_format(reimburse.disbursementDate) : ""}
                                </p>
                            </div>
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Selesai
                                    </p>
                                <p className="p-enigma">
                                    {reimburse?.endDate ? convert_date_format(reimburse.endDate) : ""}
                                </p>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </Modal>



            {/* ============ */}
            {/* MODAL UPDATE */}
            {/* ============ */}

            <Modal className="modal-lg" isOpen={modal2} toggle={toggle2}>
                <div className="modal-header">
                    <h5 className="modal-title bold offset-2">Update Reimbursement</h5>
                </div>
                <ModalBody>
                    <div className="row">
                        <div className="offset-2 col-md-4 mb-4">
                            <h6 className="text-enigma mb-3 bold">Status</h6>
                            <select className="custom-select td-width text-enigma border-enigma">
                                <option selected={ reimburse?.statusReject == true }> Rejected </option>
                                <option selected={ reimburse?.statusSuccess == true }> Success </option>
                                <option selected={ reimburse?.statusOnFinance == true }> Waiting </option>
                            </select>
                        </div>
                        {
                            reimburse?.statusSuccess && reimburse?.statusReject != true ?
                                <div className="col-md-4">
                                    <h6 className="text-enigma mb-3 bold">Upload File</h6>
                                    <input type="file" className="form-control" accept="application/pdf" />
                                </div> : ""
                        }
                        <hr />
                        <div className="offset-7 col-md-3 mb-1">
                            <button type="button" onClick={toggle2} className="btn btn-outline-enigma float-right">Cancel</button>
                            <button type="button" onClick={toggle2} className="btn btn-enigma float-right mr-3">Update</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </tr>
    )
}


/* Reducer */
const mapStateToProps = (state) => {
    return {
        reimburse: state.findReimburseFinanceById.data || [],
        isLoading: state.findReimburseFinanceById.isLoading,
    }
}

/* Action */
const mapDispatchToProps = { findReimburseFinanceId }

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseRowFinance);