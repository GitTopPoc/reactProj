import style from './style.module.css';
import React from "react";

const Auth = (props) => {
    return <div className={style.auth_block}>
        {props.isAuth ? <p className={style.username}>Current user: {props.login}</p>: "Not auth"}

    </div>
}

export default Auth;
