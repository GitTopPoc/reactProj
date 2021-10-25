import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hey there'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Privet'},
        {id: 5, message: 'Message'},
    ],
    profile:null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    let newId = state.posts.length + 1;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: newId,
                message: action.text
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        case SET_USER_PROFILE : {
            return {...state, profile: action.text}
        }
        case GET_STATUS : {
            return {...state, status: action.status}
        }
        default:
            return state;
    }


};
export const addPost = (text) => ({type: ADD_POST, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, text: profile});
export const getStatus = (status) => ({type: GET_STATUS, status});

export const getMyProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(getStatus(response.data.status));
        })
    }
}

export const updateUserStatus = (userId, status) => {
    return (dispatch) => {
        profileAPI.updateStatus(userId, status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getStatus(status));
            }
        })
    }
}


export default profileReducer;