import {profileAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING= 'TOGGLE_FOLLOWING';


let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProcessing: []
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users[0]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING: {
            return {...state,

                followingProcessing: action.isFetching
                    ? [...state.followingProcessing, action.userId]
                    : state.followingProcessing.filter(id => id !== action.userId)
                }

        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId });

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        profileAPI.follow(userId).then(data => {
            if (data.resultCode === "0") {dispatch(followSuccess(userId));}
            dispatch(toggleFollowing(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        profileAPI.unfollow(userId).then(data => {
            if (data.resultCode === "0") {dispatch(unfollowSuccess(userId));}
            dispatch(toggleFollowing(false, userId));
        })
    }
}

export const changeCurrentPage = (pageNumber) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
    }
}



export default usersReducer;
