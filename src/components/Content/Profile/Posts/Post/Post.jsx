import React from "react";
import style from "./style.module.css";
import ms from "../../../../Main_styles/ms.module.css";

const Post = (props) => {

    let postsElements = props.profilePage.posts.map(p => <PostElement id={p.id} message={p.message}/>);
    return (
        <div className={style.posts_area}>
            {postsElements}
        </div>
    )
}


const PostElement = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post_author}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/768px-Xiaomi_logo_%282021-%29.svg.png"
                    alt="ava"/>
                <p className={ms.regular_text}>Dima Zabolotko</p>
            </div>
            <p className={style.post_text}>{props.message}</p>
        </div>
    )
}
export default Post;