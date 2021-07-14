import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";

const Message_field = (props) => {
    return (
        <div className={`${ms.block_container} ${style.message_field}`}>
            <Messages messageData={props.messageData}/>
            <Input_field/>
        </div>
    )
}
export default Message_field;
let sendMessageRef = React.createRef();
let addMessage = () => {
    let text = sendMessageRef.current.value;
    alert(text);
}
const Input_field = () => {
    return (
        <div className={style.input_field}>
            <textarea ref={sendMessageRef} className={style.input_field_text} placeholder="Enter your message..."
                      name="message_area"
                      id="message_area" cols="30" rows="10">
            </textarea>
            <button onClick={addMessage} className={style.button}>Send</button>
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