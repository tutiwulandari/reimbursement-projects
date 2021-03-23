import {
    FIND_ALL_EMPLOYEE, FIND_EMPLOYEE_BY_ID, SAVE_EMPLOYEE, UPDATE_EMPLOYEE
} from '../constants/actionConstant';


export function findAll() {
    console.log("ACTION")
    return {
        type: FIND_ALL_EMPLOYEE
    }
}

export function findById(id) {
    console.log("ini action", id)
    return {
        type:FIND_EMPLOYEE_BY_ID,
        id
    }
}

export function save(model) {
    console.log("save action employee", model)
    return {
        type: SAVE_EMPLOYEE,
        model
    }
}

export function update(payload) {
    console.log("update employee action")
    return {
        type: UPDATE_EMPLOYEE,
        payload
    }
}