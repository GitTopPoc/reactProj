import Profile from "./Profile";
import React from "react";
import {getMyProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
            this.props.getMyProfile(userId);
            this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>

        )
    }
}
let mapStateToProps = (state) => ({

    profile : state.profilePage.profile,
    status: state.profilePage.status

});


export default compose (
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getMyProfile, getUserStatus, updateUserStatus})
) (ProfileContainer)