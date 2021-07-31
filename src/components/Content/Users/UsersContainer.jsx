import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    getUsers,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import {withRouter} from "react-router-dom";
import React from "react";
import Users from "./Users";


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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProcessing: state.usersPage.followingProcessing
    }
}

let WithUrlDataContainerComponent = withRouter(UsersContainer)
export default connect(mapStateToProps, {
    changeCurrentPage,
    toggleFollowing,
    getUsers,
    follow,
    unfollow
})(WithUrlDataContainerComponent);