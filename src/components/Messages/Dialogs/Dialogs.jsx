import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";
import {NavLink} from "react-router-dom";


const Dialog_item = (props) => {
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
const Dialogs = (props) => {
    return (
        <div className={`${style.dialogs_list} ${ms.block_container}`}>
                <Dialog_item name="User1" id="1"/>
                <Dialog_item name="User2" id="2"/>
                <Dialog_item name="User3" id="3"/>
                <Dialog_item name="User4" id="4"/>
                <Dialog_item name="User5" id="5"/>
        </div>
    )
}
export default Dialogs;