import React, {useEffect} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength200 = MaxLengthCreator(200)

const addPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field validate={[required, maxLength200]}
               className={style.post_text}
               name={"newPostText"}
               component={Textarea}
               placeholder={"Tell us something..."}/>
        <button onClick={props.onClick} className={style.create_post_button}>Send</button>
    </form>
        ;
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(addPostForm)

const Posts = (props) => {
    useEffect(() => {
        props.getProfilePosts(props.profilePage.profile.userId)
    }, [props.profilePage.profile.userId])
    let onSubmit = (formData) => {
        /*props.addPost(formData.newPostText)*/
        alert(formData.newPostText)
    }
    return <div>
        <div className={ms.block_container}>
            <div className={style.creating_post}>
                <p className={style.my_posts_heading}>Posts</p>
                {props.profilePage.profile.userId === props.auth.userId && <AddPostReduxForm onSubmit={onSubmit}/>}
                <check/>
            </div>
            <Post profilePage={props.profilePage}/>
        </div>
    </div>

}
export default Posts;