import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: [],
    profile:null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE : {
            return {...state, profile: action.text}
        }
        case SET_POSTS : {
            return {...state, posts: action.posts}
        }

        case GET_STATUS : {
            return {...state, status: action.status}
        }
        default:
            return state;
    }


};
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, text: profile});
export const getStatus = (status) => ({type: GET_STATUS, status});


export const createPost = (postText) => {
    return (dispatch) => {
        profileAPI.createPost(postText).then(data => {
        if (data.resultCode === "0") {
            dispatch(setPosts(data.posts))
        }
        })
    }
}

export const getProfilePosts = (userId) => {
    return (dispatch) => {
        profileAPI.getPosts(userId).then(data => {
            dispatch(setPosts(data));
        })
    }
}

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