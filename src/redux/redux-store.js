import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {combineReducers} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth:authReducer
})

let store = createStore(reducers);
window.store = store;
export default store;