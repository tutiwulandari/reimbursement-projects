import { all } from 'redux-saga/effects'
import { watchRegisterEmployee} from './register'
import {watchFindAllEmployee} from './employee'

export default function* rootSaga() {
    yield all([
        watchRegisterEmployee(), watchFindAllEmployee()
    ])
}