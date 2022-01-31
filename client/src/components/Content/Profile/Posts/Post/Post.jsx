import React, {useState} from "react";
import style from "./style.module.css";
import ms from "../../../../../mainStyles/ms.module.css";
import userPhoto from "../../../../../assets/image/default-image.jpg";
import {API_URL} from "../../../../../config";
import {faHeart, faEdit, faTimes, faFlag, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PostEdit from "./PostEdit/PostEdit";


const Post = (props) => {
    let postsElements = props.profilePage.posts.map(p => <PostElement auth={props.auth}
                                                                      editPost={props.editPost}
                                                                      profileId={props.profilePage.profile.userId}
                                                                      likePost={props.likePost}
                                                                      deletePost={props.deletePost}
                                                                      profile={props.profilePage.profile}
                                                                      message={p.text} postId={p.id} liked={p.liked}
                                                                      likesCount={p.likesCount} photo={p.photo}
                                                                      date={p.date} time={p.time}
                                                                      key={p.id}/>);
    return (
        <div className={style.posts_area}>
            {postsElements}
        </div>
    )

}
const PostElement = (props) => {
    const [deleteActive, setDeleteActive] = useState(false);
    const [editActive, setEditActive] = useState(false);




    let liked = (props) => {
        props.likePost(props.postId, props.profileId);
    }


    return (
        <div className={style.post}>
            <div className={style.post_heading}>
                <div className={style.post_author}>
                    <img className={style.profile_photo}
                         src={props.profile.photo === "" ? userPhoto : `${API_URL + props.profile.photo}`}
                         alt="not found"/>
                    <p className={ms.regular_text}>{props.profile.fullName}</p>
                </div>
                <div>
                    <div
                        className={`${props.profileId !== props.auth.userId && style.invisible} ${deleteActive === true && style.invisible}`}>
                        <button
                            onClick={() => {
                               editActive === false ? setEditActive(true) : setEditActive(false)
                            }}
                            className={`${style.post_menu_button_edit} ${style.post_menu_button}`}><FontAwesomeIcon
                            icon={faEdit}/></button>
                        <button onClick={() => {
                            setDeleteActive(true)
                        }} className={`${style.post_menu_button_delete} ${style.post_menu_button} ${editActive === true && style.invisible}`}>
                            <FontAwesomeIcon icon={faTimes}/></button>
                    </div>
                    {/* // confirm delete*/}
                    {/* // confirm delete*/}
                    {/* // confirm delete*/}
                    <div className={`${deleteActive !== true && style.invisible}`}>
                        <p className={style.delete_post_text}>Want to delete?</p>
                        <div className={style.delete_buttons}>
                            <button onClick={() => {
                                props.deletePost(props.postId);
                                setDeleteActive(false);
                            }} className={`${style.delete_confirm} ${style.delete_text}`}><FontAwesomeIcon
                                icon={faCheck}/></button>
                            <button onClick={() => {
                                setDeleteActive(false)
                            }} className={`${style.delete_cancel} ${style.delete_text}`}><FontAwesomeIcon
                                icon={faTimes}/></button>
                        </div>
                    </div>
                    <div className={`${props.profileId === props.auth.userId && style.invisible}`}>
                        <button className={`${style.post_menu_button_delete} ${style.post_menu_button}`}>
                            <FontAwesomeIcon icon={faFlag}/></button>
                    </div>
                </div>
            </div>

            <div className={`${editActive === true && style.invisible}`}>

                <p className={style.post_text}>{props.message}</p>
                {props.photo !== "none" &&
                    <img className={style.post_photo} src={`${API_URL + props.photo}`} alt="not found"/>}
            </div>
            {/*POST EDIT*/}
            {/*POST EDIT*/}
            {/*POST EDIT*/}
            <div className={`${editActive !== true && style.invisible}`}>
                <PostEdit removeEdit={() => {setEditActive(false)}} profileId={props.profileId} editPost={props.editPost} message={props.message} postId={props.postId} photo={props.photo}/>
            </div>

            <div className={style.post_info_wrapper}>
                <div className={style.likes_wrapper}>
                    <FontAwesomeIcon onClick={() => liked(props)}
                                     className={`${style.like_icon} ${props.liked && style.like_active}`}
                                     icon={faHeart}/>
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