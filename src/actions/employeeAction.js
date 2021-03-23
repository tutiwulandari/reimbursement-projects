import {
    FIND_ALL_EMPLOYEE, FIND_EMPLOYEE_BY_ID, SAVE_EMPLOYEE, UPDATE_EMPLOYEE
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