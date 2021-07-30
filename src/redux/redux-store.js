import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {applyMiddleware, combineReducers} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;