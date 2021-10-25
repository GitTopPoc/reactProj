import React from "react";
import {Redirect} from "react-router-dom";
import style from "../Auth/style.module.css";
import registerStyle from "./style.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {registerAPI} from "../../api/api";

const Auth = (props) => {
    const onSubmit = (formData) => {

        registerAPI.register(formData.email, formData.name, formData.password).then(data => {
            if (data.resultCode === 0) {
                alert(data.message);
            }
        })

    }
    if(props.state.auth.isAuth) {
        return <Redirect to={`/users`}/>
    }
    return <div className={style.auth_block}>
        <p className={style.atuh_heading}>Registration {props.state.auth.login}</p>
        <RegisterReduxForm onSubmit={onSubmit}/>
    </div>
}
const RegisterForm = (props) => {
    return <form className={style.auth_form} onSubmit={props.handleSubmit}>
        <div className={style.auth_form_input}>
            <Field name={"email"}
                   component={Input}
                   validate={[required]}
                   type={"email"}
                   placeholder={"Email"}/></div>
        <div className={style.auth_form_input}>
            <Field name={"name"}
                   component={Input}
                   validate={[required]}
                   type={"text"}
                   placeholder={"Full Name"}/></div>
        <div className={style.auth_form_input}>
            <Field name={"password"}
                   component={Input}
                   validate={[required]}
                   type={"password"}
                   placeholder={"Password"}/></div>

        {props.error && <div className={style.wrong_data_block}><p>{props.error}</p></div>}
        <button className={`${style.send_form_button} ${registerStyle.register_button}`}>Register</button>
    </form>
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)


export default Auth;
