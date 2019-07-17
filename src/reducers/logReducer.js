import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../actions/Types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_LOADING:
            return { ...state, loading: true };
        case LOGS_ERROR:
            console.error(action.payload);
            return { ...state, error: action.payload };
        case GET_LOGS:
            return { ...state, loading: false, logs: action.payload };
    }
};
