import {dialogsAPI} from "../api/api";


const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_MESSAGES_LOAGING = 'SET_MESSAGES_LOAGING';


let initialState = {
    messageLoading: false,
    messageData: [],
    dialogsData: []

}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DIALOGS : {
            return {...state, dialogsData: action.dialogsData}
        }
        case SET_MESSAGES : {
            return {...state, messageData: action.messageData}
        }
        case SET_MESSAGES_LOAGING : {
            return {...state, messageLoading: !state.messageLoading}
        }
        default:

            return state;
    }
};
export const setDialogs = (data) => ({type: SET_DIALOGS, dialogsData: data.dialogs});
export const setMessages = (data) => ({type: SET_MESSAGES, messageData: data.messageData});
export const setMessagesLoading = () => ({type: SET_MESSAGES});

export const sendMessage = (dialogId, text) => {
    return () => {
        dialogsAPI.postMessage(dialogId, text).then(data => {
            if (data.resultCode === 0) {
               getMessages(dialogId)
            }
        })
    }
}


export const getMessages = (dialogId) => {
    return (dispatch) => {
        dialogsAPI.getMessages(dialogId).then(data => {
            if (data.resultCode === 0) {
                dispatch(setMessages(data));

            }
        })
    }
}


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