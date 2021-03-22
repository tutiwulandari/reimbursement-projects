import React, { useState, useRef } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { findReimburseId } from "../../actions/reimburseAction";
import { convert_to_rupiah, convert_date_format } from './../../utils/converter';

/* Just for UI */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody } from 'reactstrap';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
/* Just for UI */


const ReimburseRow = ({ data, index, reimburse, findReimburseId }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const getId = id => {
        findReimburseId(id)
    }

    /* Tooltip */
    const renderTooltip = props => (
        <Tooltip {...props}>Has been validated by admin finance</Tooltip>
    );

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.categoryId.categoryName}</td>
            <td>{data.employeeId.fullname}</td>
            <td>
                {
                    data.statusSuccess == true ?
                        <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                            <button className="btn btn-outline-enigma">
                                Success <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </OverlayTrigger> :
                        <select className="custom-select td-width text-enigma border-enigma">
                            <option selected={data.statusOnHc == true}> Waiting</option>
                            <option selected={data.statusOnFinance == true}> Accepted</option>
                            <option selected={data.statusReject == true}> Rejected </option>
                        </select>

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
        </tr >
    )
}

/* Reducer */
const mapStateToProps = (state) => {
    return {
        reimburse: state.findReimburseById.data || [],
        isLoading: state.findReimburseById.isLoading,
    }
}

/* Action */
const mapDispatchToProps = { findReimburseId }

export default connect(mapStateToProps, mapDispatchToProps)(ReimburseRow);