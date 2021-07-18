import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";
import {addMessageAction} from "../../../redux/store";

const Message_field = (props) => {
    let sendMessageRef = React.createRef();

    let onAddMessage = () => {
        let text = sendMessageRef.current.value;
        sendMessageRef.current.value = '';
        let action = addMessageAction(text);
        props.dispatch(action);
    }

    const Input_field = () => {
        return (
            <div className={style.input_field}>
            <textarea ref={sendMessageRef} className={style.input_field_text} placeholder="Enter your message..."
                      name="message_area"
                      id="message_area" cols="30" rows="10">
            </textarea>
                <button type={"submit"} onClick={onAddMessage} className={style.button}>Send</button>
            </div>
        )
    }

    const Messages = (props) => {


        let messages = props.messageData.map(m => <Message id={m.id} message={m.message}/>)

        return (
            <div className={style.messages}>
                {messages}
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


    return (
        <div className={`${ms.block_container} ${style.message_field}`}>
            <Messages messageData={props.messageData}/>
            <Input_field/>
        </div>
    )


}
export default Message_field;
