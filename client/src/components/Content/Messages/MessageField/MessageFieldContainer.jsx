import MessageField from "./MessageField";
import {connect} from "react-redux";
import {
    getStateMessageCurrentPage,
    getStateMessageData,
    getStateMessageLoading,
    getStateMessageMaxPages
} from "../../../../redux/messages-selector";
import {getStateUserId} from "../../../../redux/auth-selector";
import {getMessages, sendMessage, setCurrentPage} from "../../../../redux/messages-reducer";


let MessageFieldData = (props) => {
    return (
        <MessageField setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}
                      messageLoading={props.messageLoading} currentDialog={props.currentDialog}
                      getMessages={props.getMessages} sendMessage={props.sendMessage} authUser={props.authUser}
                      messageData={props.messageData} maxPages={props.maxPages}/>
    )
}

let mapStateToProps = (state) => ({
    messageData: getStateMessageData(state),
    maxPages: getStateMessageMaxPages(state),
    messageLoading: getStateMessageLoading(state),
    currentPage: getStateMessageCurrentPage(state),
    authUser: getStateUserId(state)
});


export default connect(mapStateToProps, {sendMessage, getMessages, setCurrentPage})(MessageFieldData);
