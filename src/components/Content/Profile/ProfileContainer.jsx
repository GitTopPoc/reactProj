import Profile from "./Profile";
import React from "react";
import {getMyProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
            this.props.getMyProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>

        )
    }
}
let mapStateToProps = (state) => ({

    profile : state.profilePage.profile

});


export default compose (
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getMyProfile})
) (ProfileContainer)