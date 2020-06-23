import { GET_QUESTIONS, DELETE_QUESTION, UPDATE_QUESTION } from "../actions/types";

const initialState = {
    questions: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            };
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter((question, index) => index !== action.payload)
            };
        case UPDATE_QUESTION:
        return {
            ...state,
            questions: state.questions.map((question, index) => index !== action.payload)
        };
        // state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        default:
            return state;
    }
}