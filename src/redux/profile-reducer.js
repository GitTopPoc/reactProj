const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hey there'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Privet'},
        {id: 5, message: 'Message'},
    ]
}

const profileReducer = (state = initialState, action) => {
    let newId = state.posts.length + 1;
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: newId,
                message: action.text
            }
            state.posts.push(newPost);
            break;
        default:
            console.log('profileReducer');
            break;
    }

    return state;

};
export const addPostAction = (text) => ({type: ADD_POST, text: text});

export default profileReducer;