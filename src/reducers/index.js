import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById, saveEmployee, updateEmployee } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import {findAllContract, findContractById, updateContract, saveContract} from "./detailContractReducer";

const rootReducer = combineReducers({
    registerEmployees, loginEmployee,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee, 
    findAllReimburse, findReimburseById, findReimburseByCategory,
    findAllCategory,
    findAllGrade, findGradeById, saveGrade, updateGrade,
    findAllContract, findContractById, updateContract, saveContract
})

export default rootReducer