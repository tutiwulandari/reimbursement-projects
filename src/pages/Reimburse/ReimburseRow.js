import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faEdit, faMoneyCheck, faPause, faPencilRuler, faSortAmountDown, faSpinner, faSquare, faTimes, faTimesCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom'

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from "../../../src/assets/image/modal_detail.svg";

const ReimburseRow = ({ data, index }) => {

    // const [dropdownOpen, setOpen] = useState(false)
    // const toggle = () => setOpen(!dropdownOpen)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const textInput = useRef();
    const [storage, setStorage] = useState({})

    let local = localStorage.getItem("data")
    local = JSON.parse(local)
    console.log(local);

    const saveLocalStorage = () => {
        setStorage(textInput.current.innerText)
        localStorage.setItem("data", JSON.stringify(storage))
    }

    const renderTooltip = props => (
        <Tooltip {...props}>Has been validated by admin finance</Tooltip>
    );
    const statusOverlay = props => (
        <Tooltip {...props} style={{ color: 'red' }}>Has been validated by admin finance</Tooltip>
    );

    return (
        <tr>
            <td>{index + 1}</td>
            <td onClick={saveLocalStorage} ref={textInput}>{data.categoryId.categoryName}</td>
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
                <button className="btn btn-outline-enigma mr-3" onClick={toggle}>
                    Detail
                </button>
            </td>
            
            <Modal className="modal-lg" isOpen={modal} toggle={toggle}>
                <div className="modal-header">
                    <div className="offset-1 col-md-10">
                        <h5 className="modal-title bold">Detail Reimbursement</h5>
                    </div>
                    <div className="col-md-2">
                        <p onClick={toggle} className="ml-4">
                            <FontAwesomeIcon icon={faTimes} />
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
                                <p className="p-enigma-bold">
                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Admin HC
                                </p>
                                <p className="p-enigma-bold">
                                    <i className="fa fa-check-square-o" aria-hidden="true"></i> Admin Finance
                                </p>
                                <p className="p-enigma-bold">
                                    <i className="fa fa-square-o" aria-hidden="true"></i> Done
                                </p>
                            </div>
                        </div>

                        {/* Cost */}
                        <div className="col-md-3">
                            <div className="row">
                                <h5 className="text-enigma mb-3 bold">Cost</h5>
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-money" aria-hidden="true"></i> Biaya Klaim
                                </p>
                                <p className="p-enigma">Rp. 900.000,-</p>
                            </div>
                            <div className="row">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-money" aria-hidden="true"></i> Biaya Reimburse
                                </p>
                                <p className="p-enigma">Rp. 785.000,-</p>
                            </div>
                        </div>

                        {/* User */}
                        <div className="col-md-3">
                            <div className="row">
                                <h5 className="text-enigma mb-3 bold">Employee</h5>
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i> Nama
                                    </p>
                                <p className="p-enigma">Wisa Waskita Arsytama</p>
                            </div>
                            <div className="row">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-address-card-o" aria-hidden="true"></i> NIP
                                    </p>
                                <p className="p-enigma">3212055707980002</p>
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
                                <p className="p-enigma">29 March 2021</p>
                            </div>
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Mulai
                                    </p>
                                <p className="p-enigma">29 March 2021</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Pencairan
                                    </p>
                                <p className="p-enigma">29 March 2021</p>
                            </div>
                            <div className="col-md-3">
                                <p className="p-enigma-bold mb-0">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Tanggal Selesai
                                    </p>
                                <p className="p-enigma">29 March 2021</p>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        </tr >
    )
}

export default ReimburseRow
