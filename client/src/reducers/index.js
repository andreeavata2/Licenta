import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import studentReducers from "./studentReducers";

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    student: studentReducers
});