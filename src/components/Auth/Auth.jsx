import style from './style.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const AuthForm = (props) => {
    return <form className={style.auth_form} onSubmit={props.handleSubmit}>
        <div className={style.auth_form_input}>
            <Field name={"login"}
                   component={Input}
                   validate={[required]}
                   type={"text"}
                   placeholder={"Login"}/></div>
        <div className={style.auth_form_input}>
            <Field name={"password"}
                   component={Input}
                   validate={[required]}
                   type={"password"}
                   placeholder={"Password"}/></div>
        <div className={`${style.auth_form_checkbox} ${style.remember_field}`}>
            <Field name={"rememberMe"}
                   component={"input"}
                   type={"checkbox"}/> <p>remember
            me</p></div>
        <button className={style.send_form_button}>Sign in</button>
    </form>
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)


const Auth = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={style.auth_block}>
        <p className={style.atuh_heading}>Authorization</p>
        <AuthReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Auth;
