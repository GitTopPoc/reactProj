import React from "react";
import style from "./style.module.css";
import ms from "../../../Main_styles/ms.module.css";
import Post from "./Post/Post";
const Posts = (props) => {
    return (
        <div className={ms.block_container}>
            <div className={style.creating_post}>
                <p className={style.my_posts_heading}>My Posts</p>
                <textarea className={style.post_text}
                          placeholder="Tell us something..."
                          name="post_text"
                          id="post_text"
                          cols="30"
                          rows="10"/>
                <button className={style.create_post_button}>Send</button>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}
export default Posts;