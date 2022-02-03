import {addMessage} from "../../../../redux/messages-reducer";
import MessageField from "./MessageField";
import {connect} from "react-redux";
import {getStateMessageData} from "../../../../redux/messages-selector";


let MessageFieldData = (props) => {
    return(
        <MessageField addMessage={props.addMessage} messageData={props.messageData}/>
    )
}

let mapStateToProps = (state) => ({
    messageData : getStateMessageData(state)
});


export default connect (mapStateToProps, {addMessage}) (MessageFieldData);
