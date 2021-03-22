import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './registerSagas'
import { watchFindAllEmployee, watchFindEmployeeById, watchSaveEmployee, watchUpdateEmployee } from './employeeSagas'
import { watchLoginEmployee } from "./loginSagas";
import { watchFindAllReimburse, watchFindReimburseById, watchFindReimburseByCategory } from './reimburseSagas';
import { watchFindAllReimburseFinance, watchFindReimburseFinanceById, watchFindReimburseFinanceByCategory } from './reimburseFinanceSagas';
import { watchFindAllCategory } from './categorySagas';
import { watchFindAllGrade, watchFindGradeById, watchSaveGrade } from "./gradeSagas";
import { watchForgotPassword } from './forgotPasswordSagas';


export default function* rootSaga() {
    yield all([
        watchLoginEmployee(), watchRegisterEmployee(), watchForgotPassword(),
        watchFindAllEmployee(), watchFindEmployeeById(), watchUpdateEmployee(), watchSaveEmployee(),
        watchFindAllReimburse(), watchFindReimburseById(), watchFindReimburseByCategory(),
        watchFindAllReimburseFinance(), watchFindReimburseFinanceById(), watchFindReimburseFinanceByCategory(),
        watchFindAllCategory(),
        watchFindAllGrade(), watchFindGradeById(), watchSaveGrade(),
    ])
}