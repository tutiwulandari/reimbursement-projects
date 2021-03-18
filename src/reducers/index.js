import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import {findAllEmployee, updateEmployee} from "./employeeReducer";
import {findEmployeeById,saveEmployee} from "./employeeReducer";
import {loginEmployee} from "./loginReducer";
import {findAllGrade, findGradeById, saveGrade, updateGrade} from "./gradeReducer";

const rootReducer = combineReducers({
    registerEmployees,
    findAllEmployee,
    findEmployeeById,
    updateEmployee,
    loginEmployee,
    saveEmployee,
    findAllGrade,
    findGradeById,
    updateGrade,
    saveGrade



})

export default rootReducer