import axios from "axios";
import { GET_ANNOUNCEMENTS, GET_ERRORS } from "./types";

//get all announcements

export const getAnnouncementsList = () => dispatch => {
    axios
        .get("http://localhost:5000/api/announcement")
        .then(res => dispatch({
            type: GET_ANNOUNCEMENTS,
            payload: res.data.data
        }))
}

// Add announcement
export const addAnnouncement = (announcementData) => dispatch => {
    axios
        .post("http://localhost:5000/api/announcement/addAnnouncement", announcementData)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};