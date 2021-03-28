import {RESET_PASSWORD} from "../constants/actionConstant";

export function reset(model) {
    return {
        type: RESET_PASSWORD,
        model
    }
}