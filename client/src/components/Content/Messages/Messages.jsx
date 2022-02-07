import React from "react";
import style from './style.module.css';
import ms from '../../../mainStyles/ms.module.css';
import Dialogs from "./Dialogs/Dialogs";
import MessageFieldContainer from "./MessageField/MessageFieldContainer";

const Messages = (props) => {


    return(
        <div className={ms.block_container}>
        <div className={style.message_wrapper}>
            <Dialogs dialogsData={props.dialogsData}/>
            <MessageFieldContainer messageData={props.messageData} dispatch={props.dispatch}/>
        </div>
        </div>
    )
}

export default Messages;