import React from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import MessageFieldContainer from "./MessageField/MessageFieldContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Messages = (props) => {


    return(
        <div className={ms.block_container}>
        <div className={style.message_wrapper}>
            <DialogsContainer dialogsData={props.dialogsData}/>
            <MessageFieldContainer currentDialog={props.match} messageData={props.messageData} dispatch={props.dispatch}/>
        </div>
        </div>
    )
}

export default Messages;