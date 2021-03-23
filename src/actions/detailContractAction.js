import {FIND_ALL_CONTRACT, FIND_CONTRACT_BY_ID, SAVE_CONTRACT, UPDATE_CONTRACT} from "../constants/actionConstant";

export function findAll() {
    return {
        type: FIND_ALL_CONTRACT

    }
}

export function findById(id) {
    console.log("ini action", id)
    return {
        type: FIND_CONTRACT_BY_ID,
        id
    }
}

export function save(model) {
    console.log("save action model", model)
    return {
        type: SAVE_CONTRACT,
        model
    }
}

export function update(payload) {
    console.log("update contract action")
    return {
        type: UPDATE_CONTRACT,
        payload
    }
}