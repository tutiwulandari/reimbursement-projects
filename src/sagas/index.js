import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './registerSagas'
import {
    watchFindAllEmployee,
    watchFindEmployeeById, watchFindEmployeeByName,
    watchSaveEmployee, watchSaveVerified,
    watchUpdateEmployee
} from './employeeSagas'
import { watchLoginEmployee } from "./loginSagas";
import { watchFindAllReimburse, watchFindReimburseById, watchFindReimburseByCategory } from './reimburseSagas';
import { watchFindAllReimburseFinance, watchFindReimburseFinanceById, watchFindReimburseFinanceByCategory } from './reimburseFinanceSagas';
import { watchFindAllCategory } from './categorySagas';
import { watchFindAllGrade, watchFindGradeById, watchSaveGrade } from "./gradeSagas";
import {
    watchFindAllContract,
    watchFindContractById,
    watchSaveContract,
    watchUpdateContract
} from "./detailContractSagas";
import {watchFindAllCount} from "./dashboardSagas";
import { watchForgotPassword } from './forgotPasswordSagas';


export default function* rootSaga() {
    yield all([
        watchLoginEmployee(), watchRegisterEmployee(), watchForgotPassword(),
        watchFindAllEmployee(), watchFindEmployeeById(), watchUpdateEmployee(), watchSaveEmployee(),
        watchFindAllReimburse(), watchFindReimburseById(), watchFindReimburseByCategory(),
        watchFindAllReimburseFinance(), watchFindReimburseFinanceById(), watchFindReimburseFinanceByCategory(),
        watchFindAllCategory(),
        watchFindAllGrade(), watchFindGradeById(), watchSaveGrade(),
        watchFindAllContract(),watchFindContractById(), watchUpdateContract(),watchSaveContract(),
        watchFindAllCount(),
        watchSaveVerified(),
        watchFindEmployeeByName()
    ])
}