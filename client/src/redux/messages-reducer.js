import {dialogsAPI} from "../api/api";


const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';


let initialState = {
    messageData: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Ew'},
        {id: 3, message: 'OOO'},
        {id: 4, message: 'XXX'}
    ],
    dialogsData: [

    ]
}

const messagesReducer = (state = initialState, action) => {
    let newId = state.messageData.length + 1;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: newId,
                message: action.text
            }
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            return stateCopy;

        case SET_DIALOGS : {
            return {...state, dialogsData: action.dialogsData}
        }
        default:

            return state;
    }
};
export const addMessage = (text) => ({type: ADD_MESSAGE, text: text});
export const setDialogs = (data) => ({type: SET_DIALOGS, dialogsData: data.dialogs});

export const getDialog = () => {
    return (dispatch) => {
        dialogsAPI.getDialogs().then(data => {
            if (data.resultCode === 0) {
                    dispatch(setDialogs(data));

            }
        })
    }
}

export default messagesReducer;