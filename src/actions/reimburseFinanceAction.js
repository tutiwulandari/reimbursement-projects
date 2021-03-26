import {
    FIND_ALL_REIMBURSE_FINANCE,
    FIND_REIMBURSE_FINANCE_BY_ID,
    FIND_REIMBURSE_FINANCE_BY_CATEGORY,
    UPDATE_REIMBURSE_FINANCE
} from '../constants/actionConstant';


export function findAllReimburseFinance() {
    return {
        type: FIND_ALL_REIMBURSE_FINANCE
    }
}

export function findReimburseFinanceId(id) {
    return {
        type: FIND_REIMBURSE_FINANCE_BY_ID,
        id
    }
}

export function findByCategory(id) {
    return {
        type: FIND_REIMBURSE_FINANCE_BY_CATEGORY,
        data: {
            categoryId: id
        }
    }
}

export function updateReimburseFinance(model) {
    console.log("status action", model);
    return {
        type: UPDATE_REIMBURSE_FINANCE,
        model
    }
}

