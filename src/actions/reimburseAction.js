import {
    FIND_ALL_REIMBURSE, FIND_REIMBURSE_BY_ID
} from '../constants/actionConstant';


export function findAll() {
    return {
        type: FIND_ALL_REIMBURSE
    }
}

export function findById(id) {
    return {
        type: FIND_REIMBURSE_BY_ID,
        id
    }
}