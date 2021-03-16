import { combineReducers } from 'redux';
import { registerEmployees } from './register';
import {findAllEmployee} from "./employee";

const rootReducer = combineReducers({
    registerEmployees,
    findAllEmployee
})

export default rootReducer