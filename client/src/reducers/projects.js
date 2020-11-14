import { FETCH_PROJECT_LIST } from "../actions/types";

const projectReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PROJECT_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default projectReducer;
