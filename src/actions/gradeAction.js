import {FIND_ALL_GRADE, FIND_GRADE_BY_ID, SAVE_GRADE, UPDATE_GRADE} from "../constants/actionConstant";


export function findAll() {
    return {
        type: FIND_ALL_GRADE
    }
}

export function findById(id) {
    console.log("ini action", id)
    return {
        type:FIND_GRADE_BY_ID,
        id
    }
}

export function save(model) {
    console.log("save action employee")
    return {
        type: SAVE_GRADE,
        model
    }
}

export function update(payload) {
    console.log("update employee action")
    return {
        type: UPDATE_GRADE,
        payload
    }
}