import React, {useEffect, useState} from "react";
import style from "../style.module.css";
import {useForm} from "react-hook-form";

let Password = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [formErrorText, setFormErrorText] = useState(null);

    useEffect(() => {
        setTimeout(
            function() {
           props.setPasswordChangeError(null)
           props.setPasswordChangeMessage(null)
            }, 20000);
    }, [props.state.settings.passwordChangeMessage, props.state.settings.passwordChangeError]);

    const onSubmit = (data) => {
        setFormErrorText(null)
        if (data.newPassword !== data.newPasswordConfirm) {
            setFormErrorText("New password and its confirmation do not match")
        } else {
            props.changePassword(data)
        }

    };
    return <div>
        <form className={style.settings_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_field}><p className={style.form_heading}>Current password:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter current password"} type={"password"}
                           className={`${style.form_input} ${errors.name && style.error_field}`}
                           {...register("password", {
                               required: true,

                           })} />
                    {errors.currentPassword && errors.currentPassword.type === "required" &&
                    <p className={style.error_text}>This field is required</p>}
                    {errors.currentPassword && errors.currentPassword.type === "minLength" &&
                    <p className={style.error_text}>Min length 4 symbols</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>New password:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter new password"} type={"password"}
                           className={`${style.form_input} ${errors.name && style.error_field}`}
                           {...register("newPassword", {
                               required: true,
                               minLength: 5
                           })} />
                    {errors.newPassword && errors.newPassword.type === "required" &&
                    <p className={style.error_text}>This field is required</p>}
                    {errors.newPassword && errors.newPassword.type === "minLength" &&
                    <p className={style.error_text}>Min length 5 symbols</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Confirm password:</p>
                <div className={style.required_block}>
                    <input placeholder={"Confirm new password"} type={"password"}
                           className={`${style.form_input} ${errors.name && style.error_field}`}
                           {...register("newPasswordConfirm", {
                               required: true,
                               minLength: 5
                           })} />
                    {errors.newPasswordConfirm && errors.newPasswordConfirm.type === "required" &&
                    <p className={style.error_text}>This field is required</p>}
                    {errors.newPasswordConfirm && errors.newPasswordConfirm.type === "minLength" &&
                    <p className={style.error_text}>Min length 5 symbols</p>}
                </div>
            </div>

            <div className={style.submit_error_text}><p>{formErrorText}</p></div>
            <div className={style.submit_result_text}><p>{props.state.settings.passwordChangeMessage}</p></div>
            <div className={style.submit_error_text}><p>{props.state.settings.passwordChangeError}</p></div>
            <div className={style.submit_settings}><input type="submit" value={"Save"}/></div>
        </form>
    </div>
}

export default Password