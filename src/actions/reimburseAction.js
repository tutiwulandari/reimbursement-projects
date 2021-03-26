import {
    UPDATE_REIMBURSE,
    FIND_ALL_REIMBURSE, 
    FIND_REIMBURSE_BY_ID, 
    FIND_REIMBURSE_BY_CATEGORY
} from '../constants/actionConstant';


export function findAllReimburse() {
    return {
        type: FIND_ALL_REIMBURSE
    }
}

export function findReimburseId(id) {
    return {
        type: FIND_REIMBURSE_BY_ID,
        id
    }
}

export function findByCategory(id) {
    return {
        type: FIND_REIMBURSE_BY_CATEGORY,
        data: {
            categoryId: id
        }

    }
}

export function updateReimburse(model) {
    return {
        type: UPDATE_REIMBURSE,
        model
    }
}