import { all } from 'redux-saga/effects'
import { watchRegisterEmployee} from './registerSagas'
import {watchFindAllEmployee, watchFindEmployeeById} from './employeeSagas'
import {watchLoginEmployee} from "./loginSagas";

export default function* rootSaga() {
    yield all([
        watchRegisterEmployee(), watchFindAllEmployee(), watchFindEmployeeById(), watchLoginEmployee()
    ])
}