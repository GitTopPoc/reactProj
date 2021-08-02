import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Messages from "./Messages";
import {connect} from "react-redux";
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
    dialogsData : state.messagePage.dialogsData,
    messageData : state.messagePage.messageData

});


export default compose (
    withAuthRedirect,
    connect(mapStateToProps)
) (MessagesContainer)