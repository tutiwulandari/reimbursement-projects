import {put, takeLatest} from "redux-saga/effects";
import {
     FIND_ALL_GRADE,
    FIND_ALL_GRADE_FAILURE,
    FIND_ALL_GRADE_SUCCESS,
    FIND_GRADE_BY_ID,
    FIND_GRADE_BY_ID_FAILURE,
    FIND_GRADE_BY_ID_SUCCESS,
    SAVE_GRADE, SAVE_GRADE_FAILURE,
    SAVE_GRADE_SUCCESS,
    UPDATE_GRADE
} from "../constants/actionConstant";
import axios from "../configs/api";

function* findAllGrade() {
    let result = yield axios
        .get('/grades')
        .then(response => {
            console.log("INI SAGAS grade" , response)
            return {
                type: FIND_ALL_GRADE_SUCCESS,
                data: response.data
            }
        })
        .catch(error => {
            console.log(error);
            return {
                type: FIND_ALL_GRADE_FAILURE,
                error
            }
        });
    yield put(result)
}


function* findGradeById(action) {
    console.log("findgrade sagas")
    console.log("SAGAS", action)
    let result = yield axios.get(`/grade/${action.id}`)
        .then(response => {
            console.log("FIND BY ID", response)
            return({
                type:FIND_GRADE_BY_ID_SUCCESS,
                data: response.data
            })
        })
        .catch(error=> {
            console.log("Error find employee by id sagas, error")
            return({
                type:FIND_GRADE_BY_ID_FAILURE,
                error
            })
        })
    yield put(result)
}
function* updateGrade(action) {
    let result = false

    yield put ( {
        type: UPDATE_GRADE,
        data: result
    })
}


function* saveGrade(action) {
    let model = action.model;
    let method = 'POST', url = '/grade';
    if(model.id) {
        method ='PUT'
        url += `/${model.id}`
    }

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    }).then(data => {
        return {
            type: SAVE_GRADE_SUCCESS,
            data: data
        };
    })
        .catch(err => {
            console.log("error save sagas: " + err)
            return {
                type: SAVE_GRADE_FAILURE,
                error : err

            }
        })
    yield put(result)
}


export function* watchFindAllGrade() {
    yield takeLatest(FIND_ALL_GRADE,findAllGrade)
}
export function* watchFindGradeById() {
    yield takeLatest(FIND_GRADE_BY_ID, findGradeById)
}
export function* watchUpdateGrade() {
    yield takeLatest(UPDATE_GRADE, updateGrade)
}
export function* watchSaveGrade() {
    yield takeLatest(SAVE_GRADE, saveGrade)
}