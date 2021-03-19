import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";

const rootReducer = combineReducers({
    registerEmployees, loginEmployee,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee, 
    findAllReimburse, findReimburseById, findReimburseByCategory,
    findAllCategory
})

export default rootReducer