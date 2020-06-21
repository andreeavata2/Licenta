import axios from "axios";
import { GET_ANNOUNCEMENTS, GET_ERRORS, DELETE_ANNOUNCEMENTS } from "./types";

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

// Delete announcement
export const deleteAnnouncement = (announcementData) => dispatch => {
    axios
        .delete("http://localhost:5000/api/announcement/delete", announcementData)
        .then(res =>
            dispatch({
                type: DELETE_ANNOUNCEMENTS,
                payload: res.data.data
            })
        );
};