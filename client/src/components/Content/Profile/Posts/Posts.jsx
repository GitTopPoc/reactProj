import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const AddPostForm = (props) => {
    const {register, handleSubmit} = useForm();
    const [dragedOver, setDragedOver] = useState([false]);
    const [postPhoto, setPostPhoto] = useState(false);
    let postText = document.getElementById("newPostText");

    let formSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', postPhoto[0])
        if (!postPhoto) {
            formData.set('file', null)
        }
        formData.append('text', data.newPostText)
        props.createPost(formData);
        setPostPhoto(false);
        postText.value = null;
    }

    const dragOver = (e) => {
        setDragedOver(true)
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
        setDragedOver(true)
    }

    const dragLeave = (e) => {
        setDragedOver(false)
        e.preventDefault();
    }

    const fileDrop = (e) => {
        setDragedOver(false)
        e.preventDefault();
        const files = e.dataTransfer.files;
        setPostPhoto(files)
    }
    let cancelPhoto = () => {
        setPostPhoto(false)
    }


    let imageUpload = document.getElementById("file_upload");
    if (imageUpload) {
        imageUpload.onchange = function () {
            let input = this.files[0];
            if (input) {
                setPostPhoto(imageUpload.files)
            }
        };
    }
    let fileClick = () => {
        imageUpload.click();
    }


    return <form
        onSubmit={handleSubmit(formSubmit)}>
        <textarea {...register("newPostText")} className={style.post_text}
                  name={"newPostText"} id={"newPostText"} placeholder={"Tell us something..."}/>
        <div
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={fileClick}
            className={`${style.drag_drop_block} ${dragedOver === true && style.drag_drop_true} ${postPhoto !== false && style.invisible}`}>
            <p>Drag and drop photo or click to upload</p>
        </div>
        <input accept={"image/*"} name="file" type={"file"} id={"file_upload"}
               className={`${style.form_input} ${style.file_input} ${style.invisible}`}
               {...register("file")}  />
        <div className={style.inline}>
            <div className={`${style.post_photo} ${postPhoto === false && style.invisible}`}>
                <p>{postPhoto !== false && postPhoto[0].name}</p>
                <span onClick={cancelPhoto} className={style.remove_photo_icon}><FontAwesomeIcon icon={faWindowClose}/></span>
            </div>
        </div>
        <button type={"submit"} className={style.create_post_button}>Send</button>
    </form>
}


const Posts = (props) => {
    useEffect(() => {
        props.getProfilePosts(props.profilePage.profile.userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.profilePage.profile.userId])
    return <div>
        <div className={ms.block_container}>
            <div className={style.creating_post}>
                <p className={style.my_posts_heading}>Posts</p>
                {props.profilePage.profile.userId === props.auth.userId && <AddPostForm {...props}/>}
                <check/>
            </div>
            <Post profilePage={props.profilePage}/>
        </div>
    </div>

}
export default Posts;