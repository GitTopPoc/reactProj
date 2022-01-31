import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SET_POSTS = 'SET_POSTS';
const STATE_DELETE_POST = 'STATE_DELETE_POST';

let initialState = {
    posts: [],
    profile: null,
    status: "",
    editActive: false
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
        case STATE_DELETE_POST : {
            let newPosts = [];
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id !== action.postId) {
                    newPosts.push(state.posts[i]);
                }
            }
            return {...state, posts: newPosts}
        }
        default:
            return state;
    }


};
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, text: profile});
export const getStatus = (status) => ({type: GET_STATUS, status});
export const stateDeletePost = (postId) => ({type: STATE_DELETE_POST, postId});



export const editPost = (newData, profileId) => {
    return (dispatch) => {
        profileAPI.updatePost(newData).then(data => {
            if (data.resultCode === "0") {
                profileAPI.getPosts(profileId).then(data => {
                    dispatch(setPosts(data));
                })

            }
        })
    }
}


export const deletePost = (postId) => {
    return (dispatch) => {
        profileAPI.deletePost(postId).then(data => {
            if (data.resultCode === "0") {
                dispatch(stateDeletePost(postId));
            }
        })
    }
}

export const createPost = (formData) => {
    return (dispatch) => {
        profileAPI.createPost(formData).then(data => {
            if (data.resultCode === "0") {
                dispatch(setPosts(data.posts))
            }
        })
    }
}

export const likePost = (postId, userId) => {
    return (dispatch) => {
        profileAPI.likePost(postId, userId).then(data => {
            if (data.resultCode === "0") {
                profileAPI.getPosts(userId).then(data => {
                    dispatch(setPosts(data));
                })
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
            if (response.data.resultCode === 0) {
                dispatch(getStatus(status));
            }
        })
    }
}


export default profileReducer;