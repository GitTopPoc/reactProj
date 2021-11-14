import {connect} from "react-redux";
import {changeCurrentPage, follow, requestUsers, toggleFollowing, unfollow} from "../../../redux/users-reducer";
import React, {useEffect} from "react";
import Users from "./Users";
import {compose} from "redux";
import {
    getStateCurrentPage,
    getStateFollowingProcessing,
    getStateIsFetching,
    getStatePageSize,
    getStateTotalUsersCount,
    getStateUsers
} from "../../../redux/users-selectors";
import {getStateProfile} from "../../../redux/profile-selector";
import {getStateUserId} from "../../../redux/auth-selector";


const UsersContainer = (props) => {
    const onPageChanged = (pageNumber) => {
        props.changeCurrentPage(pageNumber);
        props.getUsers(pageNumber, props.pageSize);
    }
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, [])
    return <Users totalUsersCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChanged={onPageChanged}
                  users={props.users}
                  isFetching={props.isFetching}
                  followingProcessing={props.followingProcessing}
                  follow={props.follow}
                  unfollow={props.unfollow}
                  userId={props.userId}
    />
}

let mapStateToProps = (state) => {
    return {
        userId: getStateUserId(state),
        users: getStateUsers(state),
        pageSize: getStatePageSize(state),
        totalUsersCount: getStateTotalUsersCount(state),
        currentPage: getStateCurrentPage(state),
        isFetching: getStateIsFetching(state),
        followingProcessing: getStateFollowingProcessing(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        changeCurrentPage,
        toggleFollowing,
        getUsers: requestUsers,
        follow,
        unfollow
    }))(UsersContainer)