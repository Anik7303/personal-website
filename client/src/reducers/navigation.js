import { FETCH_MENU_LIST } from "../actions/types";

const navigationReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MENU_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default navigationReducer;
