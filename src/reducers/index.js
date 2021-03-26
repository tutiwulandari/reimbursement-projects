import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import {
    findAllEmployee,
    findEmployeeById,
    saveEmployee,
    updateEmployee,
    saveVerified,
    findEmployeeByName, findEmployeeByStatus
} from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburse } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import { findAllContract, findContractById, updateContract, saveContract } from "./detailContractReducer";
import { findAllCount } from "./dashboardReducer";
import { forgotPassword } from './forgotPasswordReducer';
import { findAllReimburseFinance, findReimburseFinanceById, updateReimburseFinance, findReimburseFinanceByCategory } from './reimburseFinanceReducer';
import { uploadFile, findBillById, updateFile } from './billReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee, forgotPassword,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee,saveVerified,
    findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburseFinance,
    findAllCategory, updateReimburse,
    findAllGrade, findGradeById, saveGrade, updateGrade,
    findAllContract, findContractById, updateContract, saveContract,
    findAllCount,
    findAllReimburseFinance, findReimburseFinanceById, findReimburseFinanceByCategory,
    findEmployeeByName,
    uploadFile, findBillById, updateFile,
    findEmployeeByStatus
})

export default rootReducer