import React, {useEffect} from "react";
import {compose} from "redux";
import Messages from "./Messages";
import {connect} from "react-redux";
import {getStateDialogsData, getStateMessageData} from "../../../redux/messages-selector";
import Preloader from "../../common/Preloader/Preloader";
import {getStateIsAuth} from "../../../redux/auth-selector";
import {withRouter} from "react-router-dom";
import {getMessages, setMessages} from "../../../redux/messages-reducer";


const MessagesContainer = (props) => {

    const {location} = window;
    useEffect(() => {
        if(props.match.params.dialogId){
            props.getMessages(props.match.params.dialogId)
        } else {
            props.setMessages([])
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.href])

    if (props.isAuth) {
        return (
            <Messages {...props} profile={props.profile}/>
        )
    } else {
        return (
            <Preloader/>
        )
    }


}

let mapStateToProps = (state) => ({
    dialogsData: getStateDialogsData(state),
    messageData: getStateMessageData(state),
    isAuth: getStateIsAuth(state)
});


export default compose(
    withRouter,
    connect(mapStateToProps, {getMessages, setMessages})
)(MessagesContainer)