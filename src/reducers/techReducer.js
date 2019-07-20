import { GET_TECHS, TECHS_ERROR, ADD_TECH, SET_LOADING, DELETE_TECH } from "../actions/Types";

const initialState = {
    techs: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case GET_TECHS:
            return { ...state, loading: false, techs: action.payload };
        case TECHS_ERROR:
            console.log("ERROR ", action.payload);
            return { ...state, loading: false, error: action.payload };
        case ADD_TECH:
            return { ...state, loading: false, techs: [...state.techs, action.payload] };
        case SET_LOADING:
            return { ...state, loading: true };
        case DELETE_TECH:
            return { ...state, loading: false, techs: state.techs.filter(tech => tech.id !== action.payload) };
    }
};
