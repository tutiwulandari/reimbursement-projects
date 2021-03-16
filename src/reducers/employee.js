import {
    FIND_ALL_EMPLOYEE, FIND_ALL_EMPLOYEE_FAILURE, FIND_ALL_EMPLOYEE_SUCCESS,
} from "../constants/actions";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function findAllEmployee(state = initialState, data) {
    switch (data.type) {
        case FIND_ALL_EMPLOYEE:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ALL_EMPLOYEE_SUCCESS:
            return {
                data: data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_EMPLOYEE_FAILURE:
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
            };
    }
}