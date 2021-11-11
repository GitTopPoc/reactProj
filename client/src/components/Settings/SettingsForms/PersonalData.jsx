import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from "../style.module.css"

let PersonalData = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [formErrorText, setFormErrorText] = useState(null);
    const [formResultText, setFormResultText] = useState(null);
    useEffect(() => {
        setFormResultText(props.state.settings.resultMessage)
    }, [props.state.settings.resultMessage]);
    const onSubmit = (data) => {
        setFormErrorText(null)
        if (data.name === props.state.settings.name &&
            data.email === props.state.settings.email &&
            data.status === props.state.settings.status &&
            data.github === props.state.settings.github &&
            data.facebook === props.state.settings.facebook &&
            data.linkedin === props.state.settings.linkedin &&
            data.instagram === props.state.settings.instagram) {
            setFormErrorText("You haven`t changed anything");
            props.setResultMessage(null)
        } else {
            props.updateProfileInfo(props.state.auth.userId, data)
        }

    };

    return <div>
        <form className={style.settings_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_field}><p className={style.form_heading}>Your name:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter new name"}
                           className={`${style.form_input} ${errors.name && style.error_field}`}
                           defaultValue={props.state.settings.name} {...register("name", {
                        required: true,
                        minLength: 4
                    })} />
                    {errors.name && errors.name.type === "required" &&
                    <p className={style.error_text}>This field is required</p>}
                    {errors.name && errors.name.type === "minLength" &&
                    <p className={style.error_text}>Min length 4 symbols</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your email:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter new email"}
                           className={`${style.form_input}  ${errors.email && style.error_field}`} type={"email"}
                           defaultValue={props.state.settings.email} {...register("email", {required: true})} />
                    {errors.email && <p className={style.error_text}>This field is required</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your status:</p>
                <input placeholder={"Enter status"} className={style.form_input}
                       defaultValue={props.state.settings.status} {...register("status")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Github :</p>
                <input placeholder={"Enter link"} className={style.form_input}
                       defaultValue={props.state.settings.github} {...register("github")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Facebook :</p>
                <input placeholder={"Enter link"} className={style.form_input}
                       defaultValue={props.state.settings.facebook} {...register("facebook")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your LinkedId :</p>
                <input placeholder={"Enter link"} className={style.form_input}
                       defaultValue={props.state.settings.linkedin} {...register("linkedin")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Instagram :</p>
                <input placeholder={"Enter link"} className={style.form_input}
                       defaultValue={props.state.settings.instagram} {...register("instagram")} />
            </div>
            <div className={style.submit_error_text}><p>{formErrorText}</p></div>
            <div className={style.submit_result_text}><p>{formResultText}</p></div>
            <div className={style.submit_settings}><input type="submit" value={"Save"}/></div>
        </form>
    </div>
}

export default PersonalData