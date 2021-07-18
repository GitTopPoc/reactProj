import React from "react";
import {addMessageAction} from "../../../redux/messages-reducer";
import MessageField from "./MessageField";

const MessageFieldContainer = (props) => {


    let addMessage = (text) => {
        let action = addMessageAction(text);
        props.dispatch(action);
    }


    return (
        <MessageField addMessage={addMessage} messageData={props.messageData}/>
    )


}
export default MessageFieldContainer;
