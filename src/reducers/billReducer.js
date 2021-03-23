import {
    UPLOAD_FILE, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAILURE,
    FIND_BILL_BY_ID, FIND_BILL_BY_ID_FAILURE, FIND_BILL_BY_ID_SUCCESS
} from '../constants/actionConstant'


const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function uploadFile(state = initialState, data) {
    switch (data.type) {
        case UPLOAD_FILE:
            return {
                ...state,
                isLoading: true
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case UPLOAD_FILE_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: data.error
            }
        default:
            return state
    }
}


export const findBillById = (state = initialState, action) => {
    switch (action.type) {
        case FIND_BILL_BY_ID:
            return {
                ...state,
                isLoading: true
            };
        case FIND_BILL_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case FIND_BILL_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            }
    }
}