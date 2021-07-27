import React from "react";
import style from "./style.module.css";
import ms from "../../../../Main_styles/ms.module.css";
import profilePhoto from "../../../../../assets/image/default-image.jpg";

const Post = (props) => {
    let postsElements = props.profilePage.posts.map(p => <PostElement profile={props.profile} id={p.id} message={p.message}/>);
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
                <img className={style.profile_photo}
                     src={profilePhoto}
                     alt="ava"/>
                <p className={ms.regular_text}>{props.profile.fullName}</p>
            </div>
            <p className={style.post_text}>{props.message}</p>
        </div>
    )
}

export default Post;