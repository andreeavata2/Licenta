import axios from "axios";
import {
  GET_QUESTIONS,
  GET_ERRORS,
  DELETE_QUESTION,
  UPDATE_QUESTION,
} from "./types";

//get all questions

export const getQuestionsList = () => (dispatch) => {
  axios.get("http://localhost:5000/api/question").then((res) =>
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.data,
    })
  );
};

// Add question
export const addQuestion = (questionData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/question/addQuestion", questionData)
    .then((res) => {
        dispatch(getQuestionsList()) })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete question
export const deleteQuestion = (questionData) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/question/${questionData}`)
    .then((res) => {
      dispatch(getQuestionsList());
      return dispatch({
        type: DELETE_QUESTION,
        payload: res.data.data,
      });
    });
};

// Update questions
export const updateQuestion = (id, questionData) => (dispatch) => {
  axios
    .patch(`http://localhost:5000/api/question/${id}`, questionData)
    .then((res) => {
      dispatch(getQuestionsList())
    })
    .catch((err) => alert("err"));
};
