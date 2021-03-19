import {
    FIND_ALL_EMPLOYEE, FIND_EMPLOYEE_BY_ID
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