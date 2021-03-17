import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById } from './reimburseReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee,
    findAllEmployee, findEmployeeById,
    findAllReimburse, findReimburseById,
})

export default rootReducer