import {connect} from "react-redux";
import {changeCurrentPage, follow, requestUsers, toggleFollowing, unfollow} from "../../../redux/users-reducer";
import React from "react";
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


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      isFetching={this.props.isFetching}
                      followingProcessing={this.props.followingProcessing}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getStateUsers(state),
        pageSize: getStatePageSize(state),
        totalUsersCount: getStateTotalUsersCount(state),
        currentPage: getStateCurrentPage(state),
        isFetching: getStateIsFetching(state),
        followingProcessing: getStateFollowingProcessing(state)
    }
}

export default compose (
    connect(mapStateToProps, {
        changeCurrentPage,
        toggleFollowing,
        getUsers: requestUsers,
        follow,
        unfollow
    })) (UsersContainer)