import React from "react";
import style from "./style.module.css";
import ms from "../../../../../mainStyles/ms.module.css";
import userPhoto from "../../../../../assets/image/default-image.jpg";
import {API_URL} from "../../../../../config";

const Post = (props) => {
    let postsElements = props.profilePage.posts.map(p => <PostElement profile={props.profilePage.profile} message={p.text} photo={p.photo}/>);
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
                     src={props.profile.photo === "" ? userPhoto : `${API_URL + props.profile.photo}`}
                     alt="not found"/>
                <p className={ms.regular_text}>{props.profile.fullName}</p>
            </div>
            <p className={style.post_text}>{props.message}</p>
            {props.photo !== "none" && <img className={style.post_photo} src={`${API_URL + props.photo}`} alt="not found"/>}
        </div>
    )
}

export default Post;