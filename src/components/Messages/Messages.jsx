import React from "react";
import style from './style.module.css';
import ms from '../Main_styles/ms.module.css';
import Dialogs from "./Dialogs/Dialogs";
import MessageFieldContainer from "./MessageField/MessageFieldContainer";

const Messages = (props) => {
    return(
        <div className={ms.block_container}>
        <div className={style.message_wrapper}>
            <Dialogs dialogsData={props.store.messagePage.dialogsData}/>
            <MessageFieldContainer messageData={props.store.messagePage.messageData} dispatch={props.dispatch}/>
        </div>
        </div>
    )
}

export default Messages;