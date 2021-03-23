import {
UPLOAD_FILE, FIND_BILL_BY_ID
} from '../constants/actionConstant';


export function uploadFile(data) {
    return {
        type: UPLOAD_FILE,
        data
    }
}

export function findById(id) {
    return {
        type: FIND_BILL_BY_ID,
        id
    }
}