import axios from "axios";
// import axios from '../configs/api'
import {
    FIND_ALL_REIMBURSE,
    FIND_ALL_REIMBURSE_FAILURE,
    FIND_ALL_REIMBURSE_SUCCESS, FIND_REIMBURSE_BY_ID, FIND_REIMBURSE_BY_ID_SUCCESS,
} from "../constants/actionConstant";
import { put, takeLatest } from "redux-saga/effects";


function* findAllReimburse() {
    let result = yield axios
        .get('/reimburse')
        .then(response => {
            console.log(response);
            return {
                type: FIND_ALL_REIMBURSE_SUCCESS,
                data: response.data
            }
        })
        .catch(error => {
            console.log(error);
            return {
                type: FIND_ALL_REIMBURSE_FAILURE,
                error
            }
        });
    yield put(result)
}


function* findReimburseById(action) {
    let result = yield axios.get(`/reimburse/${action.id}`)
        .then(response => {
            console.log("FIND BY ID", response)
            return ({
                type: FIND_REIMBURSE_BY_ID_SUCCESS,
                data: response.data
            })
        })
        .catch(error => {
            return ({
                error
            })
        })
    yield put(result)
}


function* findReimburseByCategory(action) {
    let result = yield axios.get(`/employee/${action.id}`)
        .then(response => {
            console.log("FIND BY ID", response)
            return ({
                type: FIND_REIMBURSE_BY_ID_SUCCESS,
                data: response.data
            })
        })
        .catch(error => {
            return ({
                error
            })
        })
    yield put(result)
}


export function* watchFindAllReimburse() {
    yield takeLatest(FIND_ALL_REIMBURSE, findAllReimburse)
}
export function* watchFindReimburseById() {
    yield takeLatest(FIND_REIMBURSE_BY_ID, findReimburseById)
}