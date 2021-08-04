import React from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {MaxLengthCreator, required} from "../../../../utils/validators/validators";


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
let maxLength200 = MaxLengthCreator(200)
const SendMessageForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field className={style.input_field_text} component={Textarea}
                   validate={[required, maxLength200]}
                   name={'newMessageText'} placeholder={'Enter new message'}/>
            <button className={style.button}>Send</button>
        </form>
    </>
}

const SendMessageReduxForm = reduxForm({form:'sendMessageForm'}) (SendMessageForm)


const MessageField = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.addMessage(formData.newMessageText)
    }
    return (
        <div className={`${ms.block_container}`}>
            <Messages messageData={props.messageData}/>
            <div className={style.input_field}>
                <SendMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )


}
export default MessageField;
