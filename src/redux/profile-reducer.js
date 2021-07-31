import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hey there'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Privet'},
        {id: 5, message: 'Message'},
    ],
    profile:null
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
        default:
            return state;
    }


};
export const addPostAction = (text) => ({type: ADD_POST, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, text: profile});

export const getMyProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            debugger;
            dispatch(setUserProfile(data));
        })
    }
}


export default profileReducer;