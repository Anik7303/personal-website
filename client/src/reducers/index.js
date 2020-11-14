import { combineReducers } from "redux";
import projectsReducer from "./projects";
import navReducer from "./navigation";
import authReducer from "./auth";

export default combineReducers({
    projects: projectsReducer,
    menuList: navReducer,
    isAuth: authReducer,
});
