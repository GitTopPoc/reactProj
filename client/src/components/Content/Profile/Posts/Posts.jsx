import React, {useEffect} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import Post from "./Post/Post";
import {useForm} from "react-hook-form";

const AddPostForm = (props) => {
    const {register, handleSubmit} = useForm();

    let formSubmit = (data) => {
        props.props.createPost(data.newPostText);

    }
    return <form onSubmit={handleSubmit(formSubmit)}>
        <textarea {...register("newPostText")} className={style.post_text}
                  name={"newPostText"} placeholder={"Tell us something..."}/>
        <button type={"submit"} className={style.create_post_button}>Send</button>
    </form>
}


const Posts = (props) => {
    useEffect(() => {
        props.getProfilePosts(props.profilePage.profile.userId)
    }, [props.profilePage.profile.userId])
    return <div>
        <div className={ms.block_container}>
            <div className={style.creating_post}>
                <p className={style.my_posts_heading}>Posts</p>
                {props.profilePage.profile.userId === props.auth.userId && <AddPostForm props={props}/>}
                <check/>
            </div>
            <Post profilePage={props.profilePage}/>
        </div>
    </div>

}
export default Posts;