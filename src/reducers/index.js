import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import {findAllEmployee} from "./employeeReducer";
import {findEmployeeById,saveEmployee} from "./employeeReducer";
import {loginEmployee} from "./loginReducer";

const rootReducer = combineReducers({
    registerEmployees,
    findAllEmployee,
    findEmployeeById,
    loginEmployee,
    saveEmployee
})

export default rootReducer