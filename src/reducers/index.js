import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById, saveEmployee, updateEmployee } from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import { findAllContract, findContractById, updateContract, saveContract } from "./detailContractReducer";
import { findAllCount } from "./dashboardReducer";
import { forgotPassword } from './forgotPasswordReducer';
import { findAllReimburseFinance, findReimburseFinanceById, updateReimburse } from './reimburseFinanceReducer';
import { uploadFile, findBillById } from './billReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee, forgotPassword,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee,
    findAllReimburse, findReimburseById, findReimburseByCategory,
    findAllCategory,
    findAllGrade, findGradeById, saveGrade, updateGrade,
    findAllContract, findContractById, updateContract, saveContract,
    findAllCount,
    findAllReimburseFinance, findReimburseFinanceById, updateReimburse,
    uploadFile, findBillById
})

export default rootReducer