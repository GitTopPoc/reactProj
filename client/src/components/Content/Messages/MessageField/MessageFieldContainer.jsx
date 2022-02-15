import MessageField from "./MessageField";
import {connect} from "react-redux";
import {getStateMessageData} from "../../../../redux/messages-selector";
import {getStateUserId} from "../../../../redux/auth-selector";
import {sendMessage} from "../../../../redux/messages-reducer";



let MessageFieldData = (props) => {


    return(
        <MessageField currentDialog={props.currentDialog} sendMessage={props.sendMessage} authUser={props.authUser} messageData={props.messageData}/>
    )
}

let mapStateToProps = (state) => ({
    messageData : getStateMessageData(state),
    authUser: getStateUserId(state)
});


export default connect (mapStateToProps, {sendMessage}) (MessageFieldData);
