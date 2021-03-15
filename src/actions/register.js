import {
    REGISTER_EMPLOYEE,
    REGISTER_EMPLOYEE_SUCCESS,
    REGISTER_EMPLOYEE_FAILURE
} from '../constants/actions';


export function registerEmployee(data) {
    return {
        type: REGISTER_EMPLOYEE,
        data
    }
}