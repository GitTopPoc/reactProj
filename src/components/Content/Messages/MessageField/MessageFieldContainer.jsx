import {addMessageAction} from "../../../../redux/messages-reducer";
import MessageField from "./MessageField";
import {connect} from "react-redux";
import {getStateMessageData} from "../../../../redux/messages-selector";


let mapStateToProps = (state) => {
    return {
       messageData: () => {

           return getStateMessageData(state);

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
