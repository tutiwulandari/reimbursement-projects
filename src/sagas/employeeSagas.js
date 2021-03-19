import axios from "axios";
// import axios from '../configs/api'
import {
    FIND_ALL_EMPLOYEE,
    FIND_ALL_EMPLOYEE_FAILURE,
    FIND_ALL_EMPLOYEE_SUCCESS, FIND_EMPLOYEE_BY_ID, FIND_EMPLOYEE_BY_ID_SUCCESS,
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";


function* findAllEmployee() {
    let result = yield axios
        .get('/employee')
        .then(response => {
            console.log("INI SAGAS" , response)
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

function* findEmployeeById(action) {
    console.log("findEmployee sagas")
    let result = yield axios.get(`/employee/${action.id}`)
        .then(response => {
            console.log("FIND BY ID", response)
            return({
                type:FIND_EMPLOYEE_BY_ID_SUCCESS,
                data: response.data
            })
        })
        .catch(error=> {
            console.log("Error find employee by id sagas, error")
            return({
                error
            })
        })
    yield put(result)
}

export function* watchFindAllEmployee() {
    yield takeLatest(FIND_ALL_EMPLOYEE,findAllEmployee)
}
export function* watchFindEmployeeById() {
    yield takeLatest(FIND_EMPLOYEE_BY_ID, findEmployeeById)
}