import React from "react";
import Users from "./Users";
import {usersAPI} from "../../../api/api";


class UsersAPIContainer extends React.Component {
    componentDidMount() {

        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        })


    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }


    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                      users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching} followingProcessing={this.props.followingProcessing}
                      toggleFollowing={this.props.toggleFollowing}/>


    }
}

export default UsersAPIContainer;