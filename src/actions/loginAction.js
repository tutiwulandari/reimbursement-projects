import {LOGIN_EMPLOYEE} from "../constants/actionConstant";

export function loginEmployee(data) {
    return {
        type: LOGIN_EMPLOYEE,
        data
    }
}