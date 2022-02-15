import React from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import {useForm} from "react-hook-form";


const Messages = (props) => {
    // MESSAGE
    const Message = (props) => {
        return (
            <div className={`${style.message}`}>
                <div
                    className={`${style.message} ${props.id === props.authUser ? style.auth_user_message : style.dialog_user_message}`}>
                    <p className={ms.regular_text}>{props.message}</p>
                </div>
            </div>
        )
    }

    // MAP MESSAGES
    let messages = props.messageData.map(m => <Message authUser={props.authUser} id={m.authorId} message={m.text}/>)
    return (<div className={style.messages}>
            {messages}
        </div>
    )
}


export const SendMessageForm = (props) => {
    const {register, handleSubmit} = useForm();

    let formSubmit = (data, currentDialog, sendMessage) => {
        sendMessage(currentDialog, data.newMessageText);
    }

    let handleKeyPress = (e, currentDialog) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (e.currentTarget.value) {
                props.sendMessage(currentDialog, e.currentTarget.value)
                e.currentTarget.value = null;
            }

        }
    }

    return <>
        <form onSubmit={handleSubmit((data) => {
            formSubmit(data, props.currentDialog, props.sendMessage);
        })}>
            <textarea onKeyPress={(e) => {
                handleKeyPress(e, props.currentDialog, props.sendMessage)
            }} {...register("newMessageText")} className={style.input_field_text}
                      name={'newMessageText'} placeholder={'Enter new message'}/>
            <button type={"submit"} className={style.button}>Send</button>
        </form>
    </>
}


const MessageField = (props) => {
    return (
        <div className={`${ms.block_container} ${style.messages_container_wrapper}`}>
            <div className={style.dialog_header}>
                <p>Dialog header</p>
            </div>
            <Messages authUser={props.authUser} messageData={props.messageData}/>
            <div className={style.input_field}>
                <SendMessageForm currentDialog={props.currentDialog.params.dialogId} sendMessage={props.sendMessage}/>
            </div>
        </div>
    )


}
export default MessageField;
