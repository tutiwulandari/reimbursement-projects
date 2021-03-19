import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './registerSagas'
import { watchFindAllEmployee, watchFindEmployeeById } from './employeeSagas'
import { watchLoginEmployee } from "./loginSagas";
import { watchFindAllReimburse, watchFindReimburseById, watchFindReimburseByCategory } from './reimburseSagas';
import { watchFindAllCategory } from './categorySagas';

export default function* rootSaga() {
    yield all([
        watchLoginEmployee(), watchRegisterEmployee(),
        watchFindAllEmployee(), watchFindEmployeeById(),
        watchFindAllReimburse(), watchFindReimburseById(), watchFindReimburseByCategory(),
        watchFindAllCategory()
    ])
}