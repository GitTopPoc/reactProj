import {dialogsAPI} from "../api/api";


const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_MESSAGES_LOADING = 'SET_MESSAGES_LOAGING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    messageLoading: false,
    messageData: [],
    maxPages: 1,
    currentPage: 1,
    dialogsData: []

}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DIALOGS : {
            return {...state, dialogsData: action.dialogsData}
        }
        case SET_MESSAGES : {
            if (state.currentPage > 1) {
                let moreMessages = action.messageData;
                let messages = [state.messageData]
                for (let i = moreMessages.length - 1; i > 0; i--){
                    messages[0].unshift(moreMessages[i])
                }
                return {...state, messageData: messages[0], maxPages: action.maxPages}
                    }
            return {...state, messageData: action.messageData, maxPages: action.maxPages}
        }
        case SET_MESSAGES_LOADING : {
            return {...state, messageLoading: !state.messageLoading}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        default:

            return state;
    }
};
export const setDialogs = (data) => ({type: SET_DIALOGS, dialogsData: data.dialogs});
export const setMessages = (data) => ({type: SET_MESSAGES, messageData: data.messageData, maxPages: data.maxPages});
export const setMessagesLoading = (messageLoading) => ({type: SET_MESSAGES_LOADING, messageLoading});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const sendMessage = (dialogId, text) => {
    return () => {
        dialogsAPI.postMessage(dialogId, text).then(data => {
            if (data.resultCode === 0) {
                getMessages(dialogId)
            }
        })
    }
}


export const getMessages = (dialogId, page) => {
    return (dispatch) => {
        dispatch(setMessagesLoading(true));
        dialogsAPI.getMessages(dialogId, page).then(data => {
            if (data.resultCode === 0) {
                dispatch(setMessages(data));
            }
            dispatch(setMessagesLoading(false));
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