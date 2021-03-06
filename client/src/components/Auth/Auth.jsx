import style from './style.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import registerStyle from "../Register/style.module.css";


const Auth = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password);

    }
   if(props.state.auth.isAuth) {
       return <Redirect to={`/users`}/>
   }
    return <div className={style.auth_block}>
        <p className={style.atuh_heading}>Authorization {props.state.auth.login}</p>
        <AuthReduxForm onSubmit={onSubmit}/>
    </div>
}
const AuthForm = (props) => {
    return <form className={style.auth_form} onSubmit={props.handleSubmit}>
        <div className={style.auth_form_input}>
            <Field name={"email"}
                   component={Input}
                   validate={[required]}
                   type={"email"}
                   placeholder={"Email"}/></div>
        <div className={style.auth_form_input}>
            <Field name={"password"}
                   component={Input}
                   validate={[required]}
                   type={"password"}
                   placeholder={"Password"}/></div>

        {props.error && <div className={style.wrong_data_block}><p>{props.error}</p></div>}
        <button className={`${style.send_form_button} ${registerStyle.register_button}`}>Sign in</button>
    </form>
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)


export default Auth;
