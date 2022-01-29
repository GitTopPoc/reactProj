import React, {useState} from "react"
import {useForm} from "react-hook-form";
import style from "../../style.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const PostEdit = (props) => {
    const {register, handleSubmit} = useForm();
    const [dragedOver, setDragedOver] = useState([false]);
    const [postPhoto, setPostPhoto] = useState(props.photo);
    const [newText, setNewText] = useState(props.message);
    const check = document.getElementById(props.postId);


    const textChange = (yo) => {
        setNewText(yo.currentTarget.value)
    }

    let formSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', postPhoto[0])
        if (!postPhoto) {
            formData.set('file', null)
        }
        formData.append('text', data.newPostText)
        //props.createPost(formData);
        setPostPhoto(false);
    }

    const dragOver = (e) => {
        setDragedOver(true);
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
        setPostPhoto("none")
        console.log(check)
        check.value = null;
    }


    const imageChange = (e) => {
        setPostPhoto(e.currentTarget.files)
    }
    let fileClick = () => {
        check.click();
    }
    const postEditText = register('editPostText', {required: true})
    const postEditImage = register('editPostImage')


    return <form
        onSubmit={handleSubmit(formSubmit)}>
        <textarea
            onChange={(e) => {
                postEditText.onChange(e); // method from hook form register
                textChange(e);
            }}
            onBlur={postEditText.onBlur}
            ref={postEditText.ref}
            className={style.post_text}
            value={newText}
            name={"editPostText"} id={"editPostText"} placeholder={"Tell us something..."}
        />

        <div
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={fileClick}
            className={`${style.drag_drop_block} ${dragedOver === true && style.drag_drop_true} ${postPhoto !== "none" && style.invisible}`}>
            <p>Drag and drop photo or click to upload</p>
        </div>
        <input
            className={style.invisible}
            type="file"
            onChange={(e) => {
                postEditImage.onChange(e);
                imageChange(e)
            }}
            onBlur={postEditImage.onBlur}
            name={"editPostImage"}
            key={props.postId}
            id={props.postId}

        />
        <div className={style.inline}>
            <div className={`${style.post_photo} ${postPhoto === "none" && style.invisible}`}>
                <p> {postPhoto[0].name && postPhoto[0].name} {!postPhoto[0].name && postPhoto}</p>
                <span onClick={cancelPhoto} className={style.remove_photo_icon}><FontAwesomeIcon icon={faWindowClose}/></span>
            </div>
        </div>
        <button type={"submit"} className={style.create_post_button}>Send</button>
    </form>
}

export default PostEdit