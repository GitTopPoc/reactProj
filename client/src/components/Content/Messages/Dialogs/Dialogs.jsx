/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import {NavLink} from "react-router-dom";
import {faBars, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import userPhoto from "../../../../assets/image/default-image.jpg";
import {API_URL} from "../../../../config";

const Dialogs = (props) => {
    const [showDialogs, setShowDialogs] = useState(true);
    useEffect(() => {
           props.getDialog()

    },[])


    let dialogs = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} photo={d.photo} lastMessage={d.lastMessage}/>)
    return (
        <div className={`${style.dialogs_list} ${!showDialogs && style.hide_dialogs} ${ms.block_container}`}>
            <div className={style.dialogs_menu}>
                <button onClick={() => {setShowDialogs(!showDialogs)}} className={`${showDialogs && style.invisible} ${style.show_hide_button} ${style.show_button}`}> <FontAwesomeIcon icon={faBars}/></button>
                <button onClick={() => {setShowDialogs(!showDialogs)}} className={` ${!showDialogs && style.invisible} ${style.show_hide_button} ${style.hide_button}`}> <FontAwesomeIcon icon={faChevronLeft}/></button>
            </div>
            <div className={`${!showDialogs && style.invisible}`}>
                {dialogs}
            </div>
        </div>
    )
}

const DialogItem = (props) => {
    return (
        <NavLink activeClassName={style.active} to={"/messages/" + props.id}>
            <div className={style.dialog_wrapper}>
                <div className={style.dialog}>
                    <div>
                        <img className={style.dialog_photo} src={props.photo === "" ? userPhoto : `${API_URL + props.photo}`} alt="not found"/>

                    </div>
                    <div className={style.dialog_description}>
                        <p className={style.dialog_name}>{props.name}</p>
                        <p className={style.last_message}>{props.lastMessage}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
export default Dialogs;