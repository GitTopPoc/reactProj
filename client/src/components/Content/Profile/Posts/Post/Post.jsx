import React from "react";
import style from "./style.module.css";
import ms from "../../../../../mainStyles/ms.module.css";
import userPhoto from "../../../../../assets/image/default-image.jpg";
import {API_URL} from "../../../../../config";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Post = (props) => {
    console.log(props.profilePage.posts)
    let postsElements = props.profilePage.posts.map(p => <PostElement profileId={props.profilePage.profile.userId} likePost={props.likePost} profile={props.profilePage.profile} message={p.text} postId={p.id} liked={p.liked} likesCount={p.likesCount} photo={p.photo} date={p.date} time={p.time}/>);
    return (
        <div className={style.posts_area}>
            {postsElements}
        </div>
    )

}

let liked = (props) => {
    props.likePost(props.postId, props.profileId);
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
           <div className={style.post_info_wrapper}>
               <div className={style.likes_wrapper}>
                   <FontAwesomeIcon onClick={() => liked(props)} className={`${style.like_icon} ${props.liked && style.like_active}`} icon={faHeart}/>
                   <p className={`${style.likes_count} ${props.liked && style.like_active}`}> {props.likesCount}</p>
               </div>
               <div>
                   <p className={style.post_date}>{props.date} {props.time}</p>
               </div>
           </div>

        </div>
    )
}

export default Post;