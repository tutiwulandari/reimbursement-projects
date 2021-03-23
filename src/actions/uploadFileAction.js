import {
    UPLOAD_FILE
} from '../constants/actionConstant';


export function uploadFile(data) {
    return {
        type: UPLOAD_FILE,
        data
    }
}