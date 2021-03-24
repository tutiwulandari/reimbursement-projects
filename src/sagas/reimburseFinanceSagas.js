import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import axios from '../configs/api'

import {
    UPDATE_REIMBURSE_FINANCE_FAILURE, UPDATE_REIMBURSE_FINANCE_SUCCESS, UPDATE_REIMBURSE_FINANCE,
    FIND_ALL_REIMBURSE_FINANCE_FAILURE, FIND_ALL_REIMBURSE_FINANCE_SUCCESS, FIND_ALL_REIMBURSE_FINANCE,
    FIND_REIMBURSE_FINANCE_BY_CATEGORY, FIND_REIMBURSE_FINANCE_BY_CATEGORY_SUCCESS, FIND_REIMBURSE_FINANCE_BY_CATEGORY_FAILURE,
    FIND_REIMBURSE_FINANCE_BY_ID, FIND_REIMBURSE_FINANCE_BY_ID_SUCCESS, FIND_REIMBURSE_FINANCE_BY_ID_FAILURE,
} from "../constants/actionConstant";


function* findAllRimburseFinance() {
    let result = yield axios
        .get('/reimburse/filter-status-finance')
        .then(response => {
            return {
                type: FIND_ALL_REIMBURSE_FINANCE_SUCCESS,
                data: response.data
            }
        })
        .catch(error => {
            return {
                type: FIND_ALL_REIMBURSE_FINANCE_FAILURE,
                error
            }
        });
    yield put(result)
}


function* findRimburseFinanceById(action) {
    let result = yield axios.get(`/reimburse/${action.id}`)
        .then(response => {
            return ({
                type: FIND_REIMBURSE_FINANCE_BY_ID_SUCCESS,
                data: response.data
            })
        })
        .catch(error => {
            return ({
                type: FIND_REIMBURSE_FINANCE_BY_ID_FAILURE,
                error
            })
        })
    yield put(result)
}


function* findRimburseFinanceByCategory(action) {

    let result = yield axios
        .post(`/reimburse/filter-category`, action.data)
        .then(response => {
            return ({
                type: FIND_REIMBURSE_FINANCE_BY_CATEGORY_SUCCESS,
                data: response.data
            })
        })
        .catch(error => {
            return ({
                type: FIND_REIMBURSE_FINANCE_BY_CATEGORY_FAILURE,
                error
            })
        })
    yield put(result)
}


function* updateReimburseFinance(action) {
    console.log("status saga", action);
    let model = action.model;
    let result = yield axios({
        url: `/reimburse/${model.id}/finance`,
        method: 'PUT',
        data: model
    }).then(response => {
        console.log("status response", response);
        return {
            type: UPDATE_REIMBURSE_FINANCE_SUCCESS,
            data: response
        };
    }).catch(err => {
        console.log("status error", err);
        return {
            type: UPDATE_REIMBURSE_FINANCE_FAILURE,
            error: err

        }
    })
    yield put(result)
}


export function* watchFindAllReimburseFinance() {
    yield takeLatest(FIND_ALL_REIMBURSE_FINANCE, findAllRimburseFinance)
}

export function* watchFindReimburseFinanceById() {
    yield takeLatest(FIND_REIMBURSE_FINANCE_BY_ID, findRimburseFinanceById)
}

export function* watchFindReimburseFinanceByCategory() {
    yield takeLatest(FIND_REIMBURSE_FINANCE_BY_CATEGORY, findRimburseFinanceByCategory)
}

export function* watchUpdateReimburseFinance() {
    yield takeLatest(UPDATE_REIMBURSE_FINANCE, updateReimburseFinance)
}