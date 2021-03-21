import axios from "axios";
import {
    FIND_ALL_CONTRACT,
    FIND_ALL_CONTRACT_FAILURE, FIND_ALL_CONTRACT_SUCCESS,
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";

function* findAllContract() {
    let result = yield axios
        .get('/contract')
        .then(response => {
            return {
                type: FIND_ALL_CONTRACT_SUCCESS,
                data: response.data
            }
        })
        .catch(error => {
            console.log(error);
            return {
                type: FIND_ALL_CONTRACT_FAILURE,
                error
            }
        });
    yield put(result)
}


export function* watchFindAllContract() {
    yield takeLatest(FIND_ALL_CONTRACT,findAllContract)
}