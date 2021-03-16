import axios from "axios";
// import axios from '../configs/api'
import {
    FIND_ALL_EMPLOYEE,
    FIND_ALL_EMPLOYEE_FAILURE,
    FIND_ALL_EMPLOYEE_SUCCESS,
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects";


function* findAllEmployee() {
    let result = yield axios
        .get('/employee')
        .then(response => {
            console.log("INI SAGAS" + response)
            return {
                type: FIND_ALL_EMPLOYEE_SUCCESS,
                data: response.data
            }
        })
        .catch(error => {
            console.log(error);
            return {
                type: FIND_ALL_EMPLOYEE_FAILURE,
                error
            }
        });
    yield put(result)
}


export function* watchFindAllEmployee() {
    yield takeLatest(FIND_ALL_EMPLOYEE,findAllEmployee)
}