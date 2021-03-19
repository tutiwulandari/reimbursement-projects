import {
    FIND_ALL_EMPLOYEE,
    FIND_ALL_EMPLOYEE_FAILURE,
    FIND_ALL_EMPLOYEE_SUCCESS,
    FIND_EMPLOYEE_BY_ID,
    FIND_EMPLOYEE_BY_ID_SUCCESS,
    FIND_EMPLOYEE_BY_ID_FAILURE,
    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_SUCCESS,
    SAVE_EMPLOYEE,
    SAVE_EMPLOYEE_SUCCESS,
    SAVE_EMPLOYEE_FAILURE
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
            console.log("INI REDUCER", data)
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

export const findEmployeeById = (state = {...initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_EMPLOYEE_BY_ID:
            return {
                ...state,
                data:  null,
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
export const updateEmployee = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_EMPLOYEE:
            console.log("updateing employee in reducers")
            return true
        case UPDATE_EMPLOYEE_SUCCESS:
            console.log("updateing employee success in reducers")
            return true
        default:
            return false;
    }

}

export const saveEmployee = (state = {...initialState}, action) => {
    console.log("save employee reducer")
    switch (action.type) {
        case SAVE_EMPLOYEE:
            console.log("save employee reducer")
            console.log("ini reducer", action.data)
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_EMPLOYEE_SUCCESS:
            console.log("SUCCESS",action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_EMPLOYEE_FAILURE:
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