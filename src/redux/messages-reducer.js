
let initialState = {
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

const messagesReducer = (state = initialState, action) => {
    let newId = state.messageData.length + 1;
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: newId,
                message: action.text
            }
            state.messageData.push(newMessage);
            break;
        default:
            console.log('messagesReducer');
            break;
    }
    return state;
};

export default messagesReducer;