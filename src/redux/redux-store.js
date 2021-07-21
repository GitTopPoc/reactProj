import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {combineReducers} from "redux";
import usersReducer from "./users-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);
export default store;