import {authAPI, profileAPI} from "../api/api";

const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_RESULT_MESSAGE = 'SET_RESULT_MESSAGE';
const SET_PASSWORD_CHANGE_MESSAGE = 'SET_PASSWORD_CHANGE_MESSAGE';
const SET_PASSWORD_CHANGE_ERROR = 'SET_PASSWORD_CHANGE_ERROR';
const SET_AVATAR_CHANGE_ERROR = 'SET_AVATAR_CHANGE_ERROR';
const SET_AVATAR_CHANGE_MESSAGE = 'SET_AVATAR_CHANGE_MESSAGE';
const SET_AVATAR = 'SET_AVATAR';

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
    resultMessage: null,
    passwordChangeMessage: null,
    passwordChangeError: null,
    avatarChangeMessage: null,
    avatarChangeError: null

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
        case SET_PASSWORD_CHANGE_MESSAGE:
            return {...state, passwordChangeMessage: action.message}
        case SET_PASSWORD_CHANGE_ERROR:
            return {...state, passwordChangeError: action.message}
        case SET_AVATAR_CHANGE_MESSAGE:
            return {...state, avatarChangeMessage: action.message}
        case SET_AVATAR_CHANGE_ERROR:
            return {...state, avatarChangeError: action.message}
        case SET_AVATAR:
            return {...state, photo: action.photo}
        default:
            return state;
    }
}


export const setProfileInfo = (email, name, photo, status, github, facebook, linkedin, instagram) => ({
    type: SET_PROFILE_INFO,
    payload: {email, name, photo, status, github, facebook, linkedin, instagram}
})
export const setResultMessage = (message) => ({type: SET_RESULT_MESSAGE, message});
export const setPasswordChangeMessage = (message) => ({type: SET_PASSWORD_CHANGE_MESSAGE, message});
export const setPasswordChangeError = (message) => ({type: SET_PASSWORD_CHANGE_ERROR, message});
export const setAvatarChangeMessage = (message) => ({type: SET_AVATAR_CHANGE_MESSAGE, message});
export const setAvatarChangeError = (message) => ({type: SET_AVATAR_CHANGE_ERROR, message});
export const setAvatar = (photo) => ({type: SET_AVATAR, photo});

export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            if (data.resultCode === "0") {
                dispatch(setProfileInfo(data.email, data.fullName, data.photo, data.status, data.contacts.github, data.contacts.facebook, data.contacts.linkedin, data.contacts.instagram))
            }
        })
    }
}

export const updateProfileInfo = (newData) => {
    return (dispatch) => {
        dispatch(setResultMessage(null))
        profileAPI.updateProfile(newData).then(data => {
            if (data.resultCode === "0") {
                dispatch(setProfileInfo(data.email, data.fullName, data.photo, data.status, data.contacts.github, data.contacts.facebook, data.contacts.linkedin, data.contacts.instagram))
                dispatch(setResultMessage(data.message))
            }
        })
    }
}

export const changePassword = (data) => {
    return (dispatch) => {
        dispatch(setPasswordChangeError(null))
        dispatch(setPasswordChangeMessage(null))
        authAPI.passwordChange(data).then(data => {
            if (data.resultCode === "0") {
                dispatch(setPasswordChangeMessage(data.message))
            } else dispatch(setPasswordChangeError(data.message))
        })
    }
}

export const uploadAvatar = (file) => {
    return (dispatch) => {
        dispatch(setAvatarChangeError(null))
        dispatch(setAvatarChangeMessage(null))
        profileAPI.updateAvatar(file).then(data => {
            if (data.resultCode === "0") {
                dispatch(setAvatarChangeMessage(data.message))
                dispatch(setAvatar(data.photo))
            } else dispatch(setAvatarChangeError(data.message))
        })
    }
}

export const removeAvatar = () => {
    return (dispatch) => {
        dispatch(setAvatarChangeError(null))
        dispatch(setAvatarChangeMessage(null))
        profileAPI.deleteAvatar().then(data => {
            if (data.resultCode === "0") {
                dispatch(setAvatarChangeMessage(data.message))
                dispatch(setAvatar(data.photo))
            } else dispatch(setAvatarChangeError(data.message))
        })
    }
}

export default settingsReducer