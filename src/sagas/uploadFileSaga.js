import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
// import axios from './../configs/api';

import {
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE
} from '../constants/actionConstant'


function* uploadFile(action) {
    let result = yield axios
        .post('bill/{id}/upload/file/admin', action.data)
        .then(response => {
            return {
                type: UPLOAD_FILE_SUCCESS,
                data: response
            }
        })
        .catch(error => {
            return {
                type: UPLOAD_FILE_FAILURE,
                error
            }
        });
    yield put(result)
}


export function* watchUploadFile() {
    yield takeLatest(UPLOAD_FILE, uploadFile)
}