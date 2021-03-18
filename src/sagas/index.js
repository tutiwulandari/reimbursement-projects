import { all } from 'redux-saga/effects'
import { watchRegisterEmployee} from './registerSagas'
import {watchFindAllEmployee, watchFindEmployeeById, watchSaveEmployee, watchUpdateEmployee} from './employeeSagas'
import {watchLoginEmployee} from "./loginSagas";
import {watchFindAllGrade, watchFindGradeById, watchSaveGrade, watchUpdateGrade} from "./gradeSagas";

export default function* rootSaga() {
    yield all([
        watchRegisterEmployee(), watchFindAllEmployee(), watchFindEmployeeById(), watchLoginEmployee(), watchUpdateEmployee(), watchSaveEmployee(),
        watchFindAllGrade(), watchFindGradeById(), watchSaveGrade(), watchUpdateGrade()
    ])
}