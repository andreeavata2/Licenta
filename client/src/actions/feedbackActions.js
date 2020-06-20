import axios from "axios";
import { GET_FEEDBACKS, GET_ERRORS } from "./types";

//get all feedbacks

export const getFeedbacksList = () => dispatch => {
    axios
        .get("http://localhost:5000/api/feedback")
        .then(res => dispatch({
            type: GET_FEEDBACKS,
            payload: res.data.data
        }))
}

// Add feedback
export const addFeedback = (feedbackData) => dispatch => {
    axios
        .post("http://localhost:5000/api/feedback/addFeedback", feedbackData)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};