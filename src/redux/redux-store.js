import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {combineReducers} from "redux";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer
})

let store = createStore(reducers);
export default store;