import { GET_ANNOUNCEMENTS, DELETE_ANNOUNCEMENTS } from "../actions/types";

const initialState = {
    announcements: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANNOUNCEMENTS:
            return {
                ...state,
                announcements: action.payload
            };
        case DELETE_ANNOUNCEMENTS:
            return {
                ...state,
                announcements: state.announcements.filter((announcement, index) => index !== action.payload)
            };
        default:
            return state;
    }
}