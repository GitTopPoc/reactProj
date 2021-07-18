import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {


    let dialogs = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    return (
        <div className={`${style.dialogs_list} ${ms.block_container}`}>
            {dialogs}
        </div>
    )
}

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink activeClassName={style.active} to={path}>
            <div className={style.dialog_wrapper}>
                <div className={style.dialog}>
                    <p className={style.dialog_name}>{props.name}</p>
                </div>
            </div>
        </NavLink>
    )
}
export default Dialogs;