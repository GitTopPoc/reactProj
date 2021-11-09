import React from "react";
import {useForm} from "react-hook-form";
import style from "../style.module.css"

let PersonalData = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))


        /* console.log(props.state.settings.name + " " + data.name)
         console.log(props.state.settings.email + " " + data.email)
         console.log(props.state.settings.status + " " + data.status)
         console.log(props.state.settings.github + " " + data.github)
         console.log(props.state.settings.facebook + " " + data.facebook)
         console.log(props.state.settings.linkedin + " " + data.linkedin)
         console.log(props.state.settings.instagram + " " + data.instagram)*/
    };

    return <div>
        <form className={style.settings_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_field}><p className={style.form_heading}>Your name:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter new name"} className={`${style.form_input} ${errors.name && style.error_field}`} defaultValue={props.state.settings.name} {...register("name", {required: true , minLength: 4})} />
                    {errors.name && errors.name.type === "required" && <p className={style.error_text}>This field is required</p>}
                    {errors.name && errors.name.type === "minLength" && <p className={style.error_text}>Min length 4 symbols</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your email:</p>
                <div className={style.required_block}>
                    <input placeholder={"Enter new email"} className={`${style.form_input}  ${errors.email && style.error_field}`} type={"email"}
                           defaultValue={props.state.settings.email} {...register("email", {required: true})} />
                    {errors.email && <p className={style.error_text}>This field is required</p>}
                </div>
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your status:</p>
                <input placeholder={"Enter status"} className={style.form_input} defaultValue={props.state.settings.status} {...register("status")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Github :</p>
                <input placeholder={"Enter link"} className={style.form_input} defaultValue={props.state.settings.github} {...register("github")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Facebook :</p>
                <input placeholder={"Enter link"} className={style.form_input} defaultValue={props.state.settings.facebook} {...register("facebook")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your LinkedId :</p>
                <input placeholder={"Enter link"} className={style.form_input} defaultValue={props.state.settings.linkedin} {...register("linkedin")} />
            </div>
            <div className={style.form_field}><p className={style.form_heading}>Your Instagram :</p>
                <input placeholder={"Enter link"} className={style.form_input} defaultValue={props.state.settings.instagram} {...register("instagram")} />
            </div>
            <div className={style.submit_settings}><input type="submit" value={"Save"}/></div>
        </form>
    </div>
}

export default PersonalData