const ADD_POST = 'ADD-POST';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey there'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Zdarova'},
                {id: 4, message: 'Privet'},
                {id: 5, message: 'Message'},
            ]
        },
        messagePage: {
            messageData: [
                {id: 1, message: 'Hey'},
                {id: 1, message: 'Ew'},
                {id: 1, message: 'OOO'},
                {id: 1, message: 'XXX'}
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
    getState() {return this._state;},
    renderEntireTree() {},
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 6,
                    message: action.text
                }
                this._state.profilePage.posts.push(newPost);
                this.renderEntireTree();
                break;
            case 'ACTION':
                console.log('case work');
                break;
            default:
                console.log('not found case');
                break;
        }


    }

}
export const addPostAction = (text) => ({type: ADD_POST, text: text});

export default store;
