import Profile from "./Profile";
import React, {useEffect} from "react";
import {getMyProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getStateProfile, getStateStatus} from "../../../redux/profile-selector";
import {getStateUserId} from "../../../redux/auth-selector";

const ProfileContainer = (props) =>{
    let userId = props.match.params.userId;
    if (userId === 'null') {
        props.history.push('/auth');
    }

    const {getMyProfile} = props;
    const {getUserStatus} = props;

    useEffect(() => {
        getMyProfile(userId);
        getUserStatus(userId);

    }, [userId, getUserStatus, getMyProfile])

    return (
            <Profile {...props} profile={props.profile} status={props.status}/>

        )
}

let mapStateToProps = (state) => ({

    profile : getStateProfile(state),
    status: getStateStatus(state),
    userId: getStateUserId(state)
});

export default compose (
    withRouter,
    connect(mapStateToProps, {getMyProfile, getUserStatus, updateUserStatus})
) (ProfileContainer)