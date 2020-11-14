import axios from "axios";

import { FETCH_MENU_LIST, FETCH_PROJECT_LIST, FETCH_AUTH_STATE, LOGIN, LOGOUT } from "./types";

export const fetchMenuList = () => async (dispatch) => {
    try {
        const response = await axios.get("/api/menu");
        return dispatch({ type: FETCH_MENU_LIST, payload: response.data });
    } catch (error) {
        console.log({ error });
    }
};

export const fetchProjectList = () => async (dispatch) => {
    try {
        const response = await axios.get("/api/projects");
        return dispatch({ type: FETCH_PROJECT_LIST, payload: response.data });
    } catch (error) {
        console.log({ error });
    }
};

export const fetchAuthState = () => async (dispatch) => {
    try {
        const response = await axios.get("/auth/user/current");
        return dispatch({ type: FETCH_AUTH_STATE, payload: response.data });
    } catch (error) {
        console.log({ error });
    }
};

export const handleLogin = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post("/auth/login", { email, password });
        return dispatch({ type: LOGIN, payload: response.status === 200 });
    } catch (error) {
        console.log({ error });
    }
};

export const handleLogout = () => async (dispatch) => {
    try {
        const response = await axios.get("/auth/user/logout");
        return dispatch({ type: LOGOUT, payload: response.status !== 200 });
    } catch (error) {
        console.log({ error });
    }
};
