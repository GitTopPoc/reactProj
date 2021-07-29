import UsersAPIContainer from "./UsersAPIContainer";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unfollow,
    toggleIsFetching,
    toggleFollowing
} from "../../../redux/users-reducer";


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
export default connect(mapStateToProps, {follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage,toggleIsFetching, toggleFollowing})(UsersAPIContainer);