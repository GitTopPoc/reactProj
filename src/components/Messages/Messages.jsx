import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Message_field from "./Message_field/Message_field";

const Messages = (props) => {
    return(
        <div className={ms.block_container}>
        <div className={style.message_wrapper}>
            <Dialogs dialogsData={props.store.messagePage.dialogsData}/>
            <Message_field messageData={props.store.messagePage.messageData}/>
        </div>
        </div>
    )
}

export default Messages;