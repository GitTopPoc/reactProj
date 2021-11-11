import React, {useEffect} from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {getProfileInfo, setResultMessage, updateProfileInfo} from "../../redux/settings-reducer";

const SettingsContainer = (props) => {
    useEffect(() => {
       if (props.state.auth.userId !== null){
           props.getProfileInfo(props.state.auth.userId)
       }
    },[props.state.auth.userId])

        return <>
            <Settings {...props}/>
        </>

}

const mapStateToProps = (state) => ({
    state:state
})

export default connect(mapStateToProps, {getProfileInfo, updateProfileInfo, setResultMessage}) (SettingsContainer);