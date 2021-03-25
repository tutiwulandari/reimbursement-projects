import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import {
    findAllEmployee,
    findEmployeeById,
    saveEmployee,
    updateEmployee,
    saveVerified,
    findEmployeeByName
} from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburse } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import { findAllContract, findContractById, updateContract, saveContract } from "./detailContractReducer";
import { findAllCount } from "./dashboardReducer";
import { forgotPassword } from './forgotPasswordReducer';
import { findAllReimburseFinance, findReimburseFinanceById, updateReimburseFinance } from './reimburseFinanceReducer';
import {findBillById, updateFile, uploadFile} from "../actions/billAction";


const rootReducer = combineReducers({
    registerEmployees, loginEmployee, forgotPassword,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee,saveVerified,
    findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburseFinance,
    findAllCategory, updateReimburse,
    findAllGrade, findGradeById, saveGrade, updateGrade,
    findAllContract, findContractById, updateContract, saveContract,
    findAllCount,
    findAllReimburseFinance, findReimburseFinanceById,
    findEmployeeByName,
    uploadFile, findBillById, updateFile,
})

export default rootReducer