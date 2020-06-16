import axios from "axios";
import { GET_STUDENTS } from "./types";

//get all students

export const getStudentList = () => dispatch => {
    axios
        .get("http://localhost:5000/api/users/")
        .then(res => dispatch({
            type: GET_STUDENTS,
            payload: res.data.data
        }))
}