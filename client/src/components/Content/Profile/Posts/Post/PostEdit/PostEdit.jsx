import React, {useState} from "react"
import {useForm} from "react-hook-form";
import style from "./style.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const PostEdit = (props) => {
    const {register, handleSubmit} = useForm();
    const [dragedOver, setDragedOver] = useState([false]);
    const [postPhoto, setPostPhoto] = useState(props.photo);
    const [newText, setNewText] = useState(props.message);
    const photoInput = document.getElementById(props.postId);


    const textChange = (yo) => {
        setNewText(yo.currentTarget.value)
    }

    let formSubmit = (data, postId, photo, profileId) => {
        if (data.file[0]) {
                let formData = new FormData();
                formData.append('photo', data.file[0], data.file.name)
                formData.append('id', postId)
                formData.append('text', data.editPostText)
                props.editPost(formData, profileId)

        }
        if(photo) {
            let formData = new FormData();
            formData.append('photo', photo)
            formData.append('id', postId)
            formData.append('text', data.editPostText)
            props.editPost(formData, profileId)
        }
        props.removeEdit()
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
        photoInput.value = null;
    }


    let fileClick = () => {
        photoInput.click();
    }
    const postEditText = register('editPostText', {required: true})

    if (photoInput) {
        photoInput.onchange = function () {
            let input = this.files[0];
            if (input) {
                setPostPhoto(photoInput.files)
            }
        };
    }

    return <form
        onSubmit={handleSubmit((data) => {
            formSubmit(data, props.postId, props.photo, props.profileId)
        })}>
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

        <input accept={"image/*"} name="file" type={"file"}
               className={`${style.invisible}`}
               {...register("file")} id={props.postId}  key={props.postId}/>

        <div className={style.inline}>
            <div className={`${style.post_photo} ${postPhoto === "none" && style.invisible}`}>
                <p> {postPhoto[0].name && postPhoto[0].name} {!postPhoto[0].name && postPhoto}</p>
                <span onClick={cancelPhoto} className={style.remove_photo_icon}><FontAwesomeIcon icon={faWindowClose}/></span>
            </div>
        </div>
        <button type={"submit"} className={style.create_post_button}>Save</button>
    </form>
}

export default PostEdit