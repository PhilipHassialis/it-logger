import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from "../actions/Types";

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
        case ADD_LOG:
            return { ...state, loading: false, logs: [...state.logs, action.payload] };
        case DELETE_LOG:
            return { ...state, loading: false, logs: state.logs.filter(log => log.id !== action.payload) };
        case SET_CURRENT:
            return { ...state, current: action.payload };
        case CLEAR_CURRENT:
            return { ...state, current: null };
        case UPDATE_LOG:
            return { ...state, logs: state.logs.map(log => (log.id === action.payload.id ? action.payload : log)) };
        case SEARCH_LOGS:
            return { ...state, logs: action.payload };
    }
};
