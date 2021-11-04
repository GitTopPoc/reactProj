import {profileAPI} from "../api/api";

const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
    email: null,
    name: null,
    photo: null,
    status: null,
    github: null,
    facebook: null,
    linkedin: null,
    instagram: null,
    isFetching: false
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setProfileInfo = (email, name, photo, status, github, facebook, linkedin, instagram ) => ({type: SET_PROFILE_INFO, payload: {email, name, photo, status, github, facebook, linkedin, instagram}})


export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            if (data.resultCode === "0") {
                dispatch(setProfileInfo(data.email, data.fullName, data.photo, data.status, data.contacts.github, data.contacts.facebook, data.contacts.linkedin, data.contacts.instagram))
            }
        })
    }
}

export default settingsReducer