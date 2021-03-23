import {
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE
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