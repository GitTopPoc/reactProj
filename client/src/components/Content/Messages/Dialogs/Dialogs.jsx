import React, {useState} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import {NavLink} from "react-router-dom";
import {faBars, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dialogs = (props) => {

    const [showDialogs, setShowDialogs] = useState(true);

    let dialogs = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    return (
        <div className={`${style.dialogs_list} ${!showDialogs && style.hide_dialogs} ${ms.block_container}`}>
            <div className={style.dialogs_menu}>
                <button onClick={() => {setShowDialogs(!showDialogs)}} className={`${showDialogs && style.invisible} ${style.show_hide_button} ${style.show_button}`}> <FontAwesomeIcon icon={faBars}/></button>
                <button onClick={() => {setShowDialogs(!showDialogs)}} className={` ${!showDialogs && style.invisible} ${style.show_hide_button} ${style.hide_button}`}> <FontAwesomeIcon icon={faChevronLeft}/></button>
            </div>
            <div className={`${style.dialogs} ${!showDialogs && style.invisible}`}>
                {dialogs}
            </div>
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