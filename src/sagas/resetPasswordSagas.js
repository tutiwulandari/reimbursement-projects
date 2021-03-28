import axios from "axios";
import {
    RESET_PASSWORD, RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS,
    SAVE_EMPLOYEE_FAILURE,
    SAVE_EMPLOYEE_SUCCESS
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";

function* resetPassword(action) {
    let model = action.model;
    let result = yield axios
        .put(`/employee/ganti-password"`, model)
        .then(data => {
            console.log("SAVE SAGAS", data)
            return {
                type: RESET_PASSWORD_SUCCESS,
                data: data
            };
        })
        .catch(err => {
            console.log("error save sagas: " + err)
            return {
                type: RESET_PASSWORD_FAILURE,
                error: err

            }
        })
    yield put(result)
}

export function* watchResetPassword() {
    yield takeLatest(RESET_PASSWORD, resetPassword)
}