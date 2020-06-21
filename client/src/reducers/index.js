import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import studentReducers from "./studentReducers";
import feedbackReducers from "./feedbackReducers";
import announcementReducers from "./announcementReducers";

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    student: studentReducers,
    feedbacks: feedbackReducers,
    announcements: announcementReducers
});