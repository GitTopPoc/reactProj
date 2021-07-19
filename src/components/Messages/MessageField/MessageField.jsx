import React from "react";
import style from "./style.module.css";
import ms from "../../Main_styles/ms.module.css";

const MessageField = (props) => {
    let sendMessageRef = React.createRef();
    let onAddMessage = () => {
        let text = sendMessageRef.current.value;
        sendMessageRef.current.value = '';
        props.addMessage(text);
    }


    const Messages = (props) => {

        const Message = (props) => {
            return (
                <div className={style.message}>
                    <p className={ms.regular_text}>{props.message}</p>
                </div>
            )
        }
        let messages = props.messageData().map(m => <Message id={m.id} message={m.message}/>)

        return (
            <div className={style.messages}>
                {messages}
            </div>
        )
    }

    const InputField = () => {
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

    return (
        <div className={`${ms.block_container}`}>
            <Messages messageData={props.messageData}/>
            <InputField/>
        </div>
    )


}
export default MessageField;
