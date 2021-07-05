import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";

const Message_field = () => {
    return (
        <div className={`${ms.block_container} ${style.message_field}`}>
            <Messages/>
            <Input_field/>
        </div>
    )
}
export default Message_field;

const Input_field = () => {
    return (
        <div className={style.input_field}>
            <textarea className={style.input_field_text} placeholder="Enter your message..." name="message_area"
                      id="message_area" cols="30" rows="10">
            </textarea>
            <button className={style.button}>Send</button>
        </div>
    )
}

const Messages = () => {
    return (
        <div className={style.messages}>
            <Message message="heh"/>
            <Message message="hi"/>
            <Message message="hi"/>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            <p className={ms.regular_text}>{props.message}</p>
        </div>
    )
}