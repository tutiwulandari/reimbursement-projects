import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './registerSagas'
import {watchFindAllEmployee, watchFindEmployeeById, watchSaveEmployee, watchUpdateEmployee} from './employeeSagas'
import { watchLoginEmployee } from "./loginSagas";
import { watchFindAllReimburse, watchFindReimburseById, watchFindReimburseByCategory } from './reimburseSagas';
import { watchFindAllCategory } from './categorySagas';
import {watchFindAllGrade, watchFindGradeById, watchSaveGrade, watchUpdateGrade} from "./gradeSagas";


export default function* rootSaga() {
    yield all([
        watchLoginEmployee(), watchRegisterEmployee(),
        watchFindAllEmployee(), watchFindEmployeeById(), watchUpdateEmployee(), watchSaveEmployee(),
        watchFindAllReimburse(), watchFindReimburseById(), watchFindReimburseByCategory(),
        watchFindAllCategory(),
        watchFindAllGrade(), watchFindGradeById(), watchSaveGrade(), watchUpdateGrade(),
    ])
}