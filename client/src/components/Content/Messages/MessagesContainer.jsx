import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Messages from "./Messages";
import {connect} from "react-redux";
import {getStateDialogsData, getStateMessageData} from "../../../redux/messages-selector";
class MessagesContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Messages {...this.props} profile={this.props.profile}/>

        )
    }
}

let mapStateToProps = (state) => ({
    dialogsData : getStateDialogsData(state),
    messageData : getStateMessageData(state)

});


export default compose (
    withAuthRedirect,
    connect(mapStateToProps)
) (MessagesContainer)