import {profileAPI} from "../api/api";

const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_RESULT_MESSAGE = 'SET_RESULT_MESSAGE';

let initialState = {
    email: null,
    name: null,
    photo: null,
    status: null,
    github: null,
    facebook: null,
    linkedin: null,
    instagram: null,
    isFetching: false,
    resultMessage: null
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        case SET_RESULT_MESSAGE:
            return {...state, resultMessage: action.message}
        default:
            return state;
    }
}


export const setProfileInfo = (email, name, photo, status, github, facebook, linkedin, instagram) => ({
    type: SET_PROFILE_INFO,
    payload: {email, name, photo, status, github, facebook, linkedin, instagram}
})
export const setResultMessage = (message) => ({type: SET_RESULT_MESSAGE, message});

export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            if (data.resultCode === "0") {
                dispatch(setProfileInfo(data.email, data.fullName, data.photo, data.status, data.contacts.github, data.contacts.facebook, data.contacts.linkedin, data.contacts.instagram))
            }
        })
    }
}

export const updateProfileInfo = (userId, newData) => {
    return (dispatch) => {
        profileAPI.updateProfile(userId, newData).then(data => {
            if (data.resultCode === "0") {
                dispatch(setProfileInfo(data.email, data.fullName, data.photo, data.status, data.contacts.github, data.contacts.facebook, data.contacts.linkedin, data.contacts.instagram))
                dispatch(setResultMessage(data.message))
            }
        })
    }
}

export default settingsReducer