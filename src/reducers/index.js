import { combineReducers } from 'redux';
import { registerEmployees } from './registerReducer';
import { findAllEmployee, findEmployeeById, saveEmployee, updateEmployee, saveVerified} from "./employeeReducer";
import { loginEmployee } from "./loginReducer";
import { findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburse } from './reimburseReducer';
import { findAllCategory } from './categoryReducer';
import { findAllGrade, findGradeById, saveGrade, updateGrade } from "./gradeReducer";
import { findAllContract, findContractById, updateContract, saveContract } from "./detailContractReducer";
import { findAllCount } from "./dashboardReducer";
import { forgotPassword } from './forgotPasswordReducer';
import { findAllReimburseFinance, findReimburseFinanceById, updateReimburseFinance } from './reimburseFinanceReducer';
import { uploadFile, findBillById } from './billReducer';

const rootReducer = combineReducers({
    registerEmployees, loginEmployee, forgotPassword,
    findAllEmployee, findEmployeeById, saveEmployee, updateEmployee,saveVerified,
    findAllReimburse, findReimburseById, findReimburseByCategory, updateReimburse,
    findAllCategory,
    findAllGrade, findGradeById, saveGrade, updateGrade,
    findAllContract, findContractById, updateContract, saveContract,
    findAllCount,
    findAllReimburseFinance, findReimburseFinanceById, updateReimburseFinance,
    uploadFile, findBillById
})

export default rootReducer