import React from "react";
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

class Posts extends React.Component {

    render() {

        const onSubmit = (formData) => {
            this.props.addPost(formData.newPostText);
        }
        return (
            <div className={ms.block_container}>
                <div className={style.creating_post}>
                    <p className={style.my_posts_heading}>My Posts</p>
                    <AddPostReduxForm onSubmit={onSubmit}/>
                    <check/>
                </div>

                <Post profilePage={this.props.profilePage} profile={this.props.profile}/>
            </div>
        )
    }
}

export default Posts;