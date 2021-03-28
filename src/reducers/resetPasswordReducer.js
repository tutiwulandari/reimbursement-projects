import {
    RESET_PASSWORD, RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS,
} from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}


export const resetPassword= (state = {...initialState}, action) => {
    switch (action.type) {
        case RESET_PASSWORD:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case RESET_PASSWORD_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            }
    }
}