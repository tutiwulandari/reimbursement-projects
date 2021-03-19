import {
    FIND_ALL_EMPLOYEE,
    FIND_ALL_EMPLOYEE_FAILURE,
    FIND_ALL_EMPLOYEE_SUCCESS,
    FIND_EMPLOYEE_BY_ID,
    FIND_EMPLOYEE_BY_ID_SUCCESS,
    FIND_EMPLOYEE_BY_ID_FAILURE
} from "../constants/actionConstant";

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

export const findEmployeeById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case FIND_EMPLOYEE_BY_ID:
            return {
                ...state,
                isLoading: true
            };
        case FIND_EMPLOYEE_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case FIND_EMPLOYEE_BY_ID_FAILURE:
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