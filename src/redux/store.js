import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey there'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Privet'},
                {id: 5, message: 'Message'},
            ]
        },
        messagePage: {
            messageData: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Ew'},
                {id: 3, message: 'OOO'},
                {id: 4, message: 'XXX'}
            ],
            dialogsData: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    renderEntireTree() {
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this.renderEntireTree();

    }

}
export const addPostAction = (text) => ({type: ADD_POST, text: text});
export const addMessageAction = (text) => ({type: ADD_MESSAGE, text: text});
export default store;
