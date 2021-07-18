import React from "react";

import {addPostAction} from "../../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let addPost = (text) => {
        let action = addPostAction(text);
        props.dispatch(action);
    }
    return (

        <Posts addPost={addPost} profilePage={props.store.profilePage}/>
    )
}
export default PostsContainer;