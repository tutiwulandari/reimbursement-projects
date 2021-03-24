import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './registerSagas'
import { watchUploadFile, watchBillById } from './billSaga'
import { watchFindAllEmployee, watchFindEmployeeById, watchSaveEmployee, watchUpdateEmployee, watchSaveVerified } from './employeeSagas'
import { watchLoginEmployee } from "./loginSagas";
import { watchFindAllReimburse, watchFindReimburseById, watchFindReimburseByCategory, watchUpdateReimburse } from './reimburseSagas';
import { watchFindAllReimburseFinance, watchFindReimburseFinanceById, watchFindReimburseFinanceByCategory } from './reimburseFinanceSagas';
import { watchFindAllCategory } from './categorySagas';
import { watchFindAllGrade, watchFindGradeById, watchSaveGrade } from "./gradeSagas";
import { watchFindAllContract, watchFindContractById, watchSaveContract, watchUpdateContract } from "./detailContractSagas";
import { watchFindAllCount } from "./dashboardSagas";
import { watchForgotPassword } from './forgotPasswordSagas';


export default function* rootSaga() {
    yield all([
        watchLoginEmployee(), watchRegisterEmployee(), watchForgotPassword(),
        watchFindAllEmployee(), watchFindEmployeeById(), watchUpdateEmployee(), watchSaveEmployee(),
        watchFindAllReimburse(), watchFindReimburseById(), watchFindReimburseByCategory(), watchUpdateReimburse(),
        watchFindAllReimburseFinance(), watchFindReimburseFinanceById(), watchFindReimburseFinanceByCategory(),
        watchFindAllCategory(),
        watchFindAllGrade(), watchFindGradeById(), watchSaveGrade(),
        watchFindAllContract(),watchFindContractById(), watchSaveContract(), watchUpdateContract(),
        watchSaveVerified(),
        watchFindAllCount(),
        watchUploadFile(), watchBillById(),
    ])
}