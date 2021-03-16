import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import {findAllEmployee} from "./employeeReducer";
import {findEmployeeById} from "./employeeReducer";

const rootReducer = combineReducers({
    registerEmployees,
    findAllEmployee,
    findEmployeeById
})

export default rootReducer