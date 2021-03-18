import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Image from "../../assets/image/details.svg"

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

    return (
        <tr>
            <td>{index + 1}</td>
            <td onClick={saveLocalStorage} ref={textInput}>{data.categoryId.categoryName}</td>
            <td>{data.employeeId.fullname}</td>
            <td>
                {
                    data.statusSuccess == true ? <span className="btn btn-outline-success">Success</span> :
                        <select className="custom-select td-width">
                            <option selected={data.statusOnHc == true}> Waiting</option>
                            <option selected={data.statusOnFinance == true}> Accepted</option>
                            <option selected={data.statusReject == true}> Rejected </option>
                        </select>
                }
            </td>
            <td>
                <button className="btn btn-outline-dark mr-3" onClick={toggle}>
                    Detail
                </button>
                <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={faEdit} />
                </button>

                {/* <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle color="outline-dark" caret></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to={`item/edit`} style={{ width: 100 }} className="btn btn-outline-primary mr-3">Edit</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <button className="btn btn-danger" style={{ width: 100 }}>Delete</button>
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown> */}
            </td>
            <Modal className="modal-lg" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Detail Reimbursement</ModalHeader>
                <ModalBody>
                    <div className="row">
                    <div className="col-md-3">
                            <h6>Category</h6>
                            <p>asd</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Category</h6>
                            <p>asd</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Category</h6>
                            <p>asd</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Category</h6>
                            <p>asd</p>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </tr>
    )
}

export default ReimburseRow
