import {
   FIND_ALL_EMPLOYEE,
   FIND_ALL_EMPLOYEE_SUCCESS,
   FIND_ALL_EMPLOYEE_FAILURE
} from '../constants/actions';


export function findAll() {
    return {
        type: FIND_ALL_EMPLOYEE
    }
}