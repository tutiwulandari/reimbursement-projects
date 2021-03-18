import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee,
    findAllEmployee, findEmployeeById,
    findAllReimburse, findReimburseById, findReimburseByCategory,
    findAllCategory
})

export default rootReducer