import {FIND_ALL_CONTRACT, FIND_ALL_CONTRACT_FAILURE, FIND_ALL_CONTRACT_SUCCESS} from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function findAllContract(state = initialState, data) {
    switch (data.type) {
        case FIND_ALL_CONTRACT:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ALL_CONTRACT_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_CONTRACT_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: data.error
            }
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            }
    }
}