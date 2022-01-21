import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type:SET_USER_DATA, payload: {userId, email,login, isAuth}});


export const authorize = () => {
    return (dispatch) => {

        authAPI.authMe().then(data => {
            if (data.resultCode === "0") {
                localStorage.setItem('token', data.token);
                dispatch(setUserData(data.user.id, data.user.email, data.user.name, true));

            }else {
                localStorage.removeItem('token');
            }

        })

    }
}

export const login = (email, password) => {

    return (dispatch) => {

        authAPI.login(email, password).then(data => {
            if (data.resultCode === "0") {
                localStorage.setItem('token', data.token);
                dispatch(setUserData(data.user.id, data.user.email, data.user.name, true));
            } else {
                let message = data.message;
                dispatch(stopSubmit("auth", {_error: message}));
            }
        })
    }
}


export const logout = () => {
    return (dispatch) => {
        dispatch(setUserData(null, null, null, false));
        localStorage.removeItem('token');

    }
}

export default authReducer;