import { FETCH_AUTH_STATE, LOGIN, LOGOUT } from "../actions/types";

const authReducer = (state = false, action) => {
    switch (action.type) {
        case FETCH_AUTH_STATE:
        case LOGIN:
        case LOGOUT:
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;
