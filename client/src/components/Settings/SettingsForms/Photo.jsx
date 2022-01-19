import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from "../style.module.css";
import {API_URL} from "../../../config";
import userPhoto from "../../../assets/image/default-image.jpg"

let Photo = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [formErrorText, setFormErrorText] = useState(null);

    let onSubmit = (file) => {
        setFormErrorText(null)
       if (file.file[0]) {
           let formData = new FormData();
           formData.append('file', file.file[0], file.file.name)
           props.uploadAvatar(formData)
       } else {
           setFormErrorText("Choose photo")
       }
    }
    useEffect(() => {
        setTimeout(
            function() {
                props.setAvatarChangeMessage(null)
            }, 20000);
    }, [props.state.settings.avatarChangeMessage]);

    const deletePhoto = () => {
        props.deleteAvatar()
    }

    return <div>
        <form id={"myForm"} className={style.settings_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.delete_photo_wrapper}>
                <div onClick={deletePhoto} className={style.delete_button}><p className={style.delete_button_text}>Delete photo</p></div>
            </div>
            <div className={style.current_avatar_wrapper}>
                <img className={style.current_avatar} src={props.state.settings.photo === "" ? userPhoto : `${API_URL}\\${props.state.settings.photo}`} alt="ava"/>
            </div>
            <div className={style.form_field}>
                <div className={style.required_block}>
                        <input accept={"image/*"} name="file" type={"file"} id={"file_upload"}
                               className={`${style.form_input} ${style.file_input}`}
                               {...register("file")} />
                    {errors.file && errors.file.type === "required" &&
                    <p className={style.error_text}>This field is required</p>}
                    {errors.file && errors.file.type === "minLength" &&
                    <p className={style.error_text}>Min length 4 symbols</p>}
                </div>
            </div>
            <div className={style.submit_error_text}><p>{formErrorText}</p></div>
            <div className={style.submit_result_text}><p>{props.state.settings.avatarChangeMessage}</p></div>
            <div className={style.submit_settings}><input type="submit" value={"Save"}/></div>
        </form>

    </div>
}


export default Photo