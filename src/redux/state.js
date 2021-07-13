
let state = {
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
        messageData:[
            {id:1, message:'Hey'},
            {id:1, message:'Ew'},
            {id:1, message:'OOO'},
            {id:1, message:'XXX'}
        ],
        dialogsData: [
            {id:1, name:'User1'},
            {id:2, name:'User2'},
            {id:3, name:'User3'},
            {id:4, name:'User4'},
            {id:5, name:'User5'},
        ]
    }
}

export const addPost = (messagePost) => {
    let newPost = {
        id:6,
        message:messagePost
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree();
}
let renderEntireTree = () => {}
export const subscribe = (observer) => {
 renderEntireTree = observer;
}

export default state;
