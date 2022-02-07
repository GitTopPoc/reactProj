import React from "react";
import {compose} from "redux";
import Messages from "./Messages";
import {connect} from "react-redux";
import {getStateDialogsData, getStateMessageData} from "../../../redux/messages-selector";
import Preloader from "../../common/Preloader/Preloader";
import {getStateIsAuth} from "../../../redux/auth-selector";


const MessagesContainer = (props) =>{
    if(props.isAuth) {
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
    dialogsData : getStateDialogsData(state),
    messageData : getStateMessageData(state),
    isAuth : getStateIsAuth(state)
});


export default compose (
    connect(mapStateToProps)
) (MessagesContainer)