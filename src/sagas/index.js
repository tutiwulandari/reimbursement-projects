import { all } from 'redux-saga/effects'
import { watchRegisterEmployee } from './register'

export default function* rootSaga() {
    yield all([
        watchRegisterEmployee()
    ])
}