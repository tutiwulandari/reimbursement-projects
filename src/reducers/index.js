import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById, saveEmployee, updateEmployee } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import { forgotPassword } from './forgotPasswordReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee, forgotPassword,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee, 
    findAllReimburse, findReimburseById, findReimburseByCategory,
    findAllCategory,
    findAllGrade, findGradeById, saveGrade, updateGrade, 
})

export default rootReducer