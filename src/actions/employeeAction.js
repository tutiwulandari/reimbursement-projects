import {
    FIND_ALL_EMPLOYEE, FIND_EMPLOYEE_BY_ID, FIND_VERIFIED_BY_ID, SAVE_EMPLOYEE, SAVE_VERIFIED, UPDATE_EMPLOYEE
} from '../constants/actionConstant';


export function findAll() {
    return {
        type: FIND_ALL_EMPLOYEE
    }
}

export function findById(id) {
    return {
        type:FIND_EMPLOYEE_BY_ID,
        id
    }
}

export function save(model) {
    return {
        type: SAVE_EMPLOYEE,
        model
    }
}

export function update(payload) {
    return {
        type: UPDATE_EMPLOYEE,
        payload
    }
}


export function saveVerified(model) {
    console.log("save action employee", model)
    return {
        type: SAVE_VERIFIED,
        model
    }
}

export function findByIdVerified(id) {
    console.log("ini action", id)
    return {
        type:FIND_VERIFIED_BY_ID,
        id
    }
}