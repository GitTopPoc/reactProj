import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Message_field from "./Message_field/Message_field";

const Messages = (props) => {
    return(
        <div className={ms.block_container}>
        <div className={style.message_wrapper}>
            <Dialogs dialogsData={props.messages.dialogsData}/>
            <Message_field messageData={props.messages.messageData}/>
        </div>
        </div>
    )
}

export default Messages;