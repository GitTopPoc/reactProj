import {addMessageAction} from "../../../redux/messages-reducer";
import MessageField from "./MessageField";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       messageData: () => {

           return state.messagePage.messageData;

       }
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addMessage: (text) => {
            let action = addMessageAction(text);
            dispatch(action);
        }
    }
}
const MessageFieldContainer = connect (mapStateToProps, mapDispatchtoProps) (MessageField)
export default MessageFieldContainer;
